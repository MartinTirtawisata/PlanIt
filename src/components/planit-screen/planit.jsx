import React from 'react';
import './planit.css';

import PlanItSideSection from './side-section/planit-side-section';
import PlanItMainSection from './main-section/planit-main-section';


export default function PlanIt() {
    return (
      <div style={{display: 'flex'}}>
        <PlanItSideSection />
        <PlanItMainSection />
      </div>
    )
  }