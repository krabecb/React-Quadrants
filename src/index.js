import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Kawaii from "./Kawaii";
import Section from "./Section";
// import axios from "axios";

import "./styles.css";

// const apiKey = process.env.REACT_APP_API_KEY;
// const searchTerm = "art";
// const fetchUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=50&api_key=${apiKey}`;

const url1 = "https://random.dog/woof.json"
const url2 = "https://randomfox.ca/floof/"

class ArtApi extends Component {
	constructor(props) {
		super(props);
		this.state = {
			apiData1: [],
			apiData2: [],
			firstApiCall: false,
			secondApiCall: false,
		};
	}

	toggleBackpack = () => {
		this.setState({firstApiCall: true })
		console.log("I'm gettin' hit.")
		// this.setState({secondApiCall: true })
	}

	componentDidMount() {
		fetch(url1)
			.then((res) => res.json())
			.then((data) => this.setState({ apiData1: data.url }))
			.then(() => (this.setState({firstApiCall: true})))
		fetch(url2)
			.then((res) => res.json())
			.then((data) => this.setState({ apiData2: data.image }))
			.then(() => (this.setState({secondApiCall: true})))
	}

	handleApiCall = () => {
		fetch(url1)
			.then((res) => res.json())
			.then((data) => this.setState({ apiData1: data.url }))
		fetch(url2)
			.then((res) => res.json())
			.then((data) => this.setState({ apiData2: data.image }))
	}

	// const [mood, setMood] = useState(true);

	render() {
		return (
			<div className="main">
				<Section apiData={this.state.apiData1} />
				<Section apiData={this.state.apiData2} />
				{this.state.firstApiCall && this.state.secondApiCall ? <Kawaii mood={'happy'}/> : <Kawaii mood={'sad'} />}
				<Button onClickFunc={this.handleApiCall}/>
			</div>
		);
	}
}

export default ArtApi;

const rootElement = document.getElementById("root");
ReactDOM.render(<ArtApi />, rootElement);
