import React from 'react';
import './resume.css';

export default function SubResume() {

    return (
        <div className="container">
            <div className="section-title">
                <h2>Resume</h2>
                <p>Who am I?</p>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <h3 className="resume-title">Sumary</h3>
                    <div className="resume-item pb-0">
                        <h4>Alice Barkley</h4>
                        <p><em>I am an experienced Front-end developer with 7 years of experience in web development with MERN stack, MEAN stack and WordPress.</em></p>
                        <p><em>I specialise in MERN stack, MEAN stack and have experience in front-end development with React, AngularJS. Also, I have been with WordPress for 6 years and I have picked up a good deal of expertise along the way. My in-depth knowledge of web technologies such as HTML, CSS, and JavaScript frameworks allows me to create visually stunning, interactive, and dynamic web applications that provide an exceptional user experience.</em></p>
                        <p><em>My proficiency in front-end development includes creating responsive designs that work seamlessly across multiple devices and browsers, optimizing the performance of client-side code, and ensuring that the user experience is intuitive and engaging. I am able to debug complex client-side issues and implement solutions that enhance the overall quality of my applications.</em></p>
                        <p><em>I am able to work with different types of databases, including relational and NoSQL databases, and are proficient in using Node.js to create server-side applications that can handle high volumes of traffic and data.</em></p>
                        <p><em>I am always striving to improve my skills and knowledge, and are committed to staying up-to-date with the latest technologies and best practices in web development. I maintain a healthy balance between functionality and visual impact in all my work. I always developed the pixel-perfect, user-friendly, user-kindly front-end and I will solve technical problems you have and deliver the correct solutions and completed project for you.</em></p>
                        <p><em>In summary, as a Front-end Developer, I possess Front-end skills that enable me to work effectively and deliver high-quality work that meets the needs of my clients and users.</em></p>
                    </div>
                    
                </div>
                <div className="col-lg-6">
                    <h3 className="resume-title">Professional Experience</h3>
                    <div className="resume-item">
                        <h4>Front-end Developer</h4>
                        <h5>January 2020 - February 2023</h5>
                        <p><em>GlobalLogic Ukraine</em></p>
                            <ul>
                                <li>I have designed and developed the front-end and back-end of websites and mobile applications with MERN stack, MEAN stack and React Native</li>
                            </ul>
                    </div>
                    <div className="resume-item">
                        <h4>Front-end Developer</h4>
                        <h5>June 2017 - January 2020</h5>
                        <p><em>Genesis</em></p>
                            <ul>
                                <li>I have developed the websites with MERN stack and MEAN stack.</li>
                            </ul>
                    </div>
                    <div className="resume-item">
                        <h4>Front-end Developer</h4>
                        <h5>April 2015 - June 2017</h5>
                        <p><em>MSoft</em></p>
                            <ul>
                                <li>I have developed front-end of websites and mobile applications.</li>
                            </ul>
                    </div>
                    <h3 className="resume-title">Education</h3>
                    <div className="resume-item">
                        <h4>National Technical University of Ukraine "Kyiv Polytechnic Institute"</h4>
                        <h5>2013 - 2015</h5>
                        <p><em>Bachelor of Computer Science (BCompSc)</em></p>
                    </div>
                    <div className="resume-item">
                        <h4>Kyiv Secondary School No. 84</h4>
                        <h5>2009 - 2013</h5>
                        <p><em>Bachelor of Technology (BTech), Product Design</em></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
