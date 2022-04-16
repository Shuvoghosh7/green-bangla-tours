import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    console.log(services)
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container'>
            <h1 className='text-center text-success mt-2'>Services</h1>
            <div className='row'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    />)
                }
            </div>
        </div>
    );
};

export default Services;