import React, { Component } from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';
import "../../pages/Business"

const mapStyles = {
    width: '100%',
    height: '100%',
    marginTop: '10%'
};

class Map1 extends Component {
    constructor() {
        super();
        this.state = {
            name: "React",
            latitude: null,
            longitude: null,
        };
    }

    position = async () => {
        await navigator.geolocation.getCurrentPosition(
            position => this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }),
            err => console.log(err)
        );
        console.log(this.state.latitude)
    }

    render() {
        return (
            <div>
                <Map
                    google={this.props.google}
                    zoom={10}
                    style={mapStyles}
                >
                </Map>
                <div>
                    <button onClick={this.position} className='Filter'>MAP-BUTTON</button>
                </div>

            </div>
        );
    }
}
export default GoogleApiWrapper({
apiKey: 'AIzaSyDAFNp-kiQJKedi-e9ntOpVBihzfQXu7VM'
})(Map1);

