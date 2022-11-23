import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Event from '../Event/Event';

const Events = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('https://volunteer-network.up.railway.app/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    


    return (
        <div className='container mt-5'>
            <Row xs={1} md={3} lg={4}>

                {
                    events.map(event => <Event key={event._id} event={event}></Event>)
                }


            </Row>
        </div>
    );
};

export default Events;