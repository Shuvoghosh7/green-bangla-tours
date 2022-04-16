
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Banner1 from '../../../images/Banner/Banner1.jpg'
import Banner2 from '../../../images/Banner/Banner2.png'
import Banner3 from '../../../images/Banner/Babber3.png'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 >Travel Guide</h1>
                    <h4 >All what needs to a traveler in Florence...Easly find places, guides, directions, info...."</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1 >Travel Guide</h1>
                    <h4 >All what needs to a traveler in Florence...Easly find places, guides, directions, info...."</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1 >Travel Guide</h1>
                    <h3 >All what needs to a traveler in Florence...Easly find places, guides, directions, info...."</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;