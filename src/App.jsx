import { useState, useEffect } from 'react'
import './App.css'
import NavBar from './Components/navBar/NavBar';
import ForegroundFrame from './Components/parallaxFrames/ForegroundFrame.jsx';
import BackgroundFrame from './Components/parallaxFrames/BackgroundFrame.jsx';
// import FtrSection from './Components/mainContent/FtrSection.jsx'
import FTRElement from './Components/mainContent/FTRElement.jsx';
import SectionElement from './Components/mainContent/SectionElement.jsx';

const App = () => {

  const [scrollPositionY, setScrollPositionY] = useState(0);
  const [timeString, setTimeString] = useState('');

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

  return (
    <>
      <NavBar currentScroll={scrollPositionY} currentTime={timeString} />
      <ForegroundFrame />
      <BackgroundFrame/>
      <div content-container>
        <SectionElement sectionTitle={'About Me'} sectionSubtitle={'this is my subtitle'} sectionNfo={'here is the information'} sectionMarker={'About'} hasGallery={true} GalleryType={'NFO'} GalleryImages={[]} />
        <SectionElement sectionTitle={'Web Development'} sectionSubtitle={'this is my subtitle'} sectionNfo={'here is the information'} sectionMarker={'About'} hasGallery={true} GalleryType={'NFO'} GalleryImages={[]} />
        <SectionElement sectionTitle={'Graphic Design'} sectionSubtitle={'this is my subtitle'} sectionNfo={'here is the information'} sectionMarker={'About'} hasGallery={true} GalleryType={'NFO'} GalleryImages={[]} />
        <SectionElement sectionTitle={'Visual Design'} sectionSubtitle={'this is my subtitle'} sectionNfo={'here is the information'} sectionMarker={'About'} hasGallery={true} GalleryType={'NFO'} GalleryImages={[]} />
        <SectionElement sectionTitle={'About Me'} sectionSubtitle={'this is my subtitle'} sectionNfo={'here is the information'} sectionMarker={'About'} hasGallery={true} GalleryType={'NFO'} GalleryImages={[]} />
      </div>
      <FTRElement/>
    </>
  )
}

export default App