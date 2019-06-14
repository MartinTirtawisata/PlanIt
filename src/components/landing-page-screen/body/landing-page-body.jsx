import React from 'react';
import './landing-page-body.css';

export default function LandingPageBody(){
    return(
      <div>
        {/* Body Text */}
        <div style={{border: '1px black solid', height: 'auto'}}>
      
          <div style={{border: '1px black solid', width: '536px', margin: '15px auto'}}>
            <p style={{textAlign: 'center'}}>
              PlanIt is a multi-waypoint travel management system that allows users to efficiently enter their locations they wish to visit and it will summarize the total distance and miles so you can plan ahead of your travel!
            </p>
          </div>
    
        </div>
  
        {/* Body Infographic */}
        <div style={{border: '1px black solid', height: 'auto'}}>
          <div style={{width: '1364px', border: '1px solid black', margin: '30px auto', display: 'flex', flexDirection: 'row'}}>
            <div style={{width: '260px', height: '290px', border: '1px solid black', flex: '1', marginRight: '130px'}}>
              <p>Search Location</p>
            </div>
  
            <div style={{width: '260px', height: '290px', border: '1px solid black', flex: '1', margin: '0px 130px '}}>
              <p>Waypoint Summary</p>
            </div>
  
            <div style={{width: '260px', height: '290px', border: '1px solid black', flex: '1', marginLeft: '130px'}}>
              <p>PlanIt</p>
            </div>
  
          </div>
        </div>
      </div>
    )
  }