import React from 'react'
import {AboutContainer, 
        AboutWrapper, 
        Bio, 
        Row, 
        Column1, 
        Column2, 
        Heading, 
        Hieroglyph 
    } from './About.styles';
import BioImg from "assets/hieroglyph.png";

const About = () => {

    return (
        <AboutContainer id="about">
            <AboutWrapper>
                <Row>
                    <Column1>
                        <Hieroglyph src={BioImg}/>
                    </Column1>
                    <Column2>
                        <Heading>
                            Who Am I?
                        </Heading>
                        <Bio>
                            Greetings! I am a developer based in Cape Town, South Africa. Currently focused on building
                            my expertise and experience around front and back-end web development.
                        </Bio>
                    </Column2>
                </Row>
                
            </AboutWrapper>
        </AboutContainer>
        
    )
}

export default About;

