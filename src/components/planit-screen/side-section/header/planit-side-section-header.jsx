import React from 'react';
import './planit-side-section-header.css';

import CarIcon from '../../../../img/car.png';
import TrainIcon from '../../../../img/train.png';
import WalkIcon from '../../../../img/walk.png';

export default function PlanItSideSectionHeader({ transportMode, onTransportModeChange }) {
    const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    const modes = [
        { key: 'DRIVING', icon: CarIcon, label: 'Drive' },
        { key: 'TRANSIT', icon: TrainIcon, label: 'Transit' },
        { key: 'WALKING', icon: WalkIcon, label: 'Walk' },
    ];

    return (
        <div>
            <div>
                <h1 style={{ textAlign: 'center' }}>PlanIt</h1>
            </div>
            <div>
                <h2>Waypoints</h2>
            </div>
            <div>
                <p>{today}</p>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
                {modes.map(({ key, icon, label }) => (
                    <button
                        key={key}
                        onClick={() => onTransportModeChange(key)}
                        style={{
                            border: transportMode === key ? '2px solid #4285F4' : '2px solid transparent',
                            background: 'none',
                            cursor: 'pointer',
                            borderRadius: '4px',
                            padding: '4px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                        title={label}
                    >
                        <img src={icon} alt={label} style={{ height: '28px', width: '28px', objectFit: 'contain' }} />
                        <span style={{ fontSize: '11px' }}>{label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
