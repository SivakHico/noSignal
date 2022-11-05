import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY

export default function Contact() {
    const form = useRef();
    const [getMess, setMess] = useState('')

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setMess('Your Message Has Been Sent Successfully!')
            }, (error) => {
                console.log(error.text);
                setMess('error')
            });
        form.current.reset()
    };

    return (
        <form id='send-email' ref={form} onSubmit={sendEmail}>
            <h2>Hire me! || Talk To Me!</h2>
            <input type="text" name="name" placeholder='Name' required />
            <input type="email" name="email" placeholder='Email' required />
            <input type="text" name="subject" placeholder='Subject' required />
            <textarea name="message" placeholder='Message' rows="12" cols="45" maxlength="500" required />
            <input type="submit" value="Send" />
            <p>{getMess}</p>
        </form>
    );
};