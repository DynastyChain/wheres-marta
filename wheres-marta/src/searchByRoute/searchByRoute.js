import React, { Component } from 'react';
import LiveBusMap from '../liveBusMap/LiveBusMap.js';
import axios from 'axios';
import ApiKey from '../secrets.js';
import '../App.css';




class SearchByRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: [],
      center: {lat: 33.82, lng: -84.44},
      zoom: 10,
      apiK: {key: ApiKey}
    }
    this.handleChange = this.handleChange.bind(this);
    this.setCoords = this.setCoords.bind(this);

  }

  handleChange(event) {
    this.getBus(event.target.value);
  }

  setCoords(res) {
    var arr = [];
    for(var i=0; i<res.data.length; i++) {
      arr.push([res.data[i].LATITUDE,res.data[i].LONGITUDE]);
    }
    this.setState({coords: arr});
  }

  getBus(r) {
    const marURL = 'http://developer.itsmarta.com/BRDRestService/RestBusRealTimeService/GetBusByRoute/'+r;
    axios({
      method: 'get',
      baseURL: marURL
    }).then((res) => {this.setCoords(res)})
    .catch(function(error) {console.log(error)})
  }



  render() {
    return <div className='App'>

            <select onChange={this.handleChange}>
              <option value='1'></option>
              <option value='110'>110</option>
              <option value='111'>111</option>
            </select>
            <div style={{width: '80vw', height: '80vh', margin: '15px'}}>
              <LiveBusMap coords={this.state.coords}
                          apiK={this.state.apiK}
                          center={this.state.center}
                          zoom={this.state.zoom}></LiveBusMap>
            </div>


           </div>




  }

}

export default SearchByRoute;
