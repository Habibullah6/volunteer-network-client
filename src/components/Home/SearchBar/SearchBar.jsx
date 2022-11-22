import React from 'react';
import "./SearchBar.css";
const SearchBar = () => {
    return (
        <div>
            <div className='mt-5'>
                <h2>I GROW BY HELPING PEOPLE IN NEED</h2>
                <div className="input-group m-auto mt-3 search-input-field ">
                    <input type="text" className="form-control shadow-lg border border-0"  aria-describedby="button-addon2" placeholder='Search here' />
                    <button className="btn btn-primary" type="button" id="button-addon2">Search</button>
                </div>

                <div className='mt-5'>

                </div>
            </div>
        </div>
    );
};

export default SearchBar;