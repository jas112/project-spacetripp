import React from 'react';
import './styles/NavBar.css';
import stLogo from '../../assets/images/siteFeatures_imgs/ST_logo-RSCCsm.png'

const NavBar = ({currentScroll, currentTime, scrollToTop, scrollToBottom, scrollToSection}) => {

  return (
    <nav className='navbar'>
        <img src={stLogo} className='navbar-logo' alt='SpaceTripp Logo'/>
        <ul className='navbar-links'>
            SROLV-{currentScroll} {currentTime}
            <li className='navbar-link' onClick={scrollToTop}>&#10094;&#10094; &#9737;</li>
            <li className='navbar-link' onClick={() => scrollToSection('about')}>About</li>
            <li className='navbar-link' onClick={() => scrollToSection('webDev')}>Web+Dev</li>
            <li className='navbar-link' onClick={() => scrollToSection('graphicDesign')}>Gfx+Dsn</li>
            <li className='navbar-link' onClick={() => scrollToSection('visualDesign')}>Vis+Dsn</li>
            <li className='navbar-link' onClick={() => scrollToSection('email')}>Email</li>
            <li className='navbar-link' onClick={scrollToBottom}>&#9737; &#10095;&#10095;</li>
        </ul>
    </nav>
  )
}

export default NavBar