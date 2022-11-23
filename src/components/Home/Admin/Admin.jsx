import React, { useEffect, useRef, useState } from 'react';
import { Table } from 'react-bootstrap';
import { AiFillFileAdd } from "react-icons/ai";
import { FaList } from "react-icons/fa";
import plusIcon from "../../../logos/plus 1.png";
import userIcon from "../../../logos/users-alt 1.png";
import RegisterList from '../RegisterList/RegisterList';
import "./Admin.css";
const Admin = () => {

    const [registerEvent, setRegisterEvent] = useState([]);

    const [showInfo, setShowInfo] = useState({
        registration: true,
        event: false
    });

    const handleShowModal = e => {
        if (e === "registration") {
            return setShowInfo({
                registration: true
            })
        }
        if (e === 'event') {
            return setShowInfo({
                event: true
            })
        }
    }

    useEffect(() => {

        fetch('https://volunteer-network.up.railway.app/eventRegister')
            .then(res => res.json())
            .then(data => {
                setRegisterEvent(data)
            })

    }, [registerEvent])

    const eventRef = useRef();
    const descriptionRef = useRef();
    const dateRef = useRef();
    const imgRef = useRef();

    const handleAddEvent = (e) => {
        const event = eventRef.current.value;
        const description = descriptionRef.current.value;
        const date = dateRef.current.value;
        const img = imgRef.current.value;
        let addedEvent = { title: event, description: description, date: date, img: img }

        fetch('https://volunteer-network.up.railway.app/events', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(addedEvent)
        })
        .then(res => {
            if(res.ok){
                console.log(res);
                alert("event added successfully.")
                eventRef.current.value = ''; 
                descriptionRef.current.value = '';
                dateRef.current.value = '';
                imgRef.current.value = '';
            }
            
        })
        e.preventDefault()

    }

    return (
        <div className='container  mt-5 text-start'>

            <div className="row">

                <div className="col-md-2">
                    <ul className='dashboard'>
                        <li onClick={() => handleShowModal("registration")}>
                            <img src={userIcon} alt="" className='userIcon' />
                            <span>Volunteer list</span>
                        </li>
                        <li onClick={() => handleShowModal("event")}>
                            <img src={plusIcon} alt="" className='plusIcon' />
                            <span>Add event</span>
                        </li>
                    </ul>
                </div>

                <div className='col-md-10  '>
                    {
                        showInfo.registration === true ? <span className='fs-4 text-danger fw-bold'> <FaList /> volunteer register list  </span> : <span className='fs-4 text-danger fw-bold'> <AiFillFileAdd /> add event </span>
                    }


                    {
                        showInfo.registration === true ? <Table responsive borderless hover size="sm" >
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email ID</th>
                                    <th>Registration Date</th>
                                    <th>Volunteer List</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>


                                {
                                    registerEvent.map(event => <RegisterList key={event._id} event={event}></RegisterList>)
                                }


                            </tbody>
                        </Table> : <div>
                            <div className="row ">
                                <div className="col-md-6 ">
                                    <label htmlFor="event-title">Event Title</label>
                                    <input ref={eventRef} type="email" name="" id="event-title" className='w-100 mb-3' placeholder='Event-title' />
                                    <label htmlFor="description">Description</label>
                                    <textarea ref={descriptionRef} name="" id="description" className='w-100' rows="4" placeholder='Description'></textarea>
                                </div>
                                <div className="col-md-6 ">
                                    <label htmlFor="date">Date</label>
                                    <input ref={dateRef} type="Date" name="" id="date" className='w-100 mb-3' />
                                    <label htmlFor="banner-url">Banner</label>
                                    <input ref={imgRef} type="text" name="" id="banner-url" placeholder='Banner-Url' className='w-100' />


                                </div>
                                <div className='d-flex justify-content-end mt-2'>
                                    <button onClick={handleAddEvent} className='btn btn-primary'>submit</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Admin;