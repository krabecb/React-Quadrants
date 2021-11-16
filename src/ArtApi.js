import React, { useEffect, useState } from "react";
import Poem from './Poem';
import Person from './Person';
import Kawaii from './Kawaii';
import { Planet } from 'react-kawaii';
import "./styles.css";
import { MoodContext } from "./MoodContext";
import { MoodContext2 } from "./MoodContext2";

const ArtApi = () => {
    const [isToggled, setIsToggled] = useState(false);
    const [value, setValue] = useState('sad');
    const [value2, setValue2] = useState('sad');
    


		return (
			<div className="main">
                <MoodContext.Provider value={{value, setValue}}>
                    <MoodContext2.Provider value={{value2, setValue2}}>
                        <Kawaii isToggled={isToggled}/>
                        
                        {/* { isToggled ? <div className='section kawaii'><Planet className='section kawaii' size={200} mood={'happy'} color="#FDA7DC" /></div> : <div className='section kawaii'><Planet size={200} mood={'sad'} color="#FDA7DC" /></div>} */}
                    
                        { isToggled ? <Poem /> : <div className='section kawaii'><p>Click that button</p></div>}
                        { isToggled ? <Person /> : <div className='section kawaii'><p>Click that button</p></div>}
                    </MoodContext2.Provider>
                </MoodContext.Provider>
				<div class='section kawaii'>
					<button type='button' class='button' onClick={() => setIsToggled(!isToggled)}>Toggle</button>
				</div>
			</div>
		);
	}

export default ArtApi;