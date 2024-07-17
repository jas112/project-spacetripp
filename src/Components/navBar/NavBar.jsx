import React, { useState } from 'react';
import './styles/NavBar.css';
import stLogo from '../../assets/images/siteFeatures_imgs/ST_logo-RSCCsm.png'
import NavBar_NavPoint from './NavBar_NavPoint';
import AudioPlayer from '../audioPlayer/AudioPlayer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWaveSquare } from '@fortawesome/free-solid-svg-icons';


const NavBar = ({
    currentScroll, 
    currentDate, 
    currentTime, 
    currentPageLocation, 
    scrollToTop, 
    scrollToBottom, 
    scrollToSection, 
    sfxActive, 
    setSfxActive, 
    navMenuClickSound, 
    navPntClickSound,
    btnhoverSound, 
    btnClickSound,
    handleItemInteractionSound}) => {

    const [isNavOpen, setIsNavOpen] = useState(false);

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
            <div className={`sfx-btn ${sfxActive ? '' : 'sfx-muted'}`} title={sfxActive ? 'Mute Sound FX' : 'Unmute Sound FX'}>
                <FontAwesomeIcon 
                    icon={faWaveSquare}
                    onClick={() => setSfxActive(!sfxActive)}  />
            </div> 
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
                    onMouseEnter={() => {
                        handleItemInteractionSound(btnhoverSound);
                    }}  
                    onClick={() =>{ 
                        handleItemInteractionSound(btnClickSound);
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
                onMouseEnter={() => {
                    handleItemInteractionSound(btnhoverSound);
                }}  
                onClick={() => {
                    handleItemInteractionSound(btnClickSound);
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
                onMouseEnter={() => {
                    handleItemInteractionSound(btnhoverSound);
                }}  
                onClick={() => {
                    handleItemInteractionSound(btnClickSound);
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
                onMouseEnter={() => {
                    handleItemInteractionSound(btnhoverSound);
                }}   
                onClick={() => {
                    handleItemInteractionSound(btnClickSound);
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
                onMouseEnter={() => {
                    handleItemInteractionSound(btnhoverSound);
                }}    
                onClick={() => {
                    handleItemInteractionSound(btnClickSound);
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
                onMouseEnter={() => {
                    handleItemInteractionSound(btnhoverSound);
                }}  
                onClick={() => {
                    handleItemInteractionSound(btnClickSound);
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
                onMouseEnter={() => {
                    handleItemInteractionSound(btnhoverSound);
                }}
                onClick={() => {
                    handleItemInteractionSound(btnClickSound);
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
                onMouseEnter={() => {
                    handleItemInteractionSound(btnhoverSound);
                }}
                onClick={() => {
                    handleItemInteractionSound(btnClickSound);
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
            onMouseEnter={() => {
                handleItemInteractionSound(btnhoverSound);
            }}
            onClick={() => {
                handleItemInteractionSound(navMenuClickSound);
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

