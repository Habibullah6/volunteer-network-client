import React from 'react';
import { Card, Col } from 'react-bootstrap';

const MyEvent = ({event}) => {
    const {title, Date, _id} = event;
    

    const handleDeleteMyEvent = (id) =>{
          const proceed = window.confirm('are you sure do you want to delete permanently?')
          if(proceed){
            fetch(`https://volunteer-network.up.railway.app/eventRegister/${id}`, {
              method: "DELETE"
            })
            .then(res => {
              if(res.ok){
                alert('your selected event delete successfully.')
              }
            })
          }
    }

    return (
        <Col>
        <Card className='mb-3 p-2 event-card text-start'>
          <h3>{title}</h3>
          <h5>{Date}</h5>
          <button onClick={()=> handleDeleteMyEvent(_id)} className='btn btn-primary'>Cancel</button>
        </Card>
      </Col>
    );
};

export default MyEvent;