import React, { Component } from 'react';
import './Hello.css';
import API from '../../utils/API';


class Hello extends Component {
  // state = {
  //   getSamples: [{
  //     "name":"hello"},{"name":"world"}],
  // }

  componentDidMount() {
    this.loadSample();
  }

  loadSample = () => {
    API.getSamples()
      .then(res => this.setState({ getSample: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return <h1 className="hello"> Hello, {this.props.name}</h1>;
    }
}

export default Hello; 
