import React, { Component } from "react";
import Loader from "./Loader";

const contentStyles = {
	position: "relative",
	top: "50%",
	transform: "translateY(-50%)",
	margin: "0 auto",
	textAlign: "center",
};

class Section extends Component {
	state = {
		data: "",
	};
	
		// this.props.getRandomImage(this.state.data);
	
	//Moving below section upward to index.js so UpdateButton.js can access functions

	// getRandomImage = (arr) => {
	// 	console.log(arr);
	// 	const rand = Math.random() * arr.length;
	// 	const index = Math.floor(rand);

	// 	if (arr[index].image) {
	// 		const url = arr[index].image;
	// 		this.setState({ data: url });
	// 	} else if (arr[index].images) {
	// 		const url = arr[index].images.preview_gif.url;
	// 		this.setState({ data: url });
	// 	}
	// };

	// handleOnClick = () => this.getRandomImage(this.props.apiData);

	generateContent = () => {

		// if (!this.state.data && this.props.apiData.length) {
		if (!this.props.apiDataParsed && this.props.apiData.length) {

			//Commenting below line out will require you to click each image on page reload before .gif will display. Goal?
			// this.getRandomImage(this.props.apiData);
			return <Loader styles={contentStyles} />;
		}
		else {
			return (
				<div style={contentStyles}>
					<img alt="random gif" src={this.props.apiDataParsed} />
				</div>
			);
		}
	};

	render() {
		return (
			<section className="section" /*onClick={this.handleOnClick}*/ >
				{this.generateContent()}
			</section>
		);
	}
}

export default Section;
