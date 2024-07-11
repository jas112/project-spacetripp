import React, { useEffect} from 'react'
import './styles/HDRParallaxFrames.css'
import stFigureA_L1 from '../../assets/images/hdrParallax_imgs/ST_tripp_figure-A-L1-RSCC.png'
import stFigureA_L4 from '../../assets/images/hdrParallax_imgs/ST_tripp_figure-A-L4-RSCC.png'
import stStar from '../../assets/images/hdrParallax_imgs/ST_star-RSCC.png'
import stPlanets_0C from '../../assets/images/hdrParallax_imgs/ST_planets_0C-RSCC.png'
import stPlanets_1D from '../../assets/images/hdrParallax_imgs/ST_planets_1D-RSCC.png'
import stLogo_PFG from '../../assets/images/hdrParallax_imgs/ST_logo-RSCC.png'
import stPlanets_2D from '../../assets/images/hdrParallax_imgs/ST_planets_2D-RSCC.png'
import stAsteroids from '../../assets/images/hdrParallax_imgs/ST_asteroids-RSCC.png'


const HDRParallaxFrames = () => {

    useEffect(() => {
        const parallaxTransform = () => {
            const scrollPosition = window.scrollY;
            // console.log('from parallaxtransform');
            // console.log(scrollPosition);

            document.getElementById('hdr-plx-figure').style.transform = `translate(0px, ${scrollPosition / 240}%)`;
            document.getElementById('hdr-plx-helmut').style.transform = `translate(0px, ${scrollPosition / 240}%)`;
            document.getElementById('hdr-plx-star').style.transform = `translate(0px, ${scrollPosition / 30}%)`;
            document.getElementById('hdr-plx-planetsG0').style.transform = `translate(${scrollPosition / 284}%, -${scrollPosition / 480}%)`;
            document.getElementById('hdr-plx-planetsG1').style.transform = `translate(-${scrollPosition / 284}%, -${scrollPosition / 480}%)`;
            document.getElementById('hdr-plx-stLogo').style.transform = `translate(0px, -${scrollPosition / 960}%)`;
            document.getElementById('hdr-plx-planetsG2').style.transform = `translate(0px, -${scrollPosition / 46}%)`;
            document.getElementById('hdr-plx-asteroids3').style.transform = `translate(0px, -${scrollPosition / 13}%)`;

        };

        window.addEventListener('scroll', parallaxTransform);

        return() => {
            window.removeEventListener('scroll', parallaxTransform)
        }

    }, [])

  return (
    <div className='hdr-parallax-frame-holder'>
        <div className='hdr-parallax-frame'>
            <img 
                src={stFigureA_L1} 
                className='hdr-parallax-frame-img' 
                alt='tripp_Figure' 
                id='hdr-plx-figure' 
                style={{transform: 'translate(0px, 0.833333%)'}}
            />
            <img 
                src={stFigureA_L4} 
                className='hdr-parallax-frame-img frameImage-overlay' 
                alt='helmut' 
                id='hdr-plx-helmut' 
                style={{transform: 'translate(0px, 0.833333%)'}}
            />
        </div>
        <div className='hdr-parallax-frame'>
            <img 
                src={stStar} 
                className='hdr-parallax-frame-img'
                alt='star"' 
                id='hdr-plx-star' 
                style={{transform: 'translate(0px, 6.66667%)'}}
            />
        </div>
        <div className='hdr-parallax-frame'>
            <img 
                src={stPlanets_0C} 
                className='hdr-parallax-frame-img'
                alt='planetsG0' 
                id='hdr-plx-planetsG0' 
                style={{transform: 'translate(0.704225%, -0.416667%)'}}
            />
        </div>
        <div className='hdr-parallax-frame'>
            <img 
                src={stPlanets_1D} 
                className='hdr-parallax-frame-img'
                alt='planetsG1' 
                id='hdr-plx-planetsG1' 
                style={{transform: 'translate(-0.704225%, -0.416667%)'}}
            />
        </div>
        <div className='hdr-parallax-frame spc-frame-100pct-width'>
            <div className='hdr-parallax-frame-secondary hdr-parallax-frame-rig-stLogo' id='stLogo-rig'>
                <img 
                    src={stLogo_PFG} 
                    className='hdr-parallax-frame-img' 
                    alt='stLogo' 
                    id='hdr-plx-stLogo'
                />
            </div>
        </div>
        <div className='hdr-parallax-frame'>
            <img 
                src={stPlanets_2D} 
                className='hdr-parallax-frame-img'
                alt='planetsG2' 
                id='hdr-plx-planetsG2' 
                style={{transform: 'translate(0px, -4.34783%)'}}
            />
        </div>
        <div className='hdr-parallax-frame'>
            <img 
                src={stAsteroids} 
                className='hdr-parallax-frame-img'
                alt='asteroids3' 
                id='hdr-plx-asteroids3'
            />
        </div>
        
        
    </div>
  )
}

export default HDRParallaxFrames