import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types';


const ChartType = ({x, y, name}) => {
    const chartData = {
        labels: x,
        datasets: [{
            label: name,
            data: y,
            fill: false,
            backgroundColor: 'rgb(75, 192, 192)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        }]
    }
    const chartOptions = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    callback: function (value) {
                        if (!value) return 0;
                        if (value < 1e6) return value / 1e3 + 'K';
                        return value / 1e6 + 'M';
                    }
                },
            }]
        }
    };

    let chart;

    const line =
        <Line
            data={chartData}
            options={chartOptions}
        />;
    const bar =
        <Bar
            data={chartData}
            options={chartOptions}
        />;

    switch (name) {
        case 'Cumulative Cases':
        case 'Cumulative Death':
        case 'Cumulative Recovered': chart = line; break;
        case 'Daily Cases':
        case 'Daily Death':
        case 'Daily Recovered': chart = bar; break;
        default: break;
    }

    return (
        <div className="chart">
            { chart }
        </div>
    );
}

ChartType.propTypes = {
    x: PropTypes.array,
    y: PropTypes.array,
    name: PropTypes.string,
};

export default ChartType;
