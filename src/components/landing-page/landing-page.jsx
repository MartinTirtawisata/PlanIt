import React from 'react';
import './landing-page.css';

import RouteGreen from '../../img/route-green.png'
import RouteBlue from '../../img/route-blue.png'
import RouteTrack from '../../img/route-track.png'

export default function LandingPage(){
    return(
      <div>
        <div style={{border: '1px black solid', height: 'auto'}}>
          <h1 style={{textAlign: 'center', margin: '30px auto'}}>PlanIt</h1>
          <div style={{border: '1px black solid', margin: '40px auto', width: '400px', height: '400px', position: 'relative'}}> 
            <img className="routeGreen" style={{height: '250px', position: 'absolute', left: '80px', top: '50px'}} src={RouteGreen} alt=""/>
            <img className="routeBlue" style={{height: '250px', position: 'absolute', left: '50px', bottom: '100px'}} src={RouteBlue} alt=""/>
            <img className="routeTrack" style={{height: '250px', position: 'absolute', right: '85px', bottom: '100px'}} src={RouteTrack} alt=""/>
          </div>
        </div>
        <div style={{border: '1px black solid', height: 'auto'}}>
  
          <div style={{border: '1px black solid', width: '536px', margin: '15px auto'}}>
            <p style={{textAlign: 'center'}}>
              PlanIt is a multi-waypoint travel management system that allows users to efficiently enter their locations they wish to visit and it will summarize the total distance and miles so you can plan ahead of your travel!
            </p>
          </div>
    
        </div>
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
