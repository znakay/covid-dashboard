import { CircleMarker, Popup } from 'react-leaflet';
import PropTypes from 'prop-types';
import Legend from './Legend';

Vectors.propTypes = {
    data: PropTypes.object
};

const optionsRed = { color: 'rgba(222, 49, 99, 0.3)', fillColor: 'rgba(222, 49, 99, 1)', fill: 'rgba(222, 49, 99, 1)', fillOpacity: '0.4', colorName: "red" };
const optionsGreen = { color: 'rgba(51, 153, 0, 0.3)', fillColor: 'rgba(51, 153, 0, 1)', fill: 'rgba(51, 153, 0, 1)', fillOpacity: '0.4', colorName: "green" };
const optionsBlue = { color: 'rgba(0, 153, 204, 0.3)', fillColor: 'rgba(0, 153, 204, 1)', fill: 'rgba(0, 153, 204, 1)', fillOpacity: '0.4', colorName: "blue" };
const optionsYellow = { color: 'rgba(255, 246, 69, 0.3)', fillColor: 'rgba(255, 246, 69, 1)', fill: 'rgba(255, 246, 69, 1)', fillOpacity: '0.4', colorName: "yellow" };
const maxRadius = 15;
const middleRadius = 8;
const minRadius = 5;
const littleRadius = 3;
const zero = "0";
const divider = 2;

function Vectors(props) {
    const countries = props.data.data;
    let maxProcent = Math.floor(countries.reduce((prev, cur) => +prev + (isNaN(cur.value) ? 0 : +cur.value), 0) / countries.length);
    let middleProcent = Math.floor(maxProcent / divider);
    let minProcent = Math.floor(middleProcent / divider);
    let curOptions = {};
    let vectors = null;
    maxProcent = +(+String(maxProcent)[0] + 1 + zero.repeat(String(maxProcent).length - 1));
    middleProcent = +(+String(middleProcent)[0] + zero.repeat(String(middleProcent).length - 1));
    minProcent = +(+String(minProcent)[0] + zero.repeat(String(minProcent).length - 1));

    if (props.data.name === 'TOTAL_CONFIRMED_COUNTRIES' || props.data.name === 'TOTAL_DEATH_COUNTRIES'
    || props.data.name === 'TOTAL_RECOVERED_COUNTRIES') curOptions = optionsRed;
    else if (props.data.name === 'NEW_CONFIRMED_COUNTRIES' || props.data.name === 'NEW_DEATH_COUNTRIES'
    || props.data.name === 'NEW_RECOVERED_COUNTRIES') curOptions = optionsGreen;
    else if (props.data.name === 'TOTAL_POPULATION_DEATH' || props.data.name === 'TOTAL_POPULATION_COUNFIRM'
    || props.data.name === 'TOTAL_POPULATION_RECOVERED') curOptions = optionsBlue;
    else curOptions = optionsYellow;

    vectors = countries.map((country, index) => {
        const value = country.value;
        let radius = value > maxProcent ? maxRadius : value > middleRadius ? middleRadius : value > minProcent ? minRadius : littleRadius;
        return <CircleMarker eventHandlers={{
            mouseover: (e) => {
              e.target.openPopup();
            },
            mouseout: (e) => {
              e.target.closePopup();
            }
          }} center={country.latlng} opacity="0.3" pathOptions={curOptions} radius={radius} key={index}>
            <Popup classNames="map__popup">
                <h1 className="vectors__title">{country.name}</h1>
                <p className="vectors__description">Value: {value}</p>
            </Popup>
        </CircleMarker>
    });

    return (
        <div className="vectors">
            { vectors }
            <Legend max={maxProcent} middle={middleProcent} min={minProcent} color={curOptions.colorName} />
        </div>
    )
}

export default Vectors;