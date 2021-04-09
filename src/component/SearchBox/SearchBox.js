import React from 'react';
import "./SearchBox.css"

function SearchBox(props) {
    return (
        <input 
        className="search"
        type='search'
         placeholder={props.placeHolder}
          onChange={props.handleChange} 
        />
    );
}

export default SearchBox;