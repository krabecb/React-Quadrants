import React, { useState } from "react";
import { Chocolate } from 'react-kawaii'


function Section3 (props) {




    return (
        <div className="section">
            <div className="content">
                { !props.happy ? <Chocolate size={150} mood="ko" color="#fc105c" /> : <Chocolate size={150} mood="happy" color="#fc105c" /> }
            </div>
        </div>
    )
}


export default Section3;
