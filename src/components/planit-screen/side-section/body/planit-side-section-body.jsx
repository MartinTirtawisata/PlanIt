import React from 'react';
import './planit-side-section-body.css';

export default function PlanItSideSectionBody({ index, value, canRemove, onChange, onRemove }) {
    const label = index === 0 ? 'Origin' : index === 1 && !canRemove ? 'Destination' : `Stop ${index}`;

    return (
        <div style={{ margin: '10px auto 20px auto', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '12px', color: '#555', minWidth: '65px' }}>{label}</span>
            <input
                style={{ border: 'none', borderBottomStyle: 'solid', height: '24px', flex: 1 }}
                type="text"
                placeholder="Enter a location"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            {canRemove && (
                <button
                    onClick={onRemove}
                    style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#999', fontSize: '18px', padding: '0 4px', lineHeight: 1 }}
                    title="Remove"
                >
                    ×
                </button>
            )}
        </div>
    );
}
