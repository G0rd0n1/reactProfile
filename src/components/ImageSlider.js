import { motion } from "framer-motion";
import { Container} from "react-bootstrap";
import { useRef, useEffect, useState } from "react";
import image1 from '../assets/img/Gordon1.jpg';
import image2 from '../assets/img/Gordon2.jpg';
import image3 from '../assets/img/Gordon3.jpg';
import image4 from '../assets/img/Gordon4.jpg';
import image5 from '../assets/img/Gordon5.jpg';
import image6 from '../assets/img/Gordon6.jpg';
import image7 from '../assets/img/Gordon7.jpg';

export const ImageSlider = () => {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);


    return (
        <Container id="slideshower">
            <motion.div ref={carousel} id="slideshow" className="carousel" whileTap={{cursor: "grabbing"}}>
                <motion.div 
                    drag="x" 
                    dragConstraints={{ right: 0, left: -width }} 
                    className="inner-carouselsss"
                >
                    <motion.div className="slideshow">
                       <img src={image1} alt="" />
                       <img src={image2} alt="" />
                       <img src={image3} alt="" />
                       <img src={image4} alt="" />
                       <img src={image5} alt="" />
                       <img src={image6} alt="" />
                       <img src={image7} alt="" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </Container>
    );
}