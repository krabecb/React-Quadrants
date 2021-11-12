import { useState } from 'react';

const HappyButton = (props) => {
  return (
    <div className="section kawaii">
      <button onClick={props.action}>Make Me Happy Big Boy</button>
    </div>
  );
};

export default HappyButton;
