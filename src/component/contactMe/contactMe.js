import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import './contactMe.css'

export default function ContactMe() {

    const form = useRef();

    const sendMsg = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_uxyepjb', 'template_cj6am7m', form.current, 'MuphGfCvbjJnOZlEx')
        .then((result) => {
            console.log('success')
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className="container">

        <div className="section-title">
            <h2>Contact</h2>
            <p>Contact Me</p>
        </div>

        <div className="row mt-2">
            <div className="col-md-6 mt-4 d-flex align-items-stretch">
                <div className="info-box">
                    <i className="bx bx-envelope"></i>
                    <h3>Email Me</h3>
                    <p>Pokarzhevskam@gmail.com</p>
                </div>
            </div>
            <div className="col-md-6 mt-4 d-flex align-items-stretch">
                <div className="info-box">
                    <i className="bx bx-map"></i>
                    <h3>Address</h3>
                    <p>Kyiv, Ukraine</p>
                </div>
            </div>
        </div>

        <form ref={form} onSubmit={sendMsg} className="php-email-form mt-4">
            <div className="row">
                <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
            </div>
            <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
            </div>
            <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
            </div>
            <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit">Send Message</button></div>
        </form>

        </div>
    )
}
