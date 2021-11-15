import React, { Component } from "react";

class UpdateButton extends Component {
	state = {
        toggle: "off"
    }
    render() {
        return (
			<section className="section">
                <button onClick={this.props.onClick}>Update Data</button>
            </section>
        );
    }
}

export default UpdateButton;