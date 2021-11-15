import React, { Component } from "react";
import {Planet} from 'react-kawaii';

class Kawaii extends Component {
	state = {
        mood: "sad"
    }
    render() {
        return (
			<section className="section">
                <Planet size={200} mood={this.state.mood} color="#FDA7DC" />
            </section>
        );
    }
}

export default Kawaii;