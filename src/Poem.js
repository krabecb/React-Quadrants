import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function getData() {
            const response = await fetch(url);
            const data = await response.json();
            const [item] = data;
            setData(item);
            setLoading(false);
        }
        getData()
    }, [url])
    
    return {data, loading};
}

export default function Poem({artToPoem}) {
    const {data, loading} = useFetch('https://poetrydb.org/random/1/lines.json')
    // fetch('https://poetrydb.org/random/1/lines.json')
    // https://api.randomuser.me/
    
    return(
        <div id='poem' className='section kawaii'>
            
            <h1>{artToPoem}</h1>
            {loading ? <div>...loading</div> : <div>{data.lines}</div>}
        </div>
    )
}
