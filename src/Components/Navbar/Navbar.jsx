import React, { useRef } from 'react'
import './Navbar.css'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'


const Navbar = ({ menu, setMenu }) => {

    const menuRef = useRef(null);

    const openMenu = () => {
        menuRef.current.style.right = "0";
    }
    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    }

    return (
        <div className='navbar'>
            <img src={menu_open} alt="" className='nav-mob-open' onClick={openMenu} />
            <div className="logo">Kshitij Arora</div>
            <ul className='nav-menu' ref={menuRef}>
                <img src={menu_close} alt="" className='nav-mob-close' onClick={closeMenu} />
                <li><AnchorLink className='anchorlink' href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <img src={underline} /> : <></>}</li>
                <li><AnchorLink className='anchorlink' offset={10} href='#about'><p onClick={() => setMenu("about")}>About Me</p></AnchorLink>{menu === "about" ? <img src={underline} /> : <></>}</li>
                <li><AnchorLink className='anchorlink' offset={20} href='#work'><p onClick={() => setMenu("work")}>Portfolio</p></AnchorLink>{menu === "work" ? <img src={underline} /> : <></>}</li>
                <li><AnchorLink className='anchorlink' offset={0} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <img src={underline} /> : <></>}</li>
            </ul>
            <div className="nav-connect"><AnchorLink className='anchorlink' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        </div>
    )
}

export default Navbar
