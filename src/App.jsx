import { useState, useEffect, useRef } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import NavBar from './Components/navBar/NavBar';
import ForegroundFrame from './Components/parallaxFrames/ForegroundFrame.jsx';
import BackgroundFrame from './Components/parallaxFrames/BackgroundFrame.jsx';
import FTRElement from './Components/mainContent/FTRElement.jsx';
import SectionElement from './Components/mainContent/SectionElement.jsx';
import SpacerElement from './Components/mainContent/SpacerElement.jsx';

const App = () => {

  const [scrollPositionY, setScrollPositionY] = useState(0);
  const [timeString, setTimeString] = useState('');

  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const sectionRefs = {
    about: useRef(null),
    webDev: useRef(null),
    graphicDesign: useRef(null),
    visualDesign: useRef(null),
    email: useRef(null),
  };

  useEffect(() => {

    const trackScroll = () => {
      const newScrollPositionValue = window.scrollY;
      setScrollPositionY(newScrollPositionValue);
    };

    window.addEventListener('scroll', trackScroll);

    const trackTime = setInterval(() => {

      var dateValue = new Date();
      var yearValue = dateValue.getFullYear();
      var monthValue = dateValue.getMonth();
      var dayValue = dateValue.getDate();
      var hourValue = dateValue.getHours()
      var minutesValue = dateValue.getMinutes();
      var secondsValue = dateValue.getSeconds();
      var months = ["JAN. ", "FEB. ", "MAR. ", "APR. ", "MAY. ", "JUN. ", "JUL. ", "AUG. ", "SEP. ", "OCT. ", "NOV. ", "DEC. "];
      var days = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
      var mdvValue = months[monthValue] + dayValue;
      var yrValue = yearValue;

      var hoursStr;

      if(hourValue < 10){hoursStr = "0" + hourValue;
      }else{hoursStr = hourValue;}

      var minutesStr;

      if(minutesValue < 10){minutesStr = "0" + minutesValue;
      }else{minutesStr = minutesValue;}

      var secondsStr;

      if(secondsValue < 10){secondsStr = "0" + secondsValue;
      }else{secondsStr = secondsValue;}

      var tmStrValue = mdvValue + ', ' + yrValue + ' | ' + hoursStr + "hrs : " + minutesStr + "min : " + secondsStr + 'sec';

      setTimeString(tmStrValue)

    }, 1000)

    return () => {
      window.removeEventListener('scroll', trackScroll);
      clearInterval(trackTime);
    };
  }, [])

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
      <NavBar currentScroll={scrollPositionY} currentTime={timeString} scrollToTop={scrollToTop} scrollToBottom={scrollToBottom} scrollToSection={scrollToSection} />
      <div ref={topRef}></div>
      <ForegroundFrame />
      <SpacerElement/>
      <div className='page-nav-ref' ref={sectionRefs.about}>
        <SectionElement sectionTitle={'About Me'} sectionSubtitle={'this is my subtitle'} sectionNfo={'here is the information'} sectionMarker={'About'} hasGallery={'true'} GalleryType={'NFO'} GalleryImages={[]} />
      </div>
      <SpacerElement/>
      <div className='page-nav-ref' ref={sectionRefs.webDev}>
        <SectionElement sectionTitle={'Web Development'} sectionSubtitle={'this is my subtitle'} sectionNfo={'here is the information'} sectionMarker={'About'} hasGallery={'true'} GalleryType={'NFO'} GalleryImages={[]} />
      </div>
      <SpacerElement/>
      <div className='page-nav-ref' ref={sectionRefs.graphicDesign}>
        <SectionElement sectionTitle={'Graphic Design'} sectionSubtitle={'this is my subtitle'} sectionNfo={'here is the information'} sectionMarker={'About'} hasGallery={'true'} GalleryType={'NFO'} GalleryImages={[]} />
      </div>
      <SpacerElement/>
      <div className='page-nav-ref' ref={sectionRefs.visualDesign}>
        <SectionElement sectionTitle={'Visual Design'} sectionSubtitle={'this is my subtitle'} sectionNfo={'here is the information'} sectionMarker={'About'} hasGallery={'true'} GalleryType={'NFO'} GalleryImages={[]} />
      </div>
      
      <SpacerElement/>
      <div className='page-nav-ref' ref={sectionRefs.email}>
        <SectionElement sectionTitle={'Email'} sectionSubtitle={'this is my subtitle'} sectionNfo={'here is the information'} sectionMarker={'About'} hasGallery={'true'} GalleryType={'NFO'} GalleryImages={[]} />
      </div>
      <SpacerElement/>
      <FTRElement/>
      <BackgroundFrame/>
      <div ref={bottomRef}></div>
    </Router>
  )
}

export default App