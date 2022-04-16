import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, picture, TourDuration, price } = service
    const navigate=useNavigate()
    return (
        <div className='col-12 col-md-6 col-lg-4 g-4'>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title><h4>{name}</h4></Card.Title>
                    <Card.Text>
                        <h5>Tour Duration:{TourDuration}</h5>
                    </Card.Text>
                    <Card.Text>
                        <h5>Price:<small>Tk{price}</small></h5>
                    </Card.Text>
                    <div className='text-center' onClick={()=>navigate('/checkout')}>
                        <Button variant="primary">Checkout</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;