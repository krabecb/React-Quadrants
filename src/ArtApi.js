import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Kawaii from './Kawaii';
import Poem from './Poem';
import Person from './Person';

import "./styles.css";



// const useFetch = (url) => {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);


//     useEffect(() => {
//         async function getData() {
//             const response = await fetch(url);
//             const data = await response.json();
//             const [item] = data;
//             setData(item);
//             setLoading(false);
//         }
//         getData()
//     }, [url])
    
//     return {data, loading};
// }

const ArtApi = () => {
	// const {data, loading} = useFetch('https://poetrydb.org/random/1/lines.json')
    const [data, setData] = useState('');

    const artToPoem = () => {
        setData('This is data from Parent to Child');
    }

		return (
			<div className="main">
				
				<Kawaii />
				
				<Poem artToPoem={data}/>
				<Person />
				<div class='section kawaii'>
					<button type='button' class='button' onClick={() => artToPoem()}>Click Here</button>
				</div>
			</div>
		);
	}

export default ArtApi;