import React from 'react'
import { useInView } from 'react-intersection-observer'
// import TopSectionPanel from './TopSectionPanel'
// import BottomSectionPanel from './BottomSectionPanel'
import './styles/SectionElement.css'

const SectionElement = ({sectionTitle, sectionSubtitle, sectionNfo, sectionMarker, hasGallery, GalleryType, GalleryImages}) => {

    const {ref, inView } = useInView({
        triggerOnce: false, // keep observing SectionElement
        threshold: 0.1, // trigger when 10% of the element is in view
    });

    const generateGallery = () => {

        console.log(hasGallery.Boolean.ToString)
        // if (hasGallery) {
        //     return (
        //         <div style={{color: '#fff'}}>This section has a gallery</div>
        //     )
        // }
    }

    const galleryValue = generateGallery;

  return (
    <>
        <div id={sectionTitle} className={`section-minor ${inView ? 'fade_in' : 'fade-out'}`}>
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
    </>

  )
}

export default SectionElement