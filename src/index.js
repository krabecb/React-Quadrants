import React, { Component } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Section from "./Section";
import Kawaii from './Kawaii'

import "./styles.css";

const dogApi = "https://random.dog/woof.json"
const foxApi = "https://randomfox.ca/floof/"

class MyApi extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
			apiData1: [],
			apiData2: [],
			callFirst: false,
			callSecond: false,
		}
	}


	componentDidMount() {
		fetch(dogApi)
			.then((res) => res.json())
			.then((data) => this.setState({ apiData1: data.url }))
			.then(() => (this.setState({ callFirst: true })))
		
		fetch(foxApi)
			.then((res) => res.json())
			.then((data) => this.setState({ apiData2: data.image }))
			.then(() => (this.setState({ callSecond: true })))
			
	}

	handleApiCall = () => {
		fetch(dogApi)
			.then((res) => res.json())
			.then((data) => this.setState({ apiData1: data.url })
			);
		
		fetch(foxApi)
			.then((res) => res.json())
			.then((data) => this.setState({ apiData2: data.image })
			);
	}

	render() {
		return (
			<div className="main">
				<Section apiData={this.state.apiData1} />
				<Section apiData={this.state.apiData2} />
				{this.state.callFirst && this.state.callSecond ? <Kawaii mood={'happy'}/> : <Kawaii mood={'sad'} />}
				<Button onClickFunction={ this.handleApiCall }/>
			</div>
		);
	}
}

export default MyApi;

const rootElement = document.getElementById("root");
ReactDOM.render(<MyApi />, rootElement);
