import React from 'react';
import './body/planit-main-section-body';

import PlanItMainSectionBody from './body/planit-main-section-body';

export default function PlanItMainSection(){
    return (
        <div style={{border: '1px solid black', width: '1482px', height: '920px'}}>
  
            <div style={{margin: '0px 20px'}}>
                <h1>Let's Plan For Your Trip!</h1>
            </div>
            
            <PlanItMainSectionBody />
  
        </div>
    )
}