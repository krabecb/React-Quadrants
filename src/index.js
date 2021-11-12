import React, { Component } from "react";
import ReactDOM from "react-dom";
import Section from "./Section";
import Kawaii from "./Kawaii";
import Button from "./Button";
import RandomFact from "./RandomFact"

import "./styles.css";

const apiKey = process.env.REACT_APP_API_KEY;
const searchTerm = "cat";
const fetchUrl1 = `api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
const fetchUrl2 = `https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1`;

class Quadrants extends Component {
	state = {
		apiData1: "",
		apiData2: [],
	};

	getData = () => {
		fetch(fetchUrl1)
			.then((res) => res.json())
			.then((json) => this.setState({ apiData1: json.data.images.preview_gif.url }));
			console.log(this.state.apiData1)

		fetch(fetchUrl2)
			.then((res) => res.json())
			.then((json) => this.setState({ apiData2: json.text }));
	}

	componentDidMount() {
		this.getData()
	}

	render() {
		console.log(this.state.apiData1)
		return (
			<div className="main">
				< Section apiData={this.state.apiData1} />
				< RandomFact apiData={this.state.apiData2} />
				< Button func={this.getData}/>
				< Kawaii />
			</div>
		);
	}
}

export default Quadrants;

const rootElement = document.getElementById("root");
ReactDOM.render(<Quadrants />, rootElement);
