import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Java", "JavaScript", "Python", "HTML", "CSS", "Django", "Tailwind", "SQL", "Bootstrap", "Flask", "Quality Assurance"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta)
        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="welcome">
            <Container>
                <Row className="align-items-center">
                    <Col xs={17} md={11} xl={12}>
                        <span className="tagline">
                            SovTech Graduate Programme challenge | Software Engineering
                        </span>
                        <h2> {`Don't doubt Gordon when it comes to: `} </h2>
                        <h1>
                            <span className="wrap">
                                {text}
                            </span>
                        </h1>
                        <h3><ArrowRightCircle size={20}/> Introduction</h3>
                        <br />
                        <p>I am currently in the process of completing my studies as a WeThinkCode_ student. Where I am studying Software Engineering and enjoying it every step of the way, having worked on multiple projects whether it being solo or group projects using Python and Java. I have always had a passion for coding which I could not run away from.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}