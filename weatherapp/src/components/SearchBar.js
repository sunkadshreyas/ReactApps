import React from 'react';
import '../styles.css';

const SearchBar = (props) => {
    return (
        <div className='searchbar'>
            <input 
                className='city'
                name='city'
                placeholder='Enter city..'
                type='text' 
                value={props.city} 
                onChange={props.onChange}
            />
            <input 
                className='country'
                name='country'
                placeholder='Enter country..'
                type='text'
                value={props.country}
                onChange={props.onChange}
            />
            <button className='search' onClick={props.onClick}>Search</button>
        </div>
    );
}

export default SearchBar;