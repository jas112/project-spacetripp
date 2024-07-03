import React, { useState } from 'react';
import './styles/NavBar.css';
import stLogo from '../../assets/images/siteFeatures_imgs/ST_logo-RSCCsm.png'

const NavBar = ({currentScroll, currentTime, currentPageLocation, scrollToTop, scrollToBottom, scrollToSection}) => {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNavMode = () => {
      setIsNavOpen(!isNavOpen);
    };

    // const getClassName = (id) => {
    //     return `navbar-link ${currentPageLocation === id ? 'active' : ''}`;
    // };

    const getClassName = (id) => {
        return `nav-link ${currentPageLocation == id ? 'active' : ''}`;
    };

  return (
    <nav className='navbar'>
        <img src={stLogo} className='navbar-logo' alt='SpaceTripp Logo'/>
        <div className="nav-minimized" onClick={toggleNavMode}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className='nav-console'>
            <div className='nfo-console'>
                <div className='scroll-data console-data'>SROLV-{currentScroll}</div>
                <div className='time-data console-data'>{currentTime}</div> 
            </div>
            <div className={`nav-links ${isNavOpen ? 'linksActive' : ''}`}>
                <div className={getClassName('start')} id='start' onClick={scrollToTop}>&#9737;</div>
                <div className={getClassName('about')} id='about' onClick={() => scrollToSection('about')}>About</div>
                <div className={getClassName('webDevelopment')} id='webDevelopment' onClick={() => scrollToSection('webDevelopment')}>Web+Dev</div>
                <div className={getClassName('emailDevelopment')} id='emailDevelopment' onClick={() => scrollToSection('emailDevelopment')}>Email+Dev</div>
                <div className={getClassName('graphicDesign')} id='graphicDesign' onClick={() => scrollToSection('graphicDesign')}>Gfx+Dsn</div>
                <div className={getClassName('visualDesign')} id='visualDesign' onClick={() => scrollToSection('visualDesign')}>Vis+Dsn</div>
                <div className={getClassName('end')} id='end' onClick={scrollToBottom}>&#9737;</div>
            </div>
            {/* <ul className={`navbar-links ${isNavOpen ? 'linksActive' : ''}`}>
                <li className={getClassName('start')} id='start' onClick={scrollToTop}>&#9737;</li>
                <li className={getClassName('about')} id='about' onClick={() => scrollToSection('about')}>About</li>
                <li className={getClassName('webDevelopment')} id='webDevelopment' onClick={() => scrollToSection('webDevelopment')}>Web+Dev</li>
                <li className={getClassName('emailDevelopment')} id='emailDevelopment' onClick={() => scrollToSection('emailDevelopment')}>Email+Dev</li>
                <li className={getClassName('graphicDesign')} id='graphicDesign' onClick={() => scrollToSection('graphicDesign')}>Gfx+Dsn</li>
                <li className={getClassName('visualDesign')} id='visualDesign' onClick={() => scrollToSection('visualDesign')}>Vis+Dsn</li>
                <li className={getClassName('end')} id='end' onClick={scrollToBottom}>&#9737;</li>
            </ul> */}
        </div>
    </nav>
  )
}

export default NavBar

