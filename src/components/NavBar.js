import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap"
import { BrowserRouter as Router} from "react-router-dom";


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('welcome');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll); 
        return () => window.removeEventListener("scroll", onScroll);
        }, [])

        const onUpdateActiveLink = (value) => {
            setActiveLink(value);
        }


    return (
        <Router>
            <Navbar expand="md" className={scrolled ? "scrolled": ""}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link href="#welcome" className={activeLink === 'welcome' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('welcome')}>WELCOME</Nav.Link>
                                <Nav.Link href="#slideshower" className={activeLink === 'slideshower' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('slideshower')}>Slideshow</Nav.Link>
                                <Nav.Link href="#whoAmI" className={activeLink === 'whoAmI' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('whoAmI')}>Who Am I</Nav.Link>
                                <Nav.Link href="#whySovtech" className={activeLink === 'whySovtech' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('whySovtech')}>Why SovTech</Nav.Link>
                                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
            </Navbar>
        </Router>
    );
}