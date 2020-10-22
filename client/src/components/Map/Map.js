import React from 'react';
import ReactDOM from 'react-dom';
import "../../pages/Business"

const mapStyles = {
  map: {
    position: 'absolute',
    width: '50%',
    height: '50%'
  }
};
export class CurrentLocation extends React.Component {
  constructor(props) {
    super(props);

    const { lat, lng } = this.props.initialCenter;
    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng
      }
    };
  }
  componentDidMount() {
  
    if (this.props.centerAroundCurrentLocation) {
      if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
          const coords = pos.coords;
          console.log("coords: ", coords);
          this.setState({
            currentLocation: {
              lat: coords.latitude,
              lng: coords.longitude
            }
          });
        });
      }
    }
    this.loadMap();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap();
    }
  }

  loadMap() {
    if (this.props && this.props.google) {
      // checks if google is available
      const { google } = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;

      // reference to the actual DOM element
      const node = ReactDOM.findDOMNode(mapRef);

      let { zoom } = this.props;
      const { lat, lng } = this.state.currentLocation;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign(
        {},
        {
          center: center,
          zoom: zoom
        }
      );
      // maps.Map() is constructor that instantiates the map
      this.map = new maps.Map(node, mapConfig);
    }
  }

  recenterMap() {
    const map = this.map;
    const current = this.state.currentLocation;

    const google = this.props.google;
    const maps = google.maps;

    if (map) {
      let center = new maps.LatLng(current.lat, current.lng);
      map.panTo(center);
    }
  }

  renderChildren() {
    const { children } = this.props;

    if (!children) return;

    return React.Children.map(children, c => {
      if (!c) return;
      return React.cloneElement(c, {
        map: this.map,
        google: this.props.google,
        mapCenter: this.state.currentLocation
      });
    });
  }

  render() {
    const style = Object.assign({}, mapStyles.map);

    return (
      <div>
        <p>testing the location</p>
        <p>Lat: {this.state.currentLocation.lat} | Long: {this.state.currentLocation.lng}</p>
        <div style={style} ref="map">
          Loading map...
        </div>
        {this.renderChildren()}
        
      </div>
    );
  }
}
export default CurrentLocation;

CurrentLocation.defaultProps = {
  zoom: 14,
  initialCenter: {
    lat: -1.2884,
    lng: 36.8233
  },
  centerAroundCurrentLocation: false,
  visible: true
};



// import React, { Component } from "react";
// import { Map, GoogleApiWrapper } from 'google-maps-react';
// import "../../pages/Business"

// const mapStyles = {
//     width: '100%',
//     height: '100%',
//     marginTop: '10%'
// };

// class Map1 extends Component {
//     constructor() {
//         super();
//         this.state = {
//             name: "React",
//             latitude: null,
//             longitude: null,
//         };
//     }

//     position = async () => {
//         await navigator.geolocation.getCurrentPosition(
//             position => this.setState({
//                 latitude: position.coords.latitude,
//                 longitude: position.coords.longitude
//             }),
//             err => console.log(err)
//         );
//         console.log(this.state.latitude)
//     }

//     render() {
//         return (
//             <div>
//                 <Map
//                     google={this.props.google}
//                     zoom={10}
//                     style={mapStyles}
//                 >
//                 </Map>
//                 <div>
//                     <button onClick={this.position} className='Filter'>MAP-BUTTON</button>
//                 </div>

//             </div>
//         );
//     }
// }
// export default GoogleApiWrapper({
// apiKey: 'AIzaSyDAFNp-kiQJKedi-e9ntOpVBihzfQXu7VM'
// })(Map1);

