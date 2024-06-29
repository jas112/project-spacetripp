import { useState, useEffect } from 'react'
import './App.css'
import NavBar from './Components/navBar/NavBar';
import ForegroundFrame from './Components/parallaxFrames/ForegroundFrame.jsx';
import BackgroundFrame from './Components/parallaxFrames/BackgroundFrame.jsx';

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

      if(hourValue < 10){
        hoursStr = "0" + hourValue;
      }else{
        hoursStr = hourValue;
      }

      var minutesStr;

      if(minutesValue < 10){
        minutesStr = "0" + minutesValue;
      }else{
        minutesStr = minutesValue;
      }

      var secondsStr;

      if(secondsValue < 10){
        secondsStr = "0" + secondsValue;
      }else{
        secondsStr = secondsValue;
      }

      var tmStrValue = mdvValue + ', ' + yrValue + ' | ' + hoursStr + "hrs : " + minutesStr + "min : " + secondsStr + 'sec';

      setTimeString(tmStrValue)

    }, 1000)

    return () => {
      window.removeEventListener('scroll', trackScroll);
      clearInterval(trackTime);
    };
  }, [])

  // const myName = 'SpaceTRIPP';
  // const names = ['thoth', 'bast', 'khonshu', 'osirus'];
  // const [isActive, setIsActive] = useState(true);

  // const handleButtonPress = () => {
  //   setIsActive(isActive => !isActive);
  // };

  return (
    <>
      <NavBar currentScroll={scrollPositionY} currentTime={timeString} />
      <ForegroundFrame/>
      <BackgroundFrame/>
      {/* <div>
        <div className='init-text'>{myName}</div>
        <ul className='listStyleType1'>
          {names.map((nValue,index) => (
            <li>{nValue}</li>
          ))}
        </ul>
        <button onClick={handleButtonPress}>
            isActive - {isActive.toString()}
        </button>
        { isActive ? <h1 className='isActiveText'>It is active in here!!!</h1> : <h1 className='isNotActiveText'>It is not active in here!!</h1> }
      </div> */}
    </>
  )
}

export default App