import React from 'react';
import './planit-side-section.css';

import PlanItSideSectionBody from './body/planit-side-section-body';
import PlanItSideSectionHeader from './header/planit-side-section-header';

export default function PlanItSideSection({
    waypoints,
    transportMode,
    routeSummary,
    error,
    onWaypointChange,
    onAddWaypoint,
    onRemoveWaypoint,
    onTransportModeChange,
    onPlanIt,
}) {
    return (
        <div style={{ border: '1px solid black', minWidth: '420px', minHeight: '920px', padding: '5px 15px' }}>
            <PlanItSideSectionHeader
                transportMode={transportMode}
                onTransportModeChange={onTransportModeChange}
            />

            <div style={{ border: '1px solid black', padding: '5px' }}>
                {waypoints.map((wp, index) => (
                    <PlanItSideSectionBody
                        key={wp.id}
                        index={index}
                        value={wp.address}
                        canRemove={waypoints.length > 2}
                        onChange={(address) => onWaypointChange(wp.id, address)}
                        onRemove={() => onRemoveWaypoint(wp.id)}
                    />
                ))}
                <button
                    onClick={onAddWaypoint}
                    style={{ margin: '5px 0', padding: '4px 10px', cursor: 'pointer' }}
                >
                    + Add Waypoint
                </button>
            </div>

            {error && (
                <p style={{ color: 'red', marginTop: '8px' }}>{error}</p>
            )}

            <button
                onClick={onPlanIt}
                style={{
                    display: 'block',
                    margin: '15px auto',
                    padding: '10px 30px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    backgroundColor: '#4285F4',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                }}
            >
                PlanIt!
            </button>

            {routeSummary && (
                <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px', borderRadius: '4px' }}>
                    <h3 style={{ margin: '0 0 8px' }}>Route Summary</h3>
                    <p style={{ margin: '4px 0' }}>Distance: {routeSummary.distance}</p>
                    <p style={{ margin: '4px 0' }}>Duration: {routeSummary.duration}</p>
                </div>
            )}
        </div>
    );
}
