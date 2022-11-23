import React from 'react';
import "./SearchBar.css";



const SearchBar = () => {
    return (
        <div>
            <div className='mt-5'>
                <h1>I GROW BY HELPING PEOPLE IN NEED</h1>
                <div class="input-group mb-3  m-auto shadow-lg search-field">
                    <input type="text" class="form-control border-0"  aria-describedby="button-addon2" placeholder='Search your volunteering'/>
                    <button class="btn btn-outline-secondary text-white border-0 bg-primary" type="button" id="button-addon2">Search</button>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;