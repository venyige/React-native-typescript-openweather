# React-native-typescript-openweather
### Preface 
I have decided not to use Expo, as this app has been written in order to give a good sight on my proof of coding react-native in typescript.
### Prerequisites
Preference - npm:
```
npm install react-native-template-typescript -g
npm install react-native-get-location
npm install openweathermap-ts
```

Preference – yarn:

```
yarn global add react-native-template-typescript
yarn add react-native-get-location
yarn add openweathermap-ts
```

### Initial steps
In Android Studio a virtual device has been created.

Ts templated project initiated as a starting point:
```
npx react-native init tshw --template typescript
```
### Development
to: HOME/android/app/src/main/AndroidManifest.xml
```

<!-- Define ACCESS_FINE_LOCATION if you will use enableHighAccuracy=true  -->
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
 
<!-- Define ACCESS_COARSE_LOCATION if you will use enableHighAccuracy=false  -->
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
```

to: HOME/ios/tshw/Info.plist
```

        <key>NSLocationWhenInUseUsageDescription</key>
        <string>This app needs to get your location...</string>
```

### Run the application in simulator
This is necessary to create a file ‘./components/secret.tsx’ with the content:
```
const ApiCode=():string=>'APPID';
export  default ApiCode;
```


Where APPID is  your APPID to https://openweathermap.org. 

Terminal1: 

```
yarn (or npm install)
npx react-native start
```
Terminal2:
```
npx react-native run-android
```

### Debug
In order to investigate the debug log, you should invoke a 3rd terminal with:

Terminal3:
```
npx react-native log-android 
```

or 
```
npx react-native log-ios
```

### ToDo
1. Embed the weather app into a geomap app whith initial position of the device’s current position or default (Budapest, HU).
2. Develop the app with the same functionalities on Expo in parallel.
3. Develop the app with the use and decorate with as many node modules as possible.


