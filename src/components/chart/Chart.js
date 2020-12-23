import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ChartType from './ChartType';
import './chart.css';


const Chart = ({ chartByClick, _default }) => {
    const [chart, setChart] = useState({
        x: _default.data.X,
        y: _default.data.Y,
    });
    const name = _default.name === chartByClick.name ? chartByClick.name : chartByClick.name;

    useEffect(() => {
        const data = chartByClick.data;

        setChart({
            x: data.X,
            y: data.Y,
        });

    }, [chartByClick]);

    return (
        <div className="chart-container">
            <ChartType
                x={chart.x}
                y={chart.y}
                name={name}
            />
        </div>
    );
}

Chart.propTypes = {
    chartByClick: PropTypes.object,
    _default: PropTypes.object,
};

export default Chart;
