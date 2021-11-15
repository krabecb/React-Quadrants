import React from "react";
import Loader from "./Loader"


function Section1 (props) {

    return (
        <div className="section">
            <div className="content">
                { props.loader ? <Loader/> : <img src={props.apiUrl} alt="api" />}
            </div>
        </div>
    )
}


export default Section1;
