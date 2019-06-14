import React from 'react';
// import logo from './logo.svg';
import './app.css';

import LandingPage from './landing-page-screen/landing-page';
import PlanItPage from './planit-screen/planit'


import {BrowserRouter, Route, Link} from 'react-router-dom';

export default function App() {

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