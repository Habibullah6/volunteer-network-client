import React from 'react';
import notFoundLogo from "../../logos/notFound.gif";

const NotFound = () => {
    return (
        <div>
            <img src={notFoundLogo} className='img-fluid w-25' alt="" />
        </div>
    );
};

export default NotFound;