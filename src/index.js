import React, { Component } from "react";
import ReactDOM from "react-dom";
import Section from "./Section";

import "./styles.css";

const apiKey = process.env.REACT_APP_API_KEY;
const searchTerm = "art";
const fetchUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=50&api_key=${apiKey}`;

class ArtApi extends Component {
	state = {
		apiData: [],
	};

	componentDidMount() {
		fetch(fetchUrl)
			.then((res) => res.json())
			.then((json) => this.setState({ apiData: json.data }));
	}

	render() {
		return (
			<div className="main">
				<Section apiData={this.state.apiData} />
				<Section apiData={this.state.apiData} />
				<Section apiData={this.state.apiData} />
				<Section apiData={this.state.apiData} />
			</div>
		);
	}
}

export default ArtApi;

const rootElement = document.getElementById("root");
ReactDOM.render(<ArtApi />, rootElement);
