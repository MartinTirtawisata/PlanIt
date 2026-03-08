import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

import './planit-main-section-body.css';

export class PlanItMainSectionBody extends React.Component {
    constructor(props) {
        super(props);
        this.directionsService = null;
        this.directionsRenderer = null;
        this.mapRef = null;
    }

    onMapReady = (mapProps, map) => {
        this.mapRef = map;
        this.directionsService = new this.props.google.maps.DirectionsService();
        this.directionsRenderer = new this.props.google.maps.DirectionsRenderer();
        this.directionsRenderer.setMap(map);

        if (this.props.routeRequest) {
            this.calculateRoute(this.props.routeRequest);
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.routeRequest && this.props.routeRequest !== prevProps.routeRequest) {
            this.calculateRoute(this.props.routeRequest);
        }
    }

    calculateRoute = (routeRequest) => {
        if (!this.directionsService || !this.directionsRenderer) return;

        const { waypoints, transportMode } = routeRequest;
        if (waypoints.length < 2) return;

        const origin = waypoints[0].address;
        const destination = waypoints[waypoints.length - 1].address;
        const middleWaypoints = waypoints.slice(1, -1).map(wp => ({
            location: wp.address,
            stopover: true,
        }));

        this.directionsService.route(
            {
                origin,
                destination,
                waypoints: middleWaypoints,
                travelMode: this.props.google.maps.TravelMode[transportMode],
            },
            (result, status) => {
                if (status === 'OK') {
                    this.directionsRenderer.setDirections(result);
                    const legs = result.routes[0].legs;
                    const totalMeters = legs.reduce((sum, leg) => sum + leg.distance.value, 0);
                    const totalSeconds = legs.reduce((sum, leg) => sum + leg.duration.value, 0);
                    const summary = {
                        distance: (totalMeters / 1000).toFixed(1) + ' km (' + (totalMeters / 1609.34).toFixed(1) + ' mi)',
                        duration: formatDuration(totalSeconds),
                    };
                    if (this.props.onRouteCalculated) {
                        this.props.onRouteCalculated(summary);
                    }
                } else {
                    if (this.props.onRouteError) {
                        this.props.onRouteError('Could not calculate route. Please check your locations.');
                    }
                }
            }
        );
    }

    render() {
        const mapStyles = { width: '100%', height: '100%' };
        return (
            <div style={{ flex: 1, position: 'relative' }}>
                <Map
                    google={this.props.google}
                    zoom={8}
                    style={mapStyles}
                    initialCenter={{ lat: 47.444, lng: -122.176 }}
                    onReady={this.onMapReady}
                />
            </div>
        );
    }
}

function formatDuration(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.round((seconds % 3600) / 60);
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes} min`;
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(PlanItMainSectionBody);
