import React from 'react';
import { FormContainer, 
        FormDataGroup, 
        Input, 
        Label, 
        SubmitBtn, 
        TextField 
    } from './Form.styles';
import emailjs from "emailjs-com"

const Form = () => {

    function sendEmail(e) {

        e.preventDefault();

        emailjs.sendForm('service_3jr5u1i', 'template_ftj8fid', e.target, 'user_NJe6ZQojTdZxpbRCGRgCU')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    }

  return (
      <>
        <FormContainer onSubmit={sendEmail}>
            <FormDataGroup>
                <Label htmlFor="name">
                    Name
                    <Input 
                        type="text"
                        id="name"
                        name="name"    
                    />
                </Label>
            </FormDataGroup>

            <FormDataGroup>
                <Label htmlFor="email">
                    Email Address
                    <Input 
                       type="email" 
                       id="email"
                       name="email"                      
                    />
                </Label>
            </FormDataGroup>

            <FormDataGroup>
                <Label htmlFor="subject">
                    Subject
                    <Input 
                       type="subject" 
                       id="subject"
                       name="subject"                                     
                    />
                </Label>
            </FormDataGroup>

            <FormDataGroup>
                <Label htmlFor="message">
                    Your Message
                    <TextField 
                        type="text"
                        id="message"
                        name="message"  
                    />
                </Label>
            </FormDataGroup>
            <SubmitBtn type="submit" value="Send">Send</SubmitBtn>

        </FormContainer>
      </>
  );
};

export default Form;