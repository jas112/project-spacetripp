import React, {useState, useEffect} from 'react'
import { useInView } from 'react-intersection-observer'
import TopSectionPanel from './TopSectionPanel.jsx'
import BottomSectionPanel from './BottomSectionPanel.jsx'
import GalleryElement from './GalleryElement.jsx'
import './styles/SectionElement.css'
import {generateText} from '../../utils/contentTools.jsx'
import sectionSoundRef from '../../assets/audio/beam_sound-103367.mp3'

const SectionElement = ({sectionTitle, sectionSubtitle, sectionNfo, sectionMarker, currentPageLocation, hasGallery, galleryType, galleryImages, sfxActive}) => {

    // console.log(JSON.stringify(GalleryImages, null, 2));
    // console.log(GalleryImages[0].image);

    const [currentStatusBool, setCurrentStatusBool] = useState(false);
    const [activateSectionMinor, setActivateSectionMinor] = useState(false);

    const sectionHoverSound = new Audio(sectionSoundRef);
    const sectionExitSound = new Audio(sectionSoundRef);
    sectionHoverSound.volume = 0.21;
    sectionHoverSound.playbackRate = 1.25;
    sectionExitSound.volume = 0.21;
    sectionExitSound.playbackRate = 1.25;

    const hasGalleryBool = hasGallery === 'true';
    // console.log(`${sectionMarker} has a gallery: ${hasGalleryBool} ||| ${hasGallery}`);

    const {ref, inView } = useInView({
        triggerOnce: false, // keep observing SectionElement
        threshold: 0.2, // trigger when 10% of the element is in view
    });

    useEffect(() => {

        setCurrentStatusBool(sectionMarker == currentPageLocation);

    }, [currentPageLocation])

    useEffect(() => {

        let timer;
        if (currentStatusBool) {

            timer = setTimeout(() => {
                setActivateSectionMinor(true);
            }, 100);

        }else{
            setActivateSectionMinor(false);
        }

        return () => {
            clearTimeout(timer);
        }

      }, [currentStatusBool]);
    

    // const currentStatusBool = sectionMarker == currentPageLocation;

    const generateGallery = () => {
        // console.log(`from generateGaller in ${sectionMarker} SectionElement - currentStatusBool: ${currentStatusBool}`);
        const currentBoolStr = currentStatusBool.toString();
        // console.log(`currentBoolStr: ${currentBoolStr}`);
        if(hasGalleryBool){
            return(
                <GalleryElement sectionMarker={sectionMarker} galleryType={galleryType} galleryImages={galleryImages} currentStatusBool={currentStatusBool}/>
                // <div style={{width: '100%', height: '100px', color: '#fff', border: 'solid 1px white'}}>This section has a gallery</div>
            )
        }
    }

    const galleryValue = generateGallery;

  return (
    <>
        <div id={sectionMarker} ref={ref} className={`full-section-config floating ${inView ? 'fade-in' : 'fade-out'}`}>
            <TopSectionPanel currentStatusBool={currentStatusBool}/>
            <div 
                id={`${sectionMarker} + _Mkr`} 
                ref={ref} 
                className={`section-minor ${activateSectionMinor ? 'active-section-minor' : ''}`}
                onMouseEnter={() => {
                    if(sfxActive){
                        sectionHoverSound.play();
                    }
                }}
                onMouseLeave={() => {
                    if(sfxActive){
                        sectionExitSound.play();
                    }
                }}
            >
                <div className="section-hdr">
                    <div className="section-title">{sectionTitle}</div>
                    <div className="section-position-value">{sectionTitle}</div>
                    <div className="section-subtitle">{sectionSubtitle}</div>
                </div>
                <div className="section-nfo  nfo-scroll">
                    {generateText(sectionNfo,'sectionNfo', sectionMarker)}
                </div>
                {/* {galleryValue} */}
                {/* <div className='gallery-type-hero'>
                    <img className='hero-image' src={GalleryImages[0].image} alt={GalleryImages[0].alt} />
                </div> */}
                {generateGallery()}
            </div>
            <BottomSectionPanel currentStatusBool={currentStatusBool}/>
        </div>
    </>

  )
}

export default SectionElement