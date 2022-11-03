import { useRef, useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from '../assets/img/Gordon1.jpg';
import image2 from '../assets/img/Gordon2.jpg';
import image3 from '../assets/img/Gordon3.jpg';
import image4 from '../assets/img/Gordon4.jpg';
import image5 from '../assets/img/Gordon5.jpg';
import image6 from '../assets/img/Gordon6.jpg';
import image7 from '../assets/img/Gordon7.jpg';

export const ImageSlider = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0 },
            items: 1
        }
    };


    return (
        <section className="slideshow" id="slideshower">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <Carousel responsive={responsive} infinite={true} className='image-sliderrr'>
                                <div className="item-sliderrr">
                                    <img src={image1} alt="Image" />
                                </div>
                                <div className="item-sliderrr">
                                    <img src={image2} alt="Image" />
                                </div>
                                <div className="item-sliderrr">
                                    <img src={image3} alt="Image" />
                                </div>
                                <div className="item-sliderrr">
                                    <img src={image4} alt="Image" />
                                </div>
                                <div className="item-sliderrr">
                                    <img src={image5} alt="Image" />
                                   </div>
                                <div className="item-sliderrr">
                                    <img src={image6} alt="Image" />
                                </div>
                                <div className="item-sliderrr">
                                    <img src={image7} alt="Image" />
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}