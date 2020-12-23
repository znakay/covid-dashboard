import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ItemStatistic from './ItemStatistic';
import './list.css';

const List = ({ currentConfig, flags, isSearch }) => {
    const currentArray = currentConfig;
    const flagsArray = flags;

    currentArray.sort((a, b) => b.value - a.value);

    const mapping = (country, index) => {
        const currentFlag = flagsArray.find((element) => element.name === country.name).value;
        const scrFlag = currentFlag ? currentFlag : 'https://i.imgur.com/ILUckmv.jpg';

        return (
            <ItemStatistic
                key={index}
                value={country.value}
                name={country.name}
                flag={scrFlag}
            />
        );
    };

    const [input, setInput] = useState('');

    const [listItems, setListItems] = useState(
        currentArray.map((country, index) => mapping(country, index))
    );

    useEffect(() => {
        setListItems(
            currentArray
            .filter(country => {
                return country.name.match(new RegExp(`${input}`, 'i'));
            })
            .map((country, index) => mapping(country, index))
        );  
    }, [input]);

    const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    };

    return (
        <>
            {isSearch
                ? <input
                    type="text"
                    placeholder="Search country"
                    onChange={handleChange}
                    value={input}
                />
                : ''
            }
            <div className='statistic-list'>{listItems}</div>
        </>
    );
}

List.propTypes = {
    currentConfig: PropTypes.array.isRequired,
    flags: PropTypes.array.isRequired,
    isSearch: PropTypes.bool,
};

export default List;
