import React, { useState } from 'react'
import {Backpack} from 'react-kawaii'

const Kawaii = (props) => {
  const [size, setSize] = useState(true);

  // const toggleMood = () => {
  //   props.setMood(prevState => !prevState)
  // }
  
  const toggleSize = () => {
    setSize(prevState => !prevState)
  }

  const sizeCond = size ? 240 : 200;

  return (
    <div className="center-comp section">
      <Backpack size={sizeCond} mood={props.mood} color="#FFD882" />
      <div className="btn-cont">
        {/* <button className="toggle-btn" onClick={toggleMood}>Mood</button> */}
        <button className="toggle-btn" onClick={toggleSize}>Size</button>
      </div>
    </div>
  )
}

export default Kawaii
