import React from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
const RegisterList = ({event}) => {
    const {name, title, email , Date, _id} = event;

    const handleEventDelete = () => {

    const proceed = window.confirm('are you sure do you delete permanently?')
    if(proceed){
        fetch(`https://volunteer-network.up.railway.app/eventRegister/${_id}`, {
            method: "DELETE"
        })
        .then(res => {
            alert('event deleted successfully')
            
        })
    }
    
    }

    
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{Date}</td>
            <td>{title}</td>
            <td>
              <NavLink onClick={handleEventDelete} className="fs-3 text-danger fw-bolder">
              <RiDeleteBin6Line/>
              </NavLink>
            </td>
        </tr>
    );
};

export default RegisterList;