import React, { useState } from 'react'
import { Close, Hamburger, Nav, NavContainer, NavLink, NavMenu } from './Navbar.styles'
import { animateScroll as scroll } from 'react-scroll/modules';

const Navbar = () => {

    const [showNav, setShowNav] = useState(false);

    const toggleNavMenu = () => {
        setShowNav(!showNav);
    }

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        
        <NavContainer>
            <Nav>
                <Hamburger showNav={ showNav } onClick={ toggleNavMenu}/>
                <NavMenu showNav={ showNav }>
                    <Close onClick={ toggleNavMenu }/>
                    <NavLink to="/" 
                        onClick={toggleHome}
                        spy={true}
                        exact="true"
                        >Home</NavLink>
                    <NavLink to="about" 
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact="true" 
                        offset={-80}
                        >About</NavLink>
                    <NavLink to="work" 
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact="true" 
                        offset={-80}
                        >Work</NavLink>
                    <NavLink to="contact" 
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact="true" 
                        offset={-80}
                        >Contact</NavLink>

                </NavMenu>
            </Nav>
        </NavContainer>
            
        
    )   
}

export default Navbar
