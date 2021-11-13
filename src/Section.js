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

	generateContent = () => {
		if (this.props.apiData) {
			return (
				<div style={contentStyles}>
					<img alt="random gif" src={this.props.apiData} />
				</div>
			);
		} else {
			return <Loader styles={contentStyles} />;
		}
	};

	render() {
		return (
			<section className="section">
				{this.generateContent()}
			</section>
		);
	}
}

export default Section;
