import React, { useState } from 'react'
import '../Footer/Footer.css'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Footer = ({ menu, setMenu }) => {
    // const [menu, setMenu] = useState("home")
    return (
        <div className='footer'>
            <ul className='foot-menu'>
                <li><AnchorLink className='anchorlink' href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <img src={underline} /> : <></>}</li>
                <li><AnchorLink className='anchorlink' offset={10} href='#about'><p onClick={() => setMenu("about")}>About Me</p></AnchorLink>{menu === "about" ? <img src={underline} /> : <></>}</li>
                <li><AnchorLink className='anchorlink' offset={20} href='#work'><p onClick={() => setMenu("work")}>Portfolio</p></AnchorLink>{menu === "work" ? <img src={underline} /> : <></>}</li>
                <li><AnchorLink className='anchorlink' offset={0} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <img src={underline} /> : <></>}</li>
            </ul>
        </div>
    )
}

export default Footer
