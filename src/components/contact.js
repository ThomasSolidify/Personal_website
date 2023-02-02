import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import axios from "axios";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import styled from "styled-components";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lauxhtr', 'template_1tw4l7h', form.current, 'IXp6122I1AYKe7rXS')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
  );
};

export default ContactUs;

// Styles
const StyledContactForm = styled.div`
  width: 500px;
  form {
   
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 20px;
      color: #fff;
      margin: 0 0 8px 0;
      padding: 18px 26px;
      font-weight: 500;
      font-size: 18px;
      letter-spacing: 0.8px;
      transition: 0.3s ease-in-out
      }
    }
    textarea {
      width: 100%;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 20px;
      color: #fff;
      margin: 0 0 8px 0;
      padding: 18px 26px;
      font-weight: 500;
      font-size: 18px;
      letter-spacing: 0.8px;
      transition: 0.3s ease-in-out;
      background: rgba(255, 255, 255, 1);
  color: #121212;
      background: rgba(255, 255, 255, 1);
      color: #121212;
      &:focus {
        color: #121212;
  opacity: 0.8;
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      z-index: 1;
      position: relative;
    width 100%;
      
    }
  }
`;
