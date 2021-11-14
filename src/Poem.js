import React, { useContext, useEffect, useState } from 'react';
import { MoodContext } from "./MoodContext";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading2, setLoading] = useState(true);
    const { value, setValue } = useContext(MoodContext);

    useEffect(() => {
        async function getData() {
            //this sets it to sad when it's 'toggled' becuase I can't currently
            // figure out how to reset the MoodContext when toggle is pressed
            setValue('sad');
            const response = await fetch(url);
            const data  = await response.json();
            const [item] = data;
            setData(item);
            setLoading(false);
            setValue('blissful')
        }
        getData()
    }, [url])
    
    return {data, loading2, value};
}

export default function Poem() {
    const {data, loading2, value} = useFetch('https://poetrydb.org/random/1/lines.json')
    // fetch('https://poetrydb.org/random/1/lines.json')
    // https://api.randomuser.me/

    
    
    return(
        
        <div id='poem' className='section kawaii'>
            {loading2 ? <img src='https://i.imgur.com/6Hq8096.gif'/> : <div>{data.lines}</div>}
        </div>
    )
}
