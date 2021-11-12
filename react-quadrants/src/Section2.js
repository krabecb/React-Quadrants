import React from "react";
import Loader from "./Loader"


function Section2 (props) {


    return (
        <div className="section">
            <div className="content">
                { props.loader ? <Loader/> : <img className="api-image" src={props.apiUrl} alt="api" />}
            </div>
        </div>
    )
}


export default Section2;
