import React from 'react';
import './aboutMe.css';

export default function AboutMe() {
    return (
        <div className="about-me container">
            <div className="section-title">
                <h2>About</h2>
                <p>more about me</p>
            </div>
            <div className="row">
                <div className="col-lg-4" data-aos="fade-right">
                    <img src="/assets/img/me.jpg" className="img-fluid" alt="" style={{ borderTopLeftRadius: '30%', borderBottomRightRadius: '30%', width: '60%', marginLeft: '20%' }} />
                </div>
                <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                    <h3>Front-end Developer</h3>
                    <p className="fst-italic">
                        I am an experienced Front-end developer with 7 years of experience in web development with MERN stack, MEAN stack and WordPress.
                    </p>
                    <p className='fst-italic'>
                        I specialise in MERN stack, MEAN stack and have experience in front-end development with React, AngularJS. Also, I have been with WordPress for 6 years and I have picked up a good deal of expertise along the way. I maintain a healthy balance between functionality and visual impact in all my work. I always developed the pixel-perfect, user-friendly, user-kindly front-end and I will solve technical problems you have and deliver the correct solutions and completed project for you.
                    </p>
                    <p className='fst-italic'>
                        Let's work together and I hope our collaboration.
                        I am passionate and I love coding and my job.
                    </p>
                </div>
            </div>
        </div>
    )
}
