import React, { useState } from 'react';
import './planit.css';

import PlanItSideSection from './side-section/planit-side-section';
import PlanItMainSection from './main-section/planit-main-section';

export default function PlanIt() {
    const [waypoints, setWaypoints] = useState([
        { id: 1, address: '' },
        { id: 2, address: '' },
    ]);
    const [transportMode, setTransportMode] = useState('DRIVING');
    const [routeRequest, setRouteRequest] = useState(null);
    const [routeSummary, setRouteSummary] = useState(null);
    const [error, setError] = useState('');

    const handleWaypointChange = (id, address) => {
        setWaypoints(prev => prev.map(wp => wp.id === id ? { ...wp, address } : wp));
    };

    const handleAddWaypoint = () => {
        setWaypoints(prev => [...prev, { id: Date.now(), address: '' }]);
    };

    const handleRemoveWaypoint = (id) => {
        if (waypoints.length <= 2) return;
        setWaypoints(prev => prev.filter(wp => wp.id !== id));
    };

    const handlePlanIt = () => {
        const filled = waypoints.filter(wp => wp.address.trim());
        if (filled.length < 2) {
            setError('Please enter at least 2 locations.');
            return;
        }
        setError('');
        setRouteSummary(null);
        setRouteRequest({ waypoints: filled, transportMode, timestamp: Date.now() });
    };

    return (
        <div style={{ display: 'flex' }}>
            <PlanItSideSection
                waypoints={waypoints}
                transportMode={transportMode}
                routeSummary={routeSummary}
                error={error}
                onWaypointChange={handleWaypointChange}
                onAddWaypoint={handleAddWaypoint}
                onRemoveWaypoint={handleRemoveWaypoint}
                onTransportModeChange={setTransportMode}
                onPlanIt={handlePlanIt}
            />
            <PlanItMainSection
                routeRequest={routeRequest}
                onRouteCalculated={setRouteSummary}
                onRouteError={setError}
            />
        </div>
    );
}
