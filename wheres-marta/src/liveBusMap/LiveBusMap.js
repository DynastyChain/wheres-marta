import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../marker/marker.js';



class LiveBusMap extends Component {


  generateMarks(arr) {
    const items = arr.map((ar, index) => {
       return ( <Marker key={index} lat={ar[0]} lng={ar[1]}></Marker>)});
    return items;
  }

  render() { return <GoogleMapReact bootstrapURLKeys={this.props.apiK}
                                    defaultCenter={this.props.center}
                                    defaultZoom={this.props.zoom}>
                      {this.generateMarks(this.props.coords)}
                    </GoogleMapReact>
                  }
}


export default LiveBusMap;
