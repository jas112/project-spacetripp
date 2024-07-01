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

  const [currentPageLocation, setCurrentPageLocation] = useState('start');

  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const sectionRefs = {
    about: useRef(null),
    webDevelopment: useRef(null),
    emailDevelopment: useRef(null),
    graphicDesign: useRef(null),
    visualDesign: useRef(null),
  };

  useEffect(() => {

    const trackScrollandSetPageLocation = () => {
      const newScrollPositionValue = window.scrollY;
      setScrollPositionY(newScrollPositionValue);

      if (newScrollPositionValue <= 1800) {
        setCurrentPageLocation('start');
      } else if (newScrollPositionValue >= 2228 && newScrollPositionValue <= 3128) {
        setCurrentPageLocation('about');
      } else if (newScrollPositionValue >= 3229 && newScrollPositionValue <= 3829) {
        setCurrentPageLocation('webDevelopment');
      } else if (newScrollPositionValue >= 3929 && newScrollPositionValue <= 4529) {
        setCurrentPageLocation('emailDevelopment');
      } else if (newScrollPositionValue >= 4630 && newScrollPositionValue <= 5230) {
        setCurrentPageLocation('graphicDesign');
      } else if (newScrollPositionValue >= 5330 && newScrollPositionValue <= 5930) {
        setCurrentPageLocation('visualDesign');
      } else if (newScrollPositionValue >= 6355) {
        setCurrentPageLocation('end');
      }

    };

    window.addEventListener('scroll', trackScrollandSetPageLocation);

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

      // var tmStrValue = mdvValue + ', ' + yrValue + ' | ' + hoursStr + "hrs : " + minutesStr + "min : " + secondsStr + 'sec';
      var tmStrValue2 = 'Mo-' + monthValue + ' // Dy-' + dayValue + ' // Yr-' + yrValue + ' // ' + hoursStr + "H : " + minutesStr + "M : " + secondsStr + 'S';

      setTimeString(tmStrValue2)

    }, 1000)

    return () => {
      window.removeEventListener('scroll', trackScrollandSetPageLocation);
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
      <NavBar 
        currentScroll={scrollPositionY} 
        currentTime={timeString} 
        currentPageLocation={currentPageLocation} 
        scrollToTop={scrollToTop} 
        scrollToBottom={scrollToBottom} 
        scrollToSection={scrollToSection} 
      />
      <div ref={topRef}></div>
      <ForegroundFrame />
      <SpacerElement factor={10}/>
      <div className='page-nav-ref' ref={sectionRefs.about}>
        <SectionElement 
          sectionTitle={'About Me'} 
          sectionSubtitle={'A brief blurb about me.'} 
          sectionNfo={'here is the information'} 
          sectionMarker={'About'} 
          hasGallery={'true'} 
          GalleryType={'NFO'} 
          GalleryImages={[]} 
        />
      </div>
      <SpacerElement factor={1}/>
      <div className='page-nav-ref' ref={sectionRefs.webDevelopment}>
        <SectionElement 
          sectionTitle={'Web Development'} 
          sectionSubtitle={'My web dev adventures.'} 
          sectionNfo={'here is the information'} 
          sectionMarker={'About'} 
          hasGallery={'true'} 
          GalleryType={'NFO'} 
          GalleryImages={[]} 
        />
      </div>
      <SpacerElement factor={1}/>
      <div className='page-nav-ref' ref={sectionRefs.emailDevelopment}>
        <SectionElement 
          sectionTitle={'Email Develoment'} 
          sectionSubtitle={'My adventure in fun space of email!'} 
          sectionNfo={'here is the information'} 
          sectionMarker={'About'} 
          hasGallery={'true'} 
          GalleryType={'NFO'} 
          GalleryImages={[]} 
        />
      </div>
      <SpacerElement factor={1}/>
      <div className='page-nav-ref' ref={sectionRefs.graphicDesign}>
        <SectionElement 
          sectionTitle={'Graphic Design'} 
          sectionSubtitle={'Communication Graphics'} 
          sectionNfo={'here is the information'} 
          sectionMarker={'About'} 
          hasGallery={'true'} 
          GalleryType={'NFO'} 
          GalleryImages={[]} 
        />
      </div>
      <SpacerElement factor={1}/>
      <div className='page-nav-ref' ref={sectionRefs.visualDesign}>
        <SectionElement 
          sectionTitle={'Visual Design'} 
          sectionSubtitle={'Concepts and Illustration'} 
          sectionNfo={'here is the information'} 
          sectionMarker={'About'} 
          hasGallery={'true'} 
          GalleryType={'NFO'} 
          GalleryImages={[]} 
        />
      </div>
      <SpacerElement factor={1}/>
      <FTRElement/>
      <BackgroundFrame/>
      <div ref={bottomRef}></div>
    </Router>
  )
}

export default App