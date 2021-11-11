import React, { Component } from "react";
import ReactDOM from "react-dom";
import Section from "./Section";
import "./index.css";
import axios from 'axios'


const fetchUrl = `https://jsonplaceholder.typicode.com/photos`;
const fetchSecondUrl = `https://api.imgflip.com/get_memes`

class ArtApi extends Component {
	state = {
		apiData1: null,
    apiData2: null,
    happy: false,
    display: true,
	};

	componentDidMount() {
    axios.get(fetchUrl)
    .then((response) => this.setState( {apiData1: response.data,}))
    .catch((error) => console.log(error));
  }

  handleCallback = (childData) => {
      return (
      axios.get(fetchUrl)
      .then((response) => this.setState( {apiData2: response.data,}))
      .catch((error) => console.log(error)),
      this.setState({happy: childData})
      )
    }

	render() {
		return (
			<div className="main">
				<Section apiData1={this.state.apiData1} parentCallback = {this.handleCallback}/>
				<Section apiData={this.state.apiData2}  parentCallback = {this.handleCallback}/>
				<Section apiData={this.state.apiData2} parentCallback = {this.handleCallback}/>
				<Section display={this.state.display} parentCallback = {this.handleCallback}/>
			</div>
		);
	}
}

export default ArtApi;

const rootElement = document.getElementById("root");
ReactDOM.render(<ArtApi />, rootElement);



