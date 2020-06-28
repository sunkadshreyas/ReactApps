import React from 'react';
import '../styles.css'

const Display = (props) => {
    return (
        <div className='display'>
            <h3>City : {props.city}</h3>
            <h3>Country : {props.country}</h3>
            <h3>Temperature : {props.temperature}</h3>
            <h3>Humidity : {props.humidity}</h3>
            <h3>Description : {props.description}</h3>
        </div>
    );
}

export default Display;