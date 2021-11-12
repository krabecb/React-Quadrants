import React, { useEffect, useState } from 'react';

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


    useEffect(() => {
        async function getData() {
            const response = await fetch(url);
            const data = await response.json();
            const [item] = data.results;
            setData(item);
            setLoading(false);
        }
        getData()
    }, [url])
    console.log(data)
    return {data, loading};
}


function Person() {
    const {data, loading} = useFetch('https://api.randomuser.me/')
    // fetch('https://poetrydb.org/random/1/lines.json')
    // https://api.randomuser.me/
    
    return(
        <div className='section kawaii'>
            {/* <Grid width={400} columns = {3} fetchGifs={fetchGifs} /> */}
            {loading ? <div>...loading</div> : 
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

export default Person 