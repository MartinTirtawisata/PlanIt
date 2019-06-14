import React from 'react';
import './planit-side-section.css';

import PlanItSideSectionBody from './body/planit-side-section-body';
import PlanItSideSectionHeader from './header/planit-side-section-header';

export default function PlanItSideSection(){
    return (
        <div style={{border: '1px solid black', minWidth: '420px', height: '920px', padding: '5px 15px'}}>
            {/* Side Header */}
            <PlanItSideSectionHeader />

            {/* Body */}
            <div style={{border: '1px solid black', padding: '5px'}}>
                <PlanItSideSectionBody />
                <PlanItSideSectionBody />
                <PlanItSideSectionBody />
                <PlanItSideSectionBody />
            </div>
        </div>
    )

}

