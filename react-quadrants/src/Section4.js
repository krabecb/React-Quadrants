import React from "react";


function Section4 (props) {

    const handleClick = (e) => {
        e.preventDefault();
        return (
                props.parentCallback(true, false)
            )
        }



    return (
        <div className="section">
            <div className="content">
                <button onClick={handleClick}>Click Me</button>
            </div>
        </div>
    )
}


export default Section4;
