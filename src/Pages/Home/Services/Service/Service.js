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
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Tour Duration:{TourDuration}
                    </Card.Text>
                    <Card.Text>
                       Guide cost:<small>Tk {price}</small>
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