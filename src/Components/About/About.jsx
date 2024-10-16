import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_image.jpg'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>A highly motivated Computer Science graduate with internship experience in software development and SQL, eager to contribute to cutting-edge projects while continuously enhancing technical expertise.</p>
                    </div>
                    <div className="about-details">
                        <div className="about-experience">
                            <h1>Experience</h1>
                            <br />
                            <p>Associate System Engineer-IBM India</p>
                            <p>Project Intern/Trainee-IBM India</p>
                            <p>Summer Intern-Celebal Technologies-SQL</p>
                        </div>
                        <div className="about-education">
                            <h1>Education</h1>
                            <br />
                            <p>B.Tech in CSE</p>
                            <p>Kalinga Institute of Industrial Technology, Bhubaneswar</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
