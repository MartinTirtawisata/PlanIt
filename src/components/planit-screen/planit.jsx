import React from 'react';

import './planit.css';


export default function PlanItPage() {
    return (
      <div style={{display: 'flex'}}>
  
        {/* Side Section */}
        <div style={{border: '1px solid black', width: '438px', height: '920px', padding: '5px 15px'}}>
  
          {/* Title */}
          <div>
            <h1 style={{textAlign: "center"}}>PlanIt</h1>
          </div>
  
          {/* Side Header */}
          <div>
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
  
          {/* Side Main Wrapper */}
          <div style={{border: '1px solid black', padding: '5px'}}>
  
            <div style={{margin: '10px auto 20px auto'}}>
              <input style={{border: 'none', borderBottomStyle: 'solid', width: '70%', height: '24px'}} type="text" placeholder="Enter A Location"/>
            </div>
  
            <div style={{margin: '10px auto 20px auto'}}>
              <input style={{border: 'none', borderBottomStyle: 'solid', width: '70%', height: '24px'}} type="text" placeholder="Enter A Location"/>
            </div>
  
            <div style={{margin: '10px auto 20px auto'}}>
              <input style={{border: 'none', borderBottomStyle: 'solid', width: '70%', height: '24px'}} type="text" placeholder="Enter A Location"/>
            </div>
  
          </div>
          
        </div>
  
        {/* Main Section */}
        <div style={{border: '1px solid black', width: '1482px', height: '920px'}}>
  
          <div style={{margin: '0px 20px'}}>
            <h1>Let's Plan For Your Trip!</h1>
          </div>
  
          <div style={{border: '1px solid black', width:'1382px', height: '820px', margin: 'auto'}}>
            Google Maps
          </div>
  
        </div>
  
      </div>
    )
  }