import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import MyEvent from '../MyEvent/MyEvent';

const MyEvents = () => {
    const [myEvent, setMyEvent] = useState([])
    const {user} = useAuth();
    const {email} = user;
    
    useEffect(() => {
        fetch(`https://volunteer-network.up.railway.app/eventRegister/${email}`)
            .then(res => res.json())
            .then(data => {
                setMyEvent(data);
            })
    }, [myEvent])

  
    return (
        <div className='container mt-5'>
            
            <Row xs={1} md={1} lg={2}>
                {
                    myEvent.map(event => <MyEvent key={event._id} event={event}></MyEvent>)
                }
            </Row>
        </div>
    );
};

export default MyEvents;