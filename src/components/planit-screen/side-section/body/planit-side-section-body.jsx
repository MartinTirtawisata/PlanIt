import React from 'react';
import './planit-side-section-body.css';

export default function PlanItSideSectionBody(){
    return (
        <div style={{margin: '10px auto 20px auto'}}>
            <input style={{border: 'none', borderBottomStyle: 'solid', width: '70%', height: '24px'}} type="text" placeholder="Enter A Location"/>
        </div>
    )
}