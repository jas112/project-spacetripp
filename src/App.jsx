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

const App = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [scrollPositionY, setScrollPositionY] = useState(0);
  const [dateString, setDateString] = useState('');
  const [timeString, setTimeString] = useState('');
  const [sfxActive, setSfxActive] = useState(true);

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

      const aboutSectionTop = sectionRefs['about'].current.offsetTop;
      const aboutSectionUpperBoundY = sectionRefs['about'].current.offsetTop - 200;
      const aboutSectionLowerBoundY = sectionRefs['about'].current.offsetTop + sectionRefs['about'].current.offsetHeight + 200;

      // console.log(`aboutTp - ${aboutSectionTop} , aboutUB - ${aboutSectionUpperBoundY} , aboutLB - ${aboutSectionLowerBoundY}`);

      const webDevSectionTop = sectionRefs['webDevelopment'].current.offsetTop;
      const webDevSectionUpperBoundY = sectionRefs['webDevelopment'].current.offsetTop - 200;
      const webDevSectionLowerBoundY = sectionRefs['webDevelopment'].current.offsetTop + sectionRefs['webDevelopment'].current.offsetHeight + 200;

      // console.log(`webDevTp - ${webDevSectionTop} , webDevUB - ${webDevSectionUpperBoundY} , webDevLB - ${webDevSectionLowerBoundY}`);

      const emailDevSectionTop = sectionRefs['emailDevelopment'].current.offsetTop;
      const emailDevSectionUpperBoundY = sectionRefs['emailDevelopment'].current.offsetTop - 200;
      const emailDevSectionLowerBoundY = sectionRefs['emailDevelopment'].current.offsetTop + sectionRefs['emailDevelopment'].current.offsetHeight + 200;

      // console.log(`emailDevTp - ${emailDevSectionTop} , emailDevUB - ${emailDevSectionUpperBoundY} , emailDevLB - ${emailDevSectionLowerBoundY}`);

      const grfxDsnSectionTop = sectionRefs['graphicDesign'].current.offsetTop;
      const grfxDsnSectionUpperBoundY = sectionRefs['graphicDesign'].current.offsetTop - 200;
      const grfxDsnSectionLowerBoundY = sectionRefs['graphicDesign'].current.offsetTop + sectionRefs['graphicDesign'].current.offsetHeight + 200;

      // console.log(`grfxDsnTp - ${grfxDsnSectionTop} , grfxDsnUB - ${grfxDsnSectionUpperBoundY} , grfxDsnLB - ${grfxDsnSectionLowerBoundY}`);

      const visDsnSectionTop = sectionRefs['visualDesign'].current.offsetTop;
      const visDsnSectionUpperBoundY = sectionRefs['visualDesign'].current.offsetTop - 200;
      const visDsnSectionLowerBoundY = sectionRefs['visualDesign'].current.offsetTop + sectionRefs['visualDesign'].current.offsetHeight + 200;

      // console.log(`visDevTp - ${visDsnSectionTop} , visDevUB - ${visDsnSectionUpperBoundY} , visDevLB - ${visDsnSectionLowerBoundY}`);

      const terminusSectionTop = sectionRefs['terminus'].current.offsetTop;
      const terminusSectionUpperBoundY = sectionRefs['terminus'].current.offsetTop - 200;
      const terminusSectionLowerBoundY = sectionRefs['terminus'].current.offsetTop + sectionRefs['terminus'].current.offsetHeight + 200;

      // console.log(`terminusTp - ${terminusSectionTop} , terminusUB - ${terminusSectionUpperBoundY} , terminusLB - ${terminusSectionLowerBoundY}`);

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

      var dateValue = new Date();
      var yearValue = dateValue.getFullYear();
      var monthValue = dateValue.getMonth() + 1;
      var dayValue = dateValue.getDate();
      var hourValue = dateValue.getHours()
      var minutesValue = dateValue.getMinutes();
      var secondsValue = dateValue.getSeconds();
      var months = ["JAN. ", "FEB. ", "MAR. ", "APR. ", "MAY. ", "JUN. ", "JUL. ", "AUG. ", "SEP. ", "OCT. ", "NOV. ", "DEC. "];
      var days = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
      var mdvValue = months[monthValue] + dayValue;
      var yrValue = yearValue;

      // console.log(`monthValue: ${monthValue}`);

      var hoursStr;

      if(hourValue < 10){hoursStr = "0" + hourValue;
      }else{hoursStr = hourValue;}

      var minutesStr;

      if(minutesValue < 10){minutesStr = "0" + minutesValue;
      }else{minutesStr = minutesValue;}

      var secondsStr;

      if(secondsValue < 10){secondsStr = "0" + secondsValue;
      }else{secondsStr = secondsValue;}

      // var tmStrValue = mdvValue + ', ' + yrValue + ' | ' + hoursStr + "hrs : " + minutesStr + "min : " + secondsStr + 'sec';
      var d8StrValue = `${monthValue}/${dayValue}/${yrValue}`;
      var tmStrValue2 = `${hoursStr}.${minutesStr}.${secondsStr}` ;

      setDateString(d8StrValue)
      setTimeString(tmStrValue2)

    }, 1000)

    // const trackWindowWidth = () => {
    //   setWindowWidth(window.innerWidth);
    // };

    // window.addEventListener('widthTracker', trackWindowWidth);
    // console.log(`window width - ${windowWidth}`);

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
      />
      <HDRParallaxFrames />
      <div className='hdr-element'>

      </div>
      <div className='content-element'>
        <div ref={topRef}></div>
        <SpacerElement factor={10}/>
        <div className='page-nav-ref' ref={sectionRefs.about}>
          <SectionElement 
            sectionTitle={sectionsData.about.sectionTitle} 
            sectionSubtitle={sectionsData.about.sectionSubTitle} 
            sectionNfo={sectionsData.about.sectionNfo} 
            sectionMarker={sectionsData.about.sectionMarker} 
            currentPageLocation={currentPageLocation}
            hasGallery={sectionsData.about.hasGallery} 
            galleryType={sectionsData.about.galleryType} 
            galleryImages={sectionsData.about.galleryImages} 
            sfxActive={sfxActive}
          />
        </div>
        <SpacerElement factor={2}/>
        <div className='page-nav-ref' ref={sectionRefs.webDevelopment}>
          <SectionElement 
            sectionTitle={sectionsData.webDev.sectionTitle} 
            sectionSubtitle={sectionsData.webDev.sectionSubTitle} 
            sectionNfo={sectionsData.webDev.sectionNfo} 
            sectionMarker={sectionsData.webDev.sectionMarker} 
            currentPageLocation={currentPageLocation}
            hasGallery={sectionsData.webDev.hasGallery} 
            galleryType={sectionsData.webDev.galleryType} 
            galleryImages={sectionsData.webDev.galleryImages} 
            sfxActive={sfxActive}
          />
        </div>
        <SpacerElement factor={2}/>
        <div className='page-nav-ref' ref={sectionRefs.emailDevelopment}>
          <SectionElement 
            sectionTitle={sectionsData.emailDev.sectionTitle} 
            sectionSubtitle={sectionsData.emailDev.sectionSubTitle} 
            sectionNfo={sectionsData.emailDev.sectionNfo} 
            sectionMarker={sectionsData.emailDev.sectionMarker} 
            currentPageLocation={currentPageLocation}
            hasGallery={sectionsData.emailDev.hasGallery} 
            galleryType={sectionsData.emailDev.galleryType} 
            galleryImages={sectionsData.emailDev.galleryImages} 
            sfxActive={sfxActive}
          />
        </div>
        <SpacerElement factor={2}/>
        <div className='page-nav-ref' ref={sectionRefs.graphicDesign}>
          <SectionElement 
            sectionTitle={sectionsData.grfxDsn.sectionTitle} 
            sectionSubtitle={sectionsData.grfxDsn.sectionSubTitle} 
            sectionNfo={sectionsData.grfxDsn.sectionNfo} 
            sectionMarker={sectionsData.grfxDsn.sectionMarker} 
            currentPageLocation={currentPageLocation}
            hasGallery={sectionsData.grfxDsn.hasGallery} 
            galleryType={sectionsData.grfxDsn.galleryType} 
            galleryImages={sectionsData.grfxDsn.galleryImages} 
            sfxActive={sfxActive}
          />
        </div>
        <SpacerElement factor={2}/>
        <div className='page-nav-ref' ref={sectionRefs.visualDesign}>
          <SectionElement 
            sectionTitle={sectionsData.visDsn.sectionTitle} 
            sectionSubtitle={sectionsData.visDsn.sectionSubTitle} 
            sectionNfo={sectionsData.visDsn.sectionNfo} 
            sectionMarker={sectionsData.visDsn.sectionMarker} 
            currentPageLocation={currentPageLocation}
            hasGallery={sectionsData.visDsn.hasGallery} 
            galleryType={sectionsData.visDsn.galleryType} 
            galleryImages={sectionsData.visDsn.galleryImages} 
            sfxActive={sfxActive}
          />
        </div>
        <SpacerElement factor={7}/>
      </div>
      <div className='ftr-element'>
        <SpacerElement factor={2}/>
        <div className='page-nav-ref terminus-nav' ref={sectionRefs.terminus}>
          <TerminusSection 
            sectionTitle={sectionsData.terminus.sectionTitle}
            sectionSubtitle={sectionsData.terminus.sectionSubTitle}
            sectionNfo={sectionsData.terminus.sectionNfo}
            sectionMarker={sectionsData.terminus.sectionMarker}
            currentPageLocation={currentPageLocation}
            hasGallery={sectionsData.terminus.hasGallery} 
            galleryType={sectionsData.terminus.galleryType} 
            galleryImages={sectionsData.terminus.galleryImages}
            sectionLinksA={sectionsData.terminus.sectionLinksA}
            sectionLinksB={sectionsData.terminus.sectionLinksB}
            sfxActive={sfxActive}
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