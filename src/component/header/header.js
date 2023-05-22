import React, { useEffect } from 'react';
import './header.css';
import $ from 'jquery';

export default function Header() {

    useEffect(() => {
        if(window.location.pathname != '/') {
            var _id = JSON.stringify(window.location.pathname).slice(2, JSON.stringify(window.location.pathname).length - 1);
            $('#header' + _id).addClass('active');
            $('#header').addClass('header-top');
            $('#headerhome').removeClass('active')
        }
    }, [])

    function mobileNabClick() {
        var mobileNav = document.querySelector('#navbar')
            mobileNav.classList.toggle('navbar-mobile')
            mobileNav.classList.toggle('bi-list')
            mobileNav.classList.toggle('bi-x')
    }
    

    return (
        <header id="header">
            <div className="container">
                <h1><a href="index.html">Pokarzhevska Mariia</a></h1>
                <h2>I'm a passionate <span>Front-end Developer</span> from Kyiv, Ukraine</h2>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a className="nav-link active" href="/" id='headerhome'>Home</a></li>
                        <li><a className="nav-link" href="/about" id='headerabout'>About</a></li>
                        <li><a className="nav-link" href="/resume" id='headerresume'>Resume</a></li>
                        <li><a className="nav-link" href="/portfolio" id='headerportfolio'>Portfolio</a></li>
                        <li><a className="nav-link" href="/contact" id='headercontact'>Contact</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle" onClick={() => mobileNabClick()}></i>
                </nav>
            </div>
        </header>
    )
}
