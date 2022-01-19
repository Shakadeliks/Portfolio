import React from 'react'
import {
    ContactContainer,
    ContactHeader,
    ContactContent,
    EmailAddy,
    LinkedIn,
    GitHub,
    ContactImg,
    ContactLink,
    Credit
    } from "./Contact.styles"
import WingedSun from "assets/winged-sun.png"
import Form from "components/Form"


const Contact = () => {
    return (
        <>
            <ContactContainer id="contact">
                <ContactHeader>
                    Get In Touch
                </ContactHeader>
                <ContactContent>
                    
                    <Form />
                    
                </ContactContent>
                <ContactLink href="https://github.com/Shakadeliks" target="_blank">
                        <GitHub />
                    </ContactLink>
                    <ContactLink href="https://www.linkedin.com/in/olwethu-matiwana-73bb79159/" target="_blank">
                        <LinkedIn />
                    </ContactLink>
                    <EmailAddy href="mailto:shakurxmatiwana@gmail.com" target="_blank" >
                        shakurxmatiwana@gmail.com
                    </EmailAddy>
                <ContactImg src={WingedSun} />
                <Credit>
                    Made By Olwethu "Shak" Matiwana
                </Credit>
            </ContactContainer>
        </>
    )
}

export default Contact
