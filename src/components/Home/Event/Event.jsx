import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Event.css';
const Event = (props) => {
  const { title, img, _id} = props.event;
  
  return (
    <Col >
      <Card className='mb-3 p-2 event-card' as={NavLink} to={`/registerForm/${_id}`}>
        <Card.Img variant="top" src={img} className='img-fluid'/>
        <Card.Body className=''>
            <span>{title}</span>
        </Card.Body>
      </Card>
    </Col>
  );
};



export default Event;