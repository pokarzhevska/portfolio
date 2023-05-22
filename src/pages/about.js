import React from 'react';
import '../assets/css/section.css';
import AboutMe from '../component/aboutMe/aboutMe';
import Skill from '../component/skill/skill';

export default function About() {
    return (
        <section id="about" className="about">
            <AboutMe/>
            <Skill/>
        </section>
    )
}
