import React from "react";
import './SearchBox.css'

const SearchBox = ({ searchChange }) => {
    return (
        <div className="pa2">
            <input onChange={searchChange} className="search-box" type="search" placeholder="search robots friends" />

        </div>
    )
}

export default SearchBox;