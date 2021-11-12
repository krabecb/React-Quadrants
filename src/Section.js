import React, { Component } from "react";
import Loader from "./Loader";

const contentStyles = {
	position: "relative",
	top: "50%",
	transform: "translateY(-50%)",
	margin: "0 auto",
	textAlign: "center",
};

// class Section extends Component {
// 	state = {
// 		data: "",
// 	};

	// getRandomImage = (arr) => {
	// 	console.log("Made it here")
	// 	const rand = Math.random() * arr.length;
	// 	const index = Math.floor(rand);
	// 	const url = arr[index].images.preview_gif.url;
	// 	this.setState({ data: url });
	// };

	// handleOnClick = () => this.getRandomImage(this.props.apiData);

	// generateContent = () => {
	// 	if (!this.state.data && this.props.apiData.length) {
	// 		this.getRandomImage(this.props.apiData);
	// 		return <Loader styles={contentStyles} />;
	// 	} else {
	// 		return (
	// 			<div style={contentStyles}>
	// 				<img alt="random gif" src={this.state.data} />
	// 			</div>
	// 		);
	// 	}
	// };

function Section(props) {
		console.log(props)
		return (
			<section className="section">
				<img alt="random gif" src={props.apiData} />
			</section>
		);
	}

export default Section;
