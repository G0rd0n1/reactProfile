import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import drawing1 from "../assets/img/Draw.jpg";
import drawing2 from "../assets/img/Tana.jpg";
import drawing3 from "../assets/img/Draw2.jpg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
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
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                            Who Am I?
                            </h2>
                            <h3>Gordon Dindi</h3>
                            <p>I am a 27 year old male who attended primary school in England and completed my schooling in Cape Town at Milnerton High School. 
                                I am a hard working and committed person who easily adapts into new places and loves adventure. 
                                I think if I didn't have a passion for coding, I would've pursued to be an Artist/Graphic Designer. 
                                Along with coding, drawing and design have always been skills I hope to enhance.</p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className="item">
                                    <img src={drawing1} alt="Image" />
                                </div>
                                <div className="item">
                                    <img src={drawing2} alt="Image" />
                                </div>
                                <div className="item">
                                    <img src={drawing3} alt="Image" />
                                </div> 
                            </Carousel>
                            <h2>
                            Why SovTech?
                            </h2>
                            <h5>"The culture is second to none and opportunities to try new ideas and find your niche are aplenty here."</h5>
                            <h6>Theo, Software Developer</h6>
                            <p>Having had the first-hand experience of meeting your amazing team at the WeThinkCode_ expo we had a month ago, 
                                I got to hear a lot about your culture and working environment. 
                                That along with the information I read on your website and the quote above from one of your employees. 
                                SovTech stole my heart! I'm one who's big on synergy and even though I'm a playful person, I work hard and get things done.</p>
                            <h6>I see you do the same ;)</h6>
                            <p>Being new to the industry, I'm still yet to find my niche and adjust well as a junior Software Engineer. 
                                I really admire the fact that your Graduates Program will allow that and help me grow as an individual and Software Engineer. 
                                So, when I heard there were Software Engineering positions available, 
                                I could'nt miss the opportunity to apply whether it be at your Cape Town, or Johannesburg offices.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    )
}