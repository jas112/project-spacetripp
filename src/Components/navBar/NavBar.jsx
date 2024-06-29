import React from 'react';
import './styles/NavBar.css';
import stLogo from '../../assets/images/siteFeatures_imgs/ST_logo-RSCCsm.png'

const NavBar = ({currentScroll, currentTime}) => {

  return (
    <nav className='navbar'>
        <img src={stLogo} className='navbar-logo' alt='SpaceTripp Logo'/>
        <div className='navbar-links'>
            SROLV-{currentScroll} {currentTime}
            <a href='#start' className='navbar-link'>&#10094;&#10094; &#9737;</a>
            <a href='#about' className='navbar-link'>About</a>
            <a href='#webDev' className='navbar-link'>Web+Dev</a>
            <a href='#gfxDsn' className='navbar-link'>Gfx+Dsn</a>
            <a href='#illio' className='navbar-link'>Illio</a>
            <a href='#end' className='navbar-link'>&#9737; &#10095;&#10095;</a>
        </div>
    </nav>
  )
}

export default NavBar