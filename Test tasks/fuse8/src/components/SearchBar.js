import React from "react";
import './SearchBar.scss'

function SearchBar(props){

    return(
        <div className="container">
            <div className="field">
                <label className="field-title">Filter &emsp; </label>
                <input
                className="field-bar"
                type="text"
                onChange={props.search}
                />
            </div>
        </div>
    )
}
export default SearchBar