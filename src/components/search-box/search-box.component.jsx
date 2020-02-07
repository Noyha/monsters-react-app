import React from 'react';

import './search-box.styles.css';

// functional component is just a component who gets some props and returns html
export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
    className="search"
    type="search"
    placeholder={ placeholder }
    onChange={ handleChange }
    />
);