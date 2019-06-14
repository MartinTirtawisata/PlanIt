import React from 'react';
import './planit-side-section-header.css';

export default function PlanItSideSectionHeader(){
    return (
        <div>
            <div>
                <h1 style={{textAlign: "center"}}>PlanIt</h1>
            </div>
            
            <div>
                <h2>Waypoints</h2>
            </div>
    
            <div>
                <p>May 30, 2019</p>
            </div>
        
            <div style={{display: 'flex'}}>
                <li>Car Icon</li>
                <li>Train Icon</li>
                <li>Person Icon</li>
            </div>
        </div>
    )  
}