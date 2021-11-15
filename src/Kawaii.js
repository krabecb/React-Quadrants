import React, { Component } from "react";
import {Planet} from 'react-kawaii';

class Kawaii extends Component {
	
    render() {
        return (
			<section className="section">
                <Planet size={200} mood={this.props.mood} color="#FDA7DC" />
            </section>
        );
    }
}

export default Kawaii;