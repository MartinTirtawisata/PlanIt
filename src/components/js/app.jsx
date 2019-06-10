import React from 'react';
// import logo from './logo.svg';
import '../css/app.css';
import RouteGreen from '../../img/route-green.png'
import RouteBlue from '../../img/route-blue.png'
import RouteTrack from '../../img/route-track.png'

import {BrowserRouter, Route, Link} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter >
      <div>
        <Route exact path='/' component={LandingPage} />
        <Route path='/home' component={LandingPage} />
        <Route path='/planit' component={PlanItPage} />
    </div>
    </BrowserRouter>
    
  );
}

export default App;

function LandingPage(){
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

function PlanItPage() {
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