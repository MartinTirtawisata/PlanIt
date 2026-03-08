import React from 'react';
import './planit-main-section.css';

import PlanItMainSectionBody from './body/planit-main-section-body';

export default function PlanItMainSection({ routeRequest, onRouteCalculated, onRouteError }) {
    return (
        <div style={{ border: '1px solid black', flex: 1, height: '920px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ margin: '0px 20px' }}>
                <h1>Let's Plan For Your Trip!</h1>
            </div>
            <PlanItMainSectionBody
                routeRequest={routeRequest}
                onRouteCalculated={onRouteCalculated}
                onRouteError={onRouteError}
            />
        </div>
    );
}
