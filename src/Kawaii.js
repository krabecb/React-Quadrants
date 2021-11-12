import React, { useState } from 'react';
import {Planet} from 'react-kawaii';



function Kawaii() {

const [mood, setMood] = useState(true);

const toggleMood=() => {
    setMood(prevState => !prevState)
}

const moodCond = mood ? 'sad' : 'happy';
    return (
        <div className='section kawaii'>
            <Planet size={200} mood={moodCond} color="#FDA7DC" />
            <button onClick={toggleMood}> Toggle Check</button>
        </div>
    )
}

export default Kawaii 