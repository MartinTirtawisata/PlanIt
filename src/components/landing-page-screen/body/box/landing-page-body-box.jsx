import React from 'react';
import './landing-page-body-box';

export default function LandingPageBodyBox(props){
    return(
        <div style={{height: '290px', border: '1px solid black', flex: '1', margin: '0px 65px'}}>
            <p>{props.desc}</p>
        </div>
    )
}