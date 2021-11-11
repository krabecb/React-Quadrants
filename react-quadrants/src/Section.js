import React, { useState } from "react";
import Loader from "./Loader"


function Section (props) {

    const [state, setState] = useState(null)
    const [showLoader, setLoader] = useState(true)

    const generateContent = () => {
        
        if (props.apiData1) {
            return ( setState(
                    <img src={props.apiData1.thumbnailUrl} alt="placeholder"/>)
        )}
        else if (props.display) {
            return(
                null
            )
        }
        else {
            return ( setState (
                <p>Hi there</p>)
            )
        }
    }

    const handleClick = (e) => {
        e.preventDefault();
        return (
            generateContent(), setLoader(false), props.parentCallback(true)
            )
    }


    return (
        <div className="section">
            <div className="content">
                { showLoader && !props.display ?
                    <Loader/> : 
                    state}
                { props.display ? <button onClick={handleClick}>Click Me</button> : null }
            </div>
        </div>
    )
}


export default Section;
