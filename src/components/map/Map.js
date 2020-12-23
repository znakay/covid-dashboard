import React from 'react';
import PropTypes from 'prop-types';
import { MapContainer, GeoJSON, TileLayer } from 'react-leaflet';
import worldGeoJSON from 'geojson-world-map';
import VectorsGroup from './VectorsGroup';
import './map.css';

Map.propTypes = {
    data: PropTypes.object
};

export default function Map(props) {
    const data = props.data
    return (
        <div className="map-window__map">
            <MapContainer center={[20, 0]}
                    zoom={0.6}
                    maxZoom={3}
                    attributionControl={true}
                    zoomControl={true}
                    doubleClickZoom={true}
                    scrollWheelZoom={true}
                    dragging={true}
                    animate={true}
                    easeLinearity={0.35}>
                <GeoJSON
                    data={worldGeoJSON}
                    style={() => ({
                        color: 'rgba(33%, 8%, 29%, 0.3)',
                        weight: 0.5,
                        fillColor: 'rgba(25%, 75%, 65%, 0.3)',
                        fillOpacity: 1,
                    })}
                />
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <VectorsGroup data={data} />
            </MapContainer>
        </div>
    )
}