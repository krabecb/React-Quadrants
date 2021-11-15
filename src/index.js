import React, { Component } from "react";
import ReactDOM from "react-dom";
import Section from "./Section";
import Kawaii from "./Kawaii";
import UpdateButton from "./UpdateButton";
import "./styles.css";

// const Example = () => <Planet size={200} mood="sad" color="#FDA7DC" />;
const apiKey = process.env.REACT_APP_API_KEY;
const searchTerm = "art";
const fetchUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=50&api_key=${apiKey}`;
// const fetchUrl = `https://aws.random.cat/meow`;
// const fetchUrl = `https://cataas.com/cat/gif`;
// const fetchUrl = `https://www.reddit.com/search.json?q=chicken`;
const fetchUrl2 = `https://fakestoreapi.com/products`;

class ArtApi extends Component {
	state = {
		apiData: [],
		apiData2: [],
		apiDataParsed: "",
		apiData2Parsed: "",
		kawaiiMood: "sad",
	};

	componentDidUpdate(prevProps, prevState) {
		// this.state.data = this.props.apiData; 
		if (prevState.apiDataParsed !== this.state.apiDataParsed) {
			const url = this.state.apiDataParsed;
			console.log("Displaying new state: " + this.state.apiDataParsed);
			this.setState({ apiDataParsed: url});
		} 
		
		if (prevState.apiData2Parsed !== this.state.apiData2Parsed) {
			const url = this.state.apiData2Parsed;
			console.log("Displaying new state: " + this.state.apiData2Parsed);
			this.setState({ apiData2Parsed: url});
		}
		if (prevState.apiData2Parsed !== this.state.apiData2Parsed) {
			const mood = "happy";
			this.setState({kawaiiMood: mood});
		}
	}

	componentDidMount() {

		console.log("Component mounted successfully")

		fetch(fetchUrl)
		.then(response => {
		    console.log(response)
		    return response.json()
		})
		.then(json => {
		    console.log(json); 
			this.setState({apiData: json.data}); //json.data or json
		})

		fetch(fetchUrl2)
		.then(response => {
		    console.log(response)
		    return response.json()
		})
		.then(json => {
		    console.log(json); 
			this.setState({apiData2: json}); //json.data or json
		})
	}

	getRandomImage = (arr) => {
		console.log(arr);
		console.log(arr.length)
		const rand = Math.random() * arr.length;
		const index = Math.floor(rand);

		if (arr[index].image) {
			console.log("Setting state")
			const url = arr[index].image;
			this.setState({ apiDataParsed: url });
			console.log(this.state.apiDataParsed);
			// console.log(arr);
		} else if (arr[index].images) {
			console.log("Setting state")
			const url = arr[index].images.preview_gif.url;
			this.setState({ apiData2Parsed: url });
			console.log(this.state.apiData2Parsed);
		}
	};

	//Duplicated so the two separate APIs will both render
	handleOnClick = () => {
		this.getRandomImage(this.state.apiData);
		this.getRandomImage(this.state.apiData2);
	}
	// handleOnClick = () => this.getRandomImage(this.props.apiData);

	render() {
		return (
			<div className="main">
				<Section apiData={this.state.apiData} apiDataParsed={this.state.apiDataParsed} />
				<Section apiData={this.state.apiData2} apiDataParsed={this.state.apiData2Parsed} />
				<Kawaii mood={this.state.kawaiiMood}/>
				<UpdateButton onClick={this.handleOnClick}/>
			</div>
		);
	}
}

export default ArtApi;

const rootElement = document.getElementById("root");
ReactDOM.render(<ArtApi />, rootElement);
