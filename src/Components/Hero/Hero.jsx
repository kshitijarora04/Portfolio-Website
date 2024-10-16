import React from 'react'
import './Hero.css'
import profile_img from '../../assets/kshitij_arora_photo.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="kshitij_arora_picture" />
            <h1><span>Hi I'm Kshitij Arora</span></h1>
            <p>A computer science undergraduate with a passion for continuous learning and problem-solving, Currently working as an Associate System Engineer at IBM India</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchorlink' offset={50} href='#contact'>Connect with Me</AnchorLink></div>
                <div className="hero-resume"><a href="https://drive.google.com/file/d/1KDDytvUpsHcW-GBgoCyHCqcNLuHrZ2HU/view" target='_blank'>My Resume</a></div>
            </div>
        </div>
    )
}

export default Hero
