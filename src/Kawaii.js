import React, { useEffect, useState, useContext } from 'react';
import {Planet} from 'react-kawaii';
import {MoodContext} from './MoodContext';
import {MoodContext2} from './MoodContext2';



function Kawaii(props) {

    // const [mood, setMood] = useState(true);

    // const toggleMood=() => {
    //     setMood(prevState => !prevState)
    // }

    // const moodCond = mood ? 'sad' : 'happy';

    //if loading and loading2 are false, change mood. 
    const { value, setValue } = useContext(MoodContext)
    const { value2, setValue2 } = useContext(MoodContext2)

    //how do I say 'if value === 'happy' && value2 === 'happy' {mood = 'happy'}
    // I can't seem to make it toggle here...so so sad..

    /*I was not able to figure out how to get this thing to switch back to sad when the
    toggle button was clicked, but i'd really like to figure it out. I'm essentially just
    having the fetch hook switch the value to 'sad' when it first runs so atleast it'll have a sad 
    face while it fulfills the promise. i'm a bit embarrassed to say how long this took to figure 
    out lolol. learned a lot though. It took me a great deal of time to figure out that I needed to 
    1st: apply useContext. then 2nd: use each of the components with the fetch hook as the parent to the 
    Kawaii. I was also saved by Eric to start on the toggle route becuase I don't think I would've figured
    this out without that little clue lol. */
    


    return(
        <div className='section kawaii'>
            {/*if both contexts aren't blissful, it'll wait for the promise to finish to change back. */}
            { 
                (value === 'blissful' && value2 === 'blissful') ?
                <Planet className='section kawaii' size={200} mood={'blissful'} color="#FDA7DC" /> :
                <Planet className='section kawaii' size={200} mood={'sad'} color="#FDA7DC" />
            }
            {/* <button onClick={() => setMood('happy')}>Change value</button> */}
        </div>
    )
}

export default Kawaii 