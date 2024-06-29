import { useState } from 'react'
import './App.css'
import NavBar from './Components/navBar/NavBar';

const App = () => {

  const myName = 'SpaceTRIPP';
  const names = ['thoth', 'bast', 'khonshu', 'osirus'];
  // const isActive = true;
  const [isActive, setIsActive] = useState(true);

  const handleButtonPress = () => {
    setIsActive(isActive => !isActive);
  };

  return (
    <>
      <NavBar/>
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