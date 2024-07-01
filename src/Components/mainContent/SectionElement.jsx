import React from 'react'
import { useInView } from 'react-intersection-observer'
import TopSectionPanel from './TopSectionPanel.jsx'
import BottomSectionPanel from './BottomSectionPanel.jsx'
import './styles/SectionElement.css'

const SectionElement = ({sectionTitle, sectionSubtitle, sectionNfo, sectionMarker, hasGallery, GalleryType, GalleryImages}) => {

    const {ref, inView } = useInView({
        triggerOnce: false, // keep observing SectionElement
        threshold: 0.5, // trigger when 10% of the element is in view
    });

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
        <div id={sectionTitle} ref={ref} className={`full-section-config ${inView ? 'fade-in' : 'fade-out'}`}>
            <TopSectionPanel/>
            <div id={sectionTitle} ref={ref} className='section-minor'>
                <div className="section-hdr">
                    <div className="section-title">{sectionTitle}</div>
                    <div className="section-position-value">{sectionTitle}</div>
                    <div className="section-subtitle">{sectionSubtitle}</div>
                </div>
                <div className="section-nfo  nfo-scroll" style={{height:'180px'}}>
                    {sectionNfo}
                </div>
                {/* {galleryValue} */}
            </div>
            <BottomSectionPanel/>
        </div>
    </>

  )
}

export default SectionElement