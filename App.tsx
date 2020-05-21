/**
 * React Native Typescript WeatherTsApp
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Platform,
    NativeModules,
    Image,
} from 'react-native';

import {
    Header,
    Colors,
} from 'react-native/Libraries/NewAppScreen';

import OpenWeatherMap from 'openweathermap-ts';

import ApiCode from './components/secret';
import { GeoLoc } from './components/geolocproc';

/*   const lang: string = Platform.select({
    ios: 'en',//
    android: NativeModules.I18nManager.localeIdentifier.split('_')[0]||'en'
});   */
const lang = (Platform.OS === 'ios') ?
    NativeModules.SettingsManager.settings.AppleLocale ||
    NativeModules.SettingsManager.settings.AppleLanguages[0] || 'en' :
    NativeModules.I18nManager.localeIdentifier.split('_')[0] || 'en';

interface Tstates {
    weatherData: any | null,
    loading: boolean | undefined
}


class WeatherTsApp extends React.Component<{}, Tstates> {
    constructor(props: any) {
        super(props);

        this.state = {
            weatherData: null,
            loading: true,
        }
        this.weatherFetcher = this.weatherFetcher.bind(this);
    }
    openWeather = new OpenWeatherMap({
        apiKey: ApiCode(),
        language: lang,
        units: 'metric'
    });

    weatherFetcher = async (): Promise<any> => {
        try {
            const geoloc = await GeoLoc();
            const weather = await this.openWeather.getCurrentWeatherByGeoCoordinates(+(geoloc.latitude), +(geoloc.longitude));
            const weatherJson = JSON.parse(JSON.stringify(weather));
            console.log('Weather object: ', weatherJson.list[0], '//nGeoLoc: ', geoloc.latitude, '; ', geoloc.longitude);
            this.setState({ weatherData: weatherJson, loading: false });
        } catch (error) {
            console.error('Error is ', error);

        }
    };
    render() {
        let uri: any = 'http://openweathermap.org/img/w/01n.png';
        const { weatherData, loading } = this.state;
        if (weatherData === null) {
            this.weatherFetcher();
        } else {
            uri = 'http://openweathermap.org/img/w/' + weatherData.list[0].weather[0].icon + '.png';
            console.log(lang);
        }
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <ScrollView
                        contentInsetAdjustmentBehavior="automatic"
                        style={styles.scrollView}>
                        <Header />
                        <View style={styles.body}>
                            <View style={styles.sectionContainer}>
                                <Text style={styles.sectionTitle}>React Native Typescript WeatherTsApp</Text>
                                {loading ? <Text style={styles.sectionDescription}> 'Waiting for the response of Weather Map API'  </Text> :
                                    <>
                                        <Text style={styles.sectionDescription}> {weatherData.city.name}, {weatherData.city.country}</Text>
                                        <Image style={{ width: 64, height: 64 }} source={{ uri }} />
                                        <Text style={styles.sectionDescription}> Description (local): {weatherData.list[0].weather[0].description}</Text>
                                        <Text style={styles.sectionDescription}> Temperature (°C): {weatherData.list[0].main.temp} (max: {weatherData.list[0].main.temp_max}, min: {weatherData.list[0].main.temp_min})</Text>
                                        <Text style={styles.sectionDescription}>Temp. feeling (°C): {weatherData.list[0].main.feels_like}</Text>
                                        <Text style={styles.sectionDescription}>Humidity (%): {weatherData.list[0].main.humidity}</Text>
                                        <Text style={styles.sectionDescription}>Wind (m/s): {weatherData.list[0].wind.speed}</Text>
                                    </>}
                            </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </>
        );
    }
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

export default WeatherTsApp;
