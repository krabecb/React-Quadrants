import React from 'react'

const Button = (props) => {
  return (
    <div className="center-comp section">
      <button className="button" onClick={props.onClickFunc}>New API call</button>
    </div>
  )
}

export default Button
