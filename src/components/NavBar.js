import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap"

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
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#welcome" className={activeLink === 'welcome' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('welcome')}>WELCOME</Nav.Link>
                        <Nav.Link href="#slideshow" className={activeLink === 'slideshow' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('slideshow')}>Slideshow</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Who Am I</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Why SovTech</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}