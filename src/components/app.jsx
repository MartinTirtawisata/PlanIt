import React from 'react';
// import logo from './logo.svg';
import './app.css';

import LandingPage from './landing-page-screen/landing-page';
import PlanIt from './planit-screen/planit'


import {BrowserRouter, Route, Link} from 'react-router-dom';

export default function App() {

  return (
    <BrowserRouter >
      <div>
        <Route exact path='/' component={LandingPage} />
        <Route path='/home' component={LandingPage} />
        <Route path='/planit' component={PlanIt} />
      </div>
    </BrowserRouter>
    
  );
}