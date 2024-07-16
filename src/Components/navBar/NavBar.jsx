import React, { useState } from 'react';
import './styles/NavBar.css';
import stLogo from '../../assets/images/siteFeatures_imgs/ST_logo-RSCCsm.png'
import NavBar_NavPoint from './NavBar_NavPoint';
import AudioPlayer from '../audioPlayer/AudioPlayer';
import menuHoverSoundRef from '../../assets/audio/beam_sound-103367.mp3'
import hoverSoundRef  from '../../assets/audio/space_signal-213481.mp3'
import clickSoundRef from '../../assets/audio/select_2-96163.mp3'
// import menuNavPointHoverSoundRef from '../../assets/audio/space_signal-213481.mp3'

const NavBar = ({currentScroll, currentDate, currentTime, currentPageLocation, scrollToTop, scrollToBottom, scrollToSection}) => {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const menuIconHoverSound = new Audio(menuHoverSoundRef);
    const menuIconClickSound = new Audio(clickSoundRef);

    const menuNavPointHoverSound = new Audio(hoverSoundRef);
    const menuNavPointClickSound = new Audio(clickSoundRef);

    menuIconHoverSound.volume = 0.21;
    menuIconClickSound.volume = 0.11;

    menuNavPointHoverSound.volume = 0.11;
    menuNavPointHoverSound.playbackRate = .5;

    menuNavPointClickSound.volume = 0.11;
    menuNavPointClickSound.playbackRate = .5;

    const toggleNavMode = () => {
      setIsNavOpen(!isNavOpen);
    };

    const getClassName = (id) => {
        return `nav-link ${currentPageLocation == id ? 'active' : ''}`;
    };

  return (
    <nav className='navbar'>
        <div className='navbar-panel left-panel'>
            <img src={stLogo} className='navbar-logo' alt='SpaceTripp Logo'/>
            <AudioPlayer/>  
        </div>
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
                    onMouseEnter={() => menuNavPointHoverSound.play()}  
                    onClick={() =>{ 
                        menuIconClickSound.play();
                        scrollToTop();
                    }}
                >
                    <div className='nav-link-element-1'>
                        <NavBar_NavPoint targetSection={'start'} />
                    </div>
                    <div className='nav-link-element-2'>
                        <div className='nav-link-label'>HDR</div>
                    </div>
                </div>
                <div 
                className={getClassName('about')} 
                id='about'
                onMouseEnter={() => menuNavPointHoverSound.play()}  
                onClick={() => {
                    menuNavPointClickSound.play();
                    scrollToSection('about');
                }}
                >
                    <div className='nav-link-element-1'>
                        <NavBar_NavPoint targetSection={'about'} />
                    </div>
                    <div className='nav-link-element-2'>
                        <div className='nav-link-label'>About</div>
                    </div>
                </div>
                <div 
                className={getClassName('webDevelopment')} 
                id='webDevelopment'
                onMouseEnter={() => menuNavPointHoverSound.play()} 
                onClick={() => {
                    menuNavPointClickSound.play();
                    scrollToSection('webDevelopment')
                }}
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
                onMouseEnter={() => menuNavPointHoverSound.play()}  
                onClick={() => {
                    menuNavPointClickSound.play();
                    scrollToSection('emailDevelopment');
                }}
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
                onMouseEnter={() => menuNavPointHoverSound.play()}  
                onClick={() => {
                    menuNavPointClickSound.play();
                    scrollToSection('graphicDesign');
                }}
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
                onMouseEnter={() => menuNavPointHoverSound.play()}  
                onClick={() => {
                    menuNavPointClickSound.play();
                    scrollToSection('visualDesign')
                }}
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
                onMouseEnter={() => menuNavPointHoverSound.play()}
                onClick={() => {
                    menuNavPointClickSound.play();
                    scrollToSection('terminus');
                }}
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
                onMouseEnter={() => menuNavPointHoverSound.play()}
                onClick={() => {
                    menuNavPointClickSound.play();
                    scrollToBottom();
                }}
                >
                    <div className='nav-link-element-1'>
                        <NavBar_NavPoint targetSection={'end'} />
                    </div>
                    <div className='nav-link-element-2'>
                        <div className='nav-link-label'>FTR</div>
                    </div>
                </div>
            </div>
        </div>
        <div 
            className={`nav-minimized ${isNavOpen ? 'vNavOpen' : 'vNavClosed'}`} 
            onMouseEnter={() => menuIconHoverSound.play()}
            onClick={() => {
                menuIconClickSound.play();
                toggleNavMode();
            }}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </nav>
  )
}

export default NavBar

