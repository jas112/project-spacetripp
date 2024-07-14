import React, { useState } from 'react';
import './styles/NavBar.css';
import stLogo from '../../assets/images/siteFeatures_imgs/ST_logo-RSCCsm.png'
import NavBar_NavPoint from './NavBar_NavPoint';

const NavBar = ({currentScroll, currentDate, currentTime, currentPageLocation, scrollToTop, scrollToBottom, scrollToSection}) => {

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
        {/* <div className="nav-minimized" onClick={toggleNavMode}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div> */}
        <div className={`nav-console ${isNavOpen ? 'nav-vertical' : 'nav-horizontal'}`}>
            {/* <div className='nfo-console'>
                <div className='scroll-data console-data'>SROLV-{currentScroll}</div>
                <div className='date-data console-data'>{currentDate}</div> 
                <div className='time-data console-data'>{currentTime}</div> 
            </div> */}
            <div className={`nav-links ${isNavOpen ? 'linksActive' : ''}`}>
                <div 
                    className={getClassName('start')} 
                    id='start' 
                    onClick={scrollToTop}
                >
                    <div className='nav-link-element-1'>
                        <NavBar_NavPoint targetSection={'start'} />
                    </div>
                    <div className='nav-link-element-2'>
                        <div className='nav-link-label'>Start</div>
                    </div>
                </div>
                <div 
                className={getClassName('about')} 
                id='about' 
                onClick={() => scrollToSection('about')}
                >
                    <div className='nav-link-element-1'>
                        <NavBar_NavPoint targetSection={'about'}
 />
                    </div>
                    <div className='nav-link-element-2'>
                        <div className='nav-link-label'>About</div>
                    </div>
                </div>
                <div 
                className={getClassName('webDevelopment')} 
                id='webDevelopment' 
                onClick={() => scrollToSection('webDevelopment')}
                >
                    <div className='nav-link-element-1'>
                        <NavBar_NavPoint targetSection={'webDevelopment'} />
                    </div>
                    <div className='nav-link-element-2'>
                        <div className='nav-link-label'>Web+Dev</div>
                    </div>
                </div>
                <div 
                className={getClassName('emailDevelopment')} 
                id='emailDevelopment' 
                onClick={() => scrollToSection('emailDevelopment')}
                >
                    <div className='nav-link-element-1'>
                        <NavBar_NavPoint targetSection={'emailDevelopment'} />
                    </div>
                    <div className='nav-link-element-2'>
                        <div className='nav-link-label'>Email+Dev</div>
                    </div>
                </div>
                <div 
                className={getClassName('graphicDesign')} 
                id='graphicDesign' 
                onClick={() => scrollToSection('graphicDesign')}
                >
                    <div className='nav-link-element-1'>
                        <NavBar_NavPoint targetSection={'graphicDesign'} />
                    </div>
                    <div className='nav-link-element-2'>
                        <div className='nav-link-label'>Gfx+Dsn</div>
                    </div>
                </div>
                <div 
                className={getClassName('visualDesign')} 
                id='visualDesign' 
                onClick={() => scrollToSection('visualDesign')}
                >
                    <div className='nav-link-element-1'>
                        <NavBar_NavPoint targetSection={'visualDesign'} />
                    </div>
                    <div className='nav-link-element-2'>
                        <div className='nav-link-label'>Vis+Dsn</div>
                    </div>
                </div>
                <div 
                className={getClassName('terminus')} 
                id='terminus' 
                onClick={() => scrollToSection('terminus')}
                >
                    <div className='nav-link-element-1'>
                        <NavBar_NavPoint targetSection={'terminus'} />
                    </div>
                    <div className='nav-link-element-2'>
                        <div className='nav-link-label'>Terminus</div>
                    </div>
                </div>
                <div 
                className={getClassName('end')} 
                id='end' 
                onClick={scrollToBottom}
                >
                    <div className='nav-link-element-1'>
                        <NavBar_NavPoint targetSection={'end'} />
                    </div>
                    <div className='nav-link-element-2'>
                        <div className='nav-link-label'>End</div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`nav-minimized ${isNavOpen ? 'vNavOpen' : 'vNavClosed'}`} onClick={toggleNavMode}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </nav>
  )
}

export default NavBar

