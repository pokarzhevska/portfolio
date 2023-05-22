import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { workID } from '../work/workSlice'
import './portfolioDetail.css'

export default function PortfolioDetail() {

    const portfolioID = useSelector(workID);

    const workData = [
        {
            url: 'http://foodbakery.chimpgroup.com/single-restaurant',
            title: "Figma into wordpress",
            workContent: [
                'Analyzing the Figma design and understanding its components, layout, and functionality.',
                'Converting the design into  code, which involves coding HTML tags and using CSS to style the page.',
                'Ensuring that the HTML code is responsive, meaning that it adapts to different screen sizes and devices.',
                'Thoroughly testing the HTML code to ensure that it functions correctly and looks as expected on different browsers and devices.',
                'Delivering the final HTML code, which can be deployed to a web server and accessed by users.'
            ]
        },
        {
            url: 'https://mitchellandness.com',
            title: "Figma into Wordpress",
            workContent: [
                'Experience with responsive design and development, including cross-browser compatibility and accessibility best practices.',
                'Proficiency in design tools such as Sketch, Figma, or Adobe Creative Suite.',
                'Strong understanding of user-centered design principles and the ability to create wireframes and mockups that effectively communicate design concepts and user flows.'
            ]
        },
        {
            url: 'https://www.vacationbythemouse.com',
            title: "Build Front-end with React and Next.js",
            workContent: [
                'Build the front-end with React and Next.js',
                'I have helped clients migrate their sites to WordPress from other platforms, such as Squarespace and Wix, and have provided ongoing maintenance and support to ensure their sites are always up-to-date and secure.',
                'My knowledge of responsive design and accessibility best practices has enabled me to build WordPress sites that are optimized for all devices and users, regardless of their abilities.'
            ]
        },
        {
            url: 'https://www.universal-music.de/amymacdonald/',
            title: "Build with React and Redux",
            workContent: [
                'Experience with React.js and its ecosystem, including React Router, Redux or Context API, and popular libraries like Axios or Fetch.',
                'Familiarity with CSS pre-processors like Sass or Less, or styling libraries like Material UI or Bootstrap.',
                'Ability to create responsive layouts using CSS and HTML.',
                'Knowledge of web development tools and workflows, including Node.js, Git, and Webpack.',
                'Familiarity with deploying web applications to servers using tools like Heroku or Netlify.'
            ]
        },
        {
            url: 'https://docksidegroup.com.au/#reveal=contentPopout1700',
            title: "Build Back-end with ExpressJS",
            workContent: [
                'Successfully integrated cloud services for RIA support and product fulfillment application, multilingual content services, and a pluggable payment provider architecture for pre-authorization credit card payments.',
                'Optimized SQL queries for the heavy-load parts of the system, which improved website responsiveness and reduced the database costs by 20%',
                'Redeveloped existing systems to support custom account management, content, and mobile business verticals'
            ]
        },
        {
            url: 'https://www.yargiracing.com.au/',
            title: "Build whole project with Anguar & Laravel",
            workContent: [
                'Deep understanding in Angular and Ngrx.',
                'Associate Angular and Laravel with MongoDB and perform testing like Unit Test',
                'I resolved by configuring CORS  on the Laravel API because of Angular runs on the client-side and Laravel runs on the server-side, so there may be issues with CORS when trying to make requests from Angular to a Laravel API'
            ]
        },
        {
            url: 'https://www.adamgunn.ca/',
            title: "Animation with original CSS and JavaScript",
            workContent: [
                'I have made animation with CSS and JavaScript without any libraries for animation.',
                'I have fixed the issues in integration into WordPress and maintain the correct run.',
                'Through this project I have deep understanding of animation and enhanced my skills.'
            ]
        },
        {
            url: 'https://www.eco-business.com/',
            title: "Create Keycloak theme and integration with React",
            workContent: [
                'I have created keycloak theme with Java and JavaScript.',
                'I have integrated with React and maintained to run correctly.',
                'Through this project, I have known about keycloak and springboot and have knowledge of Java and related frameworks.'
            ]
        },
        {
            url: 'https://www.luisaonline.com/',
            title: "Shopify",
            workContent: [
                'I am proficient in HTML, CSS, JavaScript, and Liquid, which has enabled me to build responsive and user-friendly Shopify sites that are optimized for performance.',
                'I have implemented various Shopify plugins and integrations, such as Shopify Payments, Mailchimp, and Facebook Pixel, to help clients streamline their e-commerce operations and grow their businesses.',
                'I have helped clients migrate their online stores to Shopify from other platforms, such as WooCommerce and Magento, and have provided ongoing maintenance and support to ensure their stores are always up-to-date and secure.'
            ]
        },
    ];

    return (
        <main id="main">

            <div id="portfolio-details" className="portfolio-details">
                <div className="container">

                    <div className="row">

                    <div className="col-lg-8">
                        <h2 className="portfolio-title">MY PORTFOLIO DETAIL</h2>
                        <div className="portfolio-details-slider swiper">
                            <div className="swiper-wrapper align-items-center">
                                <div className="swiper-slide">
                                    <img src={"/assets/img/portfolio/portfolio-" + portfolioID + ".jpg"} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 portfolio-info">
                        <h3 style={{color: '#18d26e', marginBottom: '3rem', fontSize: '30px', fontWeight: 'bold'}}>{workData[portfolioID-1].title}</h3>
                        {
                            workData[portfolioID-1].workContent.map((ele, idx) => {
                                return(
                                    <p key={idx}><em>{ele}</em></p>
                                )
                            })
                        }
                        <a href={workData[portfolioID-1].url} target="_blank">
                            <button className='btn btn-success' style={{marginTop: '1rem'}}>Preview</button>
                        </a>
                        <Link to="/portfolio">
                            <button className='btn btn-success' style={{float: 'right', marginTop: '1rem'}}>Cancel</button>
                        </Link>
                    </div>

                    </div>

                </div>
            </div>

        </main>
    )
}
