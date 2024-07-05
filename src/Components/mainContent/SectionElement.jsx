import React, {useState, useEffect} from 'react'
import { useInView } from 'react-intersection-observer'
import TopSectionPanel from './TopSectionPanel.jsx'
import BottomSectionPanel from './BottomSectionPanel.jsx'
import './styles/SectionElement.css'

const SectionElement = ({sectionTitle, sectionSubtitle, sectionNfo, sectionMarker, currentPageLocation, hasGallery, GalleryType, GalleryImages}) => {

    const [currentStatusBool, setCurrentStatusBool] = useState(false);
    const [activateSectionMinor, setActivateSectionMinor] = useState(false);

    const {ref, inView } = useInView({
        triggerOnce: false, // keep observing SectionElement
        threshold: 0.5, // trigger when 10% of the element is in view
    });

    useEffect(() => {

        setCurrentStatusBool(sectionMarker == currentPageLocation);

    }, [currentPageLocation])

    useEffect(() => {

        let timer;
        if (currentStatusBool) {

            timer = setTimeout(() => {
                setActivateSectionMinor(true);
            }, 1500);

        }else{
            setActivateSectionMinor(false);
        }

        return () => {
            clearTimeout(timer);
        }

      }, [currentStatusBool]);
    

    // const currentStatusBool = sectionMarker == currentPageLocation;

    const generateGallery = () => {

        // console.log(hasGallery.Boolean.ToString)
        // if (hasGallery) {
        //     return (
        //         <div style={{color: '#fff'}}>This section has a gallery</div>
        //     )
        // }
    }

    const galleryValue = generateGallery;

  return (
    <>
        <div id={sectionTitle} ref={ref} className={`full-section-config floating ${inView ? 'fade-in' : 'fade-out'}`}>
            <TopSectionPanel currentStatusBool={currentStatusBool}/>
            <div id={sectionTitle} ref={ref} className={`section-minor ${activateSectionMinor ? 'active-section-minor' : ''}`}>
                <div className="section-hdr">
                    <div className="section-title">{sectionTitle}</div>
                    <div className="section-position-value">{sectionTitle}</div>
                    <div className="section-subtitle">{sectionSubtitle}</div>
                </div>
                <div className="section-nfo  nfo-scroll" style={{height:'auto'}}>
                {sectionNfo}
                    {/* <p> */}
                        {/* {sectionNfo.split('/n').map((line, idx) => {
                            <p key={idx}>
                                {line}<br/>
                            </p>
                        })} */}
                    {/* </p> */}
                </div>
                {/* {galleryValue} */}
                <div className='gallery-type-hero'>

                </div>
            </div>
            <BottomSectionPanel currentStatusBool={currentStatusBool}/>
        </div>
    </>

  )
}

export default SectionElement