import React, { Component } from "react";
import ReactDOM from "react-dom";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4"
import "./index.css";
import axios from 'axios'


const fetchUrl = `https://jsonplaceholder.typicode.com/photos`;
const fetchSecondUrl = `https://api.imgflip.com/get_memes`

class ArtApi extends Component {
	state = {
		apiData1: [],
    apiData2: [],
    happy: false,
    loader: true,
    apiData1Url: null,
    apiData2Url: null
	};

	componentDidMount() {
    axios.get(fetchUrl)
    .then((response) => this.setState( {apiData1: response.data}))
    .catch((error) => console.log(error));

    axios.get(fetchSecondUrl)
      .then((response) => this.setState( {apiData2: response.data}))
      .catch((error) => console.log(error));
  }

  getRandomImage1 = (arr) => {
      console.log(arr)
      const rand =  Math.random() * arr.length;
      const index = Math.floor(rand);
      const url =  arr[index].thumbnailUrl;
      console.log(url)
      this.setState( {apiData1Url: url} );
    };

getRandomImage2 = (arr) => {
    console.log(arr)
    const rand =  Math.random() * arr.data.memes.length;
    const index = Math.floor(rand);
    const url =  arr.data.memes[index].url;
    console.log(url)
    this.setState( {apiData2Url: url} );
  };

  handleCallback = (childData1, childData2) => {
      this.getRandomImage1(this.state.apiData1)
      this.getRandomImage2(this.state.apiData2)
      return (
      this.setState({happy: childData1, loader: childData2})
      )
    }

	render() {
		return (
			<div className="main">
				<Section1 loader={this.state.loader} apiUrl={this.state.apiData1Url}/>
				<Section2 loader={this.state.loader} apiUrl={this.state.apiData2Url}/>
				<Section3 happy={this.state.happy}/>
				<Section4 parentCallback={this.handleCallback}/>
			</div>
		);
	}
}

export default ArtApi;

const rootElement = document.getElementById("root");
ReactDOM.render(<ArtApi />, rootElement);



