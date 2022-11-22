import React from 'react';
import { Card, Col } from 'react-bootstrap';

const MyEvent = ({event}) => {
    const {title, Date} = event;

    return (
        <Col>
        <Card className='mb-3 p-2 event-card text-start'>
          <h3>{title}</h3>
          <h5>{Date}</h5>
          <button className='btn btn-primary'>Cancel</button>
        </Card>
      </Col>
    );
};

export default MyEvent;