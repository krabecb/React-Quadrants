import React from 'react'

const Button = (props) => {
    return (
        <div className="section">
            <button className="button" onClick={props.onClickFunction}>Click me, baby</button> 
        </div>
    )
}

export default Button;


