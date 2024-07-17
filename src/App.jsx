import { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import NavBar from './Components/navBar/NavBar';
import ForegroundFrame from './Components/parallaxFrames/ForegroundFrame.jsx';
import BackgroundFrame from './Components/parallaxFrames/BackgroundFrame.jsx';
import FTRElement from './Components/mainContent/FTRElement.jsx';
import FTRElementStarship from './Components/mainContent/FTRElementStarship.jsx';
import SectionElement from './Components/mainContent/SectionElement.jsx';
import SpacerElement from './Components/mainContent/SpacerElement.jsx';
import TerminusSection from './Components/mainContent/TerminusSection.jsx';
import sectionsData from './data/sections.js';
import stFigureA_L1 from './assets/images/hdrParallax_imgs/ST_tripp_figure-A-L1-RSCC.png'
import HDRParallaxFrames from './Components/parallaxFrames/HDRParallaxFrames.jsx';
import FTRParallaxFrames_Starships from './Components/parallaxFrames/FTRParallaxFrames_Starships.jsx';
import FTRParallaxFrames_Star from './Components/parallaxFrames/FTRParallaxFrames_Star.jsx';
import FTR_Element from './Components/mainContent/FTR_Element.jsx';
import sectionHoverSoundRef from '/src/assets/audio/286926-TheLibrarybyMTC-UI-Computer-250.wav'
import navMenuClickSoundRef from '/src/assets/audio/space_signal-213481.mp3'
import navPntClickSoundRef from '/src/assets/audio/52460-SCIENCE_FICTION_DOOR_WHOOSH_OPEN_SHORT_01.wav'
import btnHoverSoundRef from '/src/assets/audio/51574-SCIENCE_FICTION_MULTIMEDIA_TECHNOLOGY_COMPUTER_BLIP_01.wav'
import btnClickSoundRef from '/src/assets/audio/space_signal-213481.mp3'

const App = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrollPositionY, setScrollPositionY] = useState(0);
  const [dateString, setDateString] = useState('');
  const [timeString, setTimeString] = useState('');
  const [sfxActive, setSfxActive] = useState(false);

  const [currentPageLocation, setCurrentPageLocation] = useState('start');

  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const sectionRefs = {
    about: useRef(null),
    webDevelopment: useRef(null),
    emailDevelopment: useRef(null),
    graphicDesign: useRef(null),
    visualDesign: useRef(null),
    terminus: useRef(null)
  };

  useEffect(() => {

    const trackScrollandSetPageLocation = () => {
      const newScrollPositionValue = window.scrollY;
      setScrollPositionY(newScrollPositionValue);

      const getSectionUpperBound = (sectionValue) => {
        return sectionRefs[sectionValue].current.offsetTop - 200;
      }

      const getSectionLowerBound = (sectionValue) => {
        return sectionRefs[sectionValue].current.offsetTop + sectionRefs[sectionValue].current.offsetHeight + 200;
      }

      const aboutSectionUpperBoundY = getSectionUpperBound('about');
      const aboutSectionLowerBoundY = getSectionLowerBound('about');
      const webDevSectionUpperBoundY = getSectionUpperBound('webDevelopment');
      const webDevSectionLowerBoundY = getSectionLowerBound('webDevelopment');
      const emailDevSectionUpperBoundY = getSectionUpperBound('emailDevelopment');
      const emailDevSectionLowerBoundY = getSectionLowerBound('emailDevelopment');
      const grfxDsnSectionUpperBoundY = getSectionUpperBound('graphicDesign');
      const grfxDsnSectionLowerBoundY = getSectionLowerBound('graphicDesign');
      const visDsnSectionUpperBoundY = getSectionUpperBound('visualDesign');
      const visDsnSectionLowerBoundY = getSectionLowerBound('visualDesign');
      const terminusSectionUpperBoundY = getSectionUpperBound('terminus');
      const terminusSectionLowerBoundY = getSectionLowerBound('terminus');

      const endTop = bottomRef.current.offsetTop;

      // console.log(`endTop - ${end}`);

      if (newScrollPositionValue <= (aboutSectionUpperBoundY - 100)) {
        setCurrentPageLocation('start');
      } else if (newScrollPositionValue >= aboutSectionUpperBoundY && newScrollPositionValue <= aboutSectionLowerBoundY) {
        setCurrentPageLocation('about');
      } else if (newScrollPositionValue >= webDevSectionUpperBoundY && newScrollPositionValue <= webDevSectionLowerBoundY) {
        setCurrentPageLocation('webDevelopment');
      } else if (newScrollPositionValue >= emailDevSectionUpperBoundY && newScrollPositionValue <= emailDevSectionLowerBoundY) {
        setCurrentPageLocation('emailDevelopment');
      } else if (newScrollPositionValue >= grfxDsnSectionUpperBoundY && newScrollPositionValue <= grfxDsnSectionLowerBoundY) {
        setCurrentPageLocation('graphicDesign');
      } else if (newScrollPositionValue >= visDsnSectionUpperBoundY && newScrollPositionValue <= visDsnSectionLowerBoundY) {
        setCurrentPageLocation('visualDesign');
      } else if (newScrollPositionValue >= terminusSectionUpperBoundY && newScrollPositionValue <= terminusSectionLowerBoundY) {
        setCurrentPageLocation('terminus');
      } else if (newScrollPositionValue >= (terminusSectionLowerBoundY + 10)) {
        setCurrentPageLocation('end');
      }

    };

    window.addEventListener('scroll', trackScrollandSetPageLocation);

    const trackTime = setInterval(() => {
      const dateValue = new Date();
      setDateString(`${dateValue.getMonth() + 1}/${dateValue.getDate()}/${dateValue. getFullYear()}`);
      setTimeString(`${dateValue.getHours() < 10 ? '0' : ''}${dateValue.getHours()}.${dateValue.getMinutes() < 10 ? '0' : ''}${dateValue.getMinutes()}.${dateValue.getSeconds() < 10 ? '0' : ''}${dateValue.getSeconds()}`);
    }, 1000);


    return () => {
      window.removeEventListener('scroll', trackScrollandSetPageLocation);
      clearInterval(trackTime);
      // window.removeEventListener('widthTracker', trackWindowWidth);
    };
  }, [])

  useEffect(() => {
    const handleResize = () => {
      // console.log(`window.innerWidth - ${window.innerWidth}`);
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    // console.log(`window width - ${windowWidth}`);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // console.log(`window width - ${windowWidth}`);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  const scrollToSection = (section) => {
    if(sectionRefs[section] && sectionRefs[section].current){

      const sectionTop = sectionRefs[section].current.offsetTop;
      const sectionHeight = sectionRefs[section].current.offsetHeight;
      const windowHeight = window.innerHeight;
      const offset = sectionTop - (windowHeight / 2) + (sectionHeight / 2);

      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });

      // window.scrollTo({
      //   top:sectionRefs[section].current.offsetTop,
      //   behavior: 'smooth',
      // });
    }
  };

  const sectionHoverSoundEnter = new Audio(sectionHoverSoundRef);
  const sectionHoverSoundExit = new Audio(sectionHoverSoundRef);
  const navMenuClickSound = new Audio(navMenuClickSoundRef);
  const navPntClickSound = new Audio(navPntClickSoundRef)
  const btnHoverSound = new Audio(btnHoverSoundRef);
  const btnClickSound = new Audio(btnClickSoundRef);

  sectionHoverSoundEnter.volume = 0.81;
  sectionHoverSoundExit.volume = 0.81;
  navMenuClickSound.volume = 0.11;
  navPntClickSound.volume = 0.11;
  btnHoverSound.volume = 0.21;
  btnClickSound.volume = 0.11;

  sectionHoverSoundExit.playbackRate = 1.5;
  navPntClickSound.playbackRate = .5;
  btnHoverSound.playbackRate = 1;
  btnClickSound.playbackRate = 1;

  const handleItemInteractionSound = (sound) => {
    if (sfxActive) {
      sound.currentTime = 0;
      sound.play();
    }
  };

  return (
    <Router>
      <NavBar 
        currentScroll={scrollPositionY} 
        currentDate={dateString}
        currentTime={timeString} 
        currentPageLocation={currentPageLocation} 
        scrollToTop={scrollToTop} 
        scrollToBottom={scrollToBottom} 
        scrollToSection={scrollToSection} 
        screenWidth={windowWidth}
        sfxActive={sfxActive}
        setSfxActive={setSfxActive}
        navMenuClickSound={navMenuClickSound}
        navPntClickSound={navPntClickSound}
        btnHoverSound={btnHoverSound}
        btnClickSound={btnClickSound}
        handleItemInteractionSound={handleItemInteractionSound}
      />
      <HDRParallaxFrames />
      <div className='hdr-element'>

      </div>
      <div className='content-element'>
        <div ref={topRef}></div>
        <SpacerElement factor={10}/>
        <div className='page-nav-ref' ref={sectionRefs.about}>
          <SectionElement 
            sectionDataValue={sectionsData.about} 
            currentPageLocation={currentPageLocation}
            sectionHoverSoundEnter={sectionHoverSoundEnter}
            sectionHoverSoundExit={sectionHoverSoundExit}
            btnHoverSound={btnHoverSound}
            btnClickSound={btnClickSound}
            handleItemInteractionSound={handleItemInteractionSound}
          />
        </div>
        <SpacerElement factor={2}/>
        <div className='page-nav-ref' ref={sectionRefs.webDevelopment}>
          <SectionElement 
            sectionDataValue={sectionsData.webDevelopment}
            currentPageLocation={currentPageLocation} 
            sectionHoverSoundEnter={sectionHoverSoundEnter}
            sectionHoverSoundExit={sectionHoverSoundExit}
            btnHoverSound={btnHoverSound}
            btnClickSound={btnClickSound}
            handleItemInteractionSound={handleItemInteractionSound}
          />
        </div>
        <SpacerElement factor={2}/>
        <div className='page-nav-ref' ref={sectionRefs.emailDevelopment}>
          <SectionElement 
            sectionDataValue={sectionsData.emailDevelopment} 
            currentPageLocation={currentPageLocation}
            sectionHoverSoundEnter={sectionHoverSoundEnter}
            sectionHoverSoundExit={sectionHoverSoundExit}
            btnHoverSound={btnHoverSound}
            btnClickSound={btnClickSound}
            handleItemInteractionSound={handleItemInteractionSound}
          />
        </div>
        <SpacerElement factor={2}/>
        <div className='page-nav-ref' ref={sectionRefs.graphicDesign}>
          <SectionElement 
            sectionDataValue={sectionsData.graphicDesign}
            currentPageLocation={currentPageLocation}
            sectionHoverSoundEnter={sectionHoverSoundEnter}
            sectionHoverSoundExit={sectionHoverSoundExit}
            btnHoverSound={btnHoverSound}
            btnClickSound={btnClickSound}
            handleItemInteractionSound={handleItemInteractionSound}
          />
        </div>
        <SpacerElement factor={2}/>
        <div className='page-nav-ref' ref={sectionRefs.visualDesign}>
          <SectionElement 
            sectionDataValue={sectionsData.visualDesign}
            currentPageLocation={currentPageLocation}
            sectionHoverSoundEnter={sectionHoverSoundEnter}
            sectionHoverSoundExit={sectionHoverSoundExit}
            btnHoverSound={btnHoverSound}
            btnClickSound={btnClickSound}
            handleItemInteractionSound={handleItemInteractionSound}
          />
        </div>
        <SpacerElement factor={7}/>
      </div>
      <div className='ftr-element'>
        <SpacerElement factor={2}/>
        <div className='page-nav-ref terminus-nav' ref={sectionRefs.terminus}>
          <TerminusSection 
            sectionDataValue={sectionsData.terminus}
            currentPageLocation={currentPageLocation}
            sectionHoverSoundEnter={sectionHoverSoundEnter}
            sectionHoverSoundExit={sectionHoverSoundExit}
            btnHoverSound={btnHoverSound}
            btnClickSound={btnClickSound}
            handleItemInteractionSound={handleItemInteractionSound}
          />
        </div>
        <FTR_Element currentPageLocation={currentPageLocation} />
        {/* <FTRParallaxFrames_Starships />
        <FTRParallaxFrames_Star /> */}
        {/* <div className='ftr-scene'>
          <FTRElementStarship/>
          <FTRElement/>
        </div> */}
      </div>
      {/* <ForegroundFrame /> */}
      <BackgroundFrame currentScroll={scrollPositionY}/>
      <div className='page-nav-ref' ref={bottomRef}></div>
    </Router>
  )
}

export default App