import React from 'react';
import {AnimatedCharacter, 
        Heading, 
        AnimatedCharacter2, 
        HeroContainer,
        HeaderImg,
        HeaderImgMobile
    } from './Hero.styles';
import Egyptian from "assets/egyptian.png"
import Scarab from "assets/scarab.png"
import BackgroundVideo from "../BackgroundVideo/Index";


const Hero = () => {
    return (
        <HeroContainer id="home">
            <BackgroundVideo />
            <HeaderImg src={Egyptian} />
            <Heading>
                O<AnimatedCharacter>L</AnimatedCharacter>WETHU "SH<AnimatedCharacter2>A</AnimatedCharacter2>K" MATIWANA
            </Heading>
            <HeaderImg src={Egyptian} style={{transform: "scaleX(-1)"}} />
            <HeaderImgMobile src={Scarab} />
        </HeroContainer>
    )
}

export default Hero;
