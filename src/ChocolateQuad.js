import { Chocolate } from 'react-kawaii';
import { useState } from 'react';

const ChocolateQuad = (props) => {
  // const [mood, setMood] = useState('sad');

  return (
    <div className="section kawaii">
      <Chocolate size={320} mood={props.mood} color="#fc105c" />
    </div>
  );
};

export default ChocolateQuad;
