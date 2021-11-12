import {Planet} from 'react-kawaii';
import React, { useState } from 'react'

const Kawaii = () => {
    const [ mood, setMood] = useState(true);

    const toggleMood = () => {
        setMood(prevState => !prevState)
    }

    const moodCond = mood ? 'sad' : 'happy';

    return(
        <div className="section kawaii">
            < Planet size={200} mood={moodCond} color="#FDA7DC" />
        </div>
    )
}

export default Kawaii;
