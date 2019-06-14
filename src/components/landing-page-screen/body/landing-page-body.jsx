import React from 'react';
import './landing-page-body.css';

import LandingPageBodyBox from './box/landing-page-body-box';

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
  
        {/* Body Box */}
        <div style={{border: '1px black solid', height: 'auto'}}>
          <div style={{width: '1364px', border: '1px solid black', margin: '30px auto', display: 'flex', flexDirection: 'row'}}>

            <LandingPageBodyBox desc="Search Location" style={{marginRight: '130px'}} />
            <LandingPageBodyBox desc="Waypoint Summary" style={{margin: '0px 130px '}} />
            <LandingPageBodyBox desc="PlanIt!" style={{marginLeft: '130px'}} />
  
          </div>
        </div>
      </div>
    )
  }