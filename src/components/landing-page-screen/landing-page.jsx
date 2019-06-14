import React from 'react';
import './landing-page.css';

import LandingPageHeader from './header/landing-page-header';
import LandingPageBody from './body/landing-page-body'


export default function LandingPage(){
    return(
      <div>
        <LandingPageHeader />
        <LandingPageBody />
      </div>
    )
}


