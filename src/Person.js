import React, { useContext, useEffect, useState } from 'react';
import { MoodContext2 } from './MoodContext2';


// import { Grid } from '@giphy/react-components'
// import { GiphyFetch } from '@giphy/js-fetch-api'

// const apiKey = process.env.REACT_APP_API_KEY;
// const searchTerm = "poop";
// // const fetchUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=50&api_key=${apiKey}`

// const gf = new GiphyFetch(apiKey)
// const fetchGifs = (offset) => gf.search(searchTerm, { offset, limit: 3 })

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { value2, setValue2 } = useContext(MoodContext2);


    useEffect(() => {
        async function getData() {
            const response = await fetch(url);
            const data = await response.json();
            const [item] = data.results;
            setData(item);
            setLoading(false);
            setValue2('blissful');
        }
        getData()
    }, [url])
    console.log(data)
    return {data, loading, value2};
}


export default function Person() {
    const {data, loading, value2} = useFetch('https://api.randomuser.me/')
    // fetch('https://poetrydb.org/random/1/lines.json')
    // https://api.randomuser.me/

    
    
    return(
        <div className='section kawaii'>
            {/* <Grid width={400} columns = {3} fetchGifs={fetchGifs} /> */}
            {loading ? <img src='https://i.imgur.com/6Hq8096.gif'/> : 
            <div>
                {data.name.first}
                %
                {data.name.last}
                <br/>
                <img src={data.picture.large}/>
            </div>}
        </div>

    )
}

 