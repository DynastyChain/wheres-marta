import React, { Component } from 'react';


class SearchByRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRoute: '',
      buses: []
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({selectedRoute: event.target.value});
  }

  render() {
    return <div>
            <select value={this.state.selectedRoute} onChange={this.handleChange}>
              <option value=''></option>
              <option value='110'>110</option>
              <option value='111'>111</option>
            </select>
            <h1>{this.state.selectedRoute}</h1>

           </div>




  }

}

export default SearchByRoute;
