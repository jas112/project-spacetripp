import React from 'react'
import './styles/Parallax.css'
import stFigureA_L1 from '../../assets/images/hdrParallax_imgs/ST_tripp_figure-A-L1-RSCC.png'
import stFigureA_L4 from '../../assets/images/hdrParallax_imgs/ST_tripp_figure-A-L4-RSCC.png'
import stStar from '../../assets/images/hdrParallax_imgs/ST_star-RSCC.png'
import stPlanets_0C from '../../assets/images/hdrParallax_imgs/ST_planets_0C-RSCC.png'
import stPlanets_1D from '../../assets/images/hdrParallax_imgs/ST_planets_1D-RSCC.png'
import stLogo_PFG from '../../assets/images/hdrParallax_imgs/ST_logo-RSCC.png'
import stPlanets_2D from '../../assets/images/hdrParallax_imgs/ST_planets_2D-RSCC.png'
import stAsteroids from '../../assets/images/hdrParallax_imgs/ST_asteroids-RSCC.png'

const ForegroundFrame = () => {
  return (
    <div className='parallax-frame-holder-foreground' style={{overflowX: 'hidden', height: '8000px'}}>
        <div className='parallaxFrame'>
            <img src={stFigureA_L1} className='frameImage' alt='tripp_Figure"' id='trippFigure' style={{transform: 'translate(0px, 0.833333%)'}}/>
            <img src={stFigureA_L4} className='frameImage frameImage-overlay' alt='tripp_Figure"_Helmet' id='trippFigureHelmet' style={{transform: 'translate(0px, 0.833333%)'}}/>
        </div>
        <div className="parallaxFrame">
            <img src={stStar} className='frameImage' alt='star"' id='star' style={{transform: 'translate(0px, 6.66667%)'}}/>
        </div>
        <div className="parallaxFrame">
            <img src={stPlanets_0C} className='frameImage' alt='planetsG0' id='planetsG0' style={{transform: 'translate(0.704225%, -0.416667%)'}}/>
        </div>
        <div className="parallaxFrame">
            <img src={stPlanets_1D} className='frameImage' alt='planetsG1' id='planetsG1' style={{transform: 'translate(-0.704225%, -0.416667%)'}}/>
        </div>
        <div className="parallaxFrame">
            <img src={stLogo_PFG} className='frameImage' alt='trippLogo' id='trippLogo'/>
        </div>
        <div className="parallaxFrame">
            <img src={stPlanets_2D} className='frameImage' alt='planetsG2' id='planetsG2' style={{transform: 'translate(0px, -4.34783%)'}}/>
        </div>
        <div className="parallaxFrame">
            <img src={stAsteroids} className='frameImage' alt='asteroids3' id='asteroids3'/>
        </div>
    </div>
  )
 
}

export default ForegroundFrame