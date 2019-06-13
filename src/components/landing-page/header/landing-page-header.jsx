import React from 'react';
import './landing-page-header.css'

import RouteGreen from '../../../img/route-green.png'
import RouteBlue from '../../../img/route-blue.png'
import RouteTrack from '../../../img/route-track.png'

export default function LandingPageHeader(){
    return(
      <div style={{border: '1px black solid', height: 'auto'}}>
        <h1 style={{textAlign: 'center', margin: '30px auto'}}>PlanIt</h1>
        <div style={{border: '1px black solid', margin: '40px auto', width: '400px', height: '400px', position: 'relative'}}> 
          <img className="routeGreen" style={{height: '250px', position: 'absolute', left: '80px', top: '50px'}} src={RouteGreen} alt=""/>
          <img className="routeBlue" style={{height: '250px', position: 'absolute', left: '50px', bottom: '100px'}} src={RouteBlue} alt=""/>
          <img className="routeTrack" style={{height: '250px', position: 'absolute', right: '85px', bottom: '100px'}} src={RouteTrack} alt=""/>
        </div>
      </div>
    )
  }
