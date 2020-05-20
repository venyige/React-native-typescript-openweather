import * as React from "react";

interface IWeatherProps {
    temperature: number | undefined,
    city: string | undefined,
    country: string | undefined,
    humidity: number | undefined,
    description: string | undefined,
    error: string | undefined
}

interface IWeatherStates {

}

class Weather extends React.Component<IWeatherProps, IWeatherStates> {
    constructor(props: IWeatherProps) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
                {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
                {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
                {this.props.description && <p>Conditions: {this.props.description}</p>}
                {this.props.error && <p>Error: {this.props.error} for city: {this.props.city} and country: {this.props.country}</p>}
            </div>
        );
    }
};

export default Weather;