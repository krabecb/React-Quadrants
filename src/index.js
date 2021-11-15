import React, { Component } from "react";
import ReactDOM from "react-dom";
import Section from "./Section";
import Button from "./Button";
import RandomFact from "./RandomFact"
import BackpackQuad from "./BackpackQuad"

import "./styles.css";

const fetchUrl1 = `https://dog.ceo/api/breeds/image/random`;
const fetchUrl2 = `https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1`;

class Quadrants extends Component {
	state = {
		apiData1: "",
		apiData2: [],
		apiState1: false,
		apiState2: false,
	};

	getData = () => {
		const self = this;
		self.setState({
		  	apiState1: false,
		  	apiState2: false,
		});

		fetch(fetchUrl1)
			.then((res) => res.json())
			.then((json) => this.setState({ apiData1: json.message  }))
			.then(() => this.setState({ apiState1: true}));

			fetch(fetchUrl2)
			.then((res) => res.json())
			.then((json) => this.setState({ apiData2: json.text }))
			.then(() => this.setState({ apiState2: true}));
	}

	componentDidMount() {
		this.getData()
	}

	render() {
		return (
			<div className="main">
				< Section apiData={this.state.apiData1} />
				< RandomFact apiData={this.state.apiData2} />
				{this.state.apiState1 && this.state.apiState2 ? <BackpackQuad mood={'happy'} /> : <BackpackQuad mood={'sad'} />}
				< Button func={this.getData}/>
			</div>
		);
	}
}

export default Quadrants;

const rootElement = document.getElementById("root");
ReactDOM.render(<Quadrants />, rootElement);
