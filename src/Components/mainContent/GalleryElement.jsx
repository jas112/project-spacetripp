import React, {useState, useEffect} from 'react'
import './styles/GalleryElement.css'
import GalleryItemTypeA from './GalleryItemTypeA.jsx'


const GalleryElement = ({sectionMarker, galleryType, galleryImages, currentStatusBool}) => {

    const determineGalleryClass = () => {
        if(galleryType == 'hero'){
            return ('gallery-type-hero');
        }else{
            return ('gallery-type-dev-dsn-work');
        }
    }

    const galleryClass = determineGalleryClass();
    // console.log(`${sectionMarker} has galleryType: ${galleryType} and galleryClass: ${galleryClass}`);

    const generateGalleryItems = () => {
        return(
            galleryImages.map((image, idx) => (
                <React.Fragment key={`${sectionMarker}` + '-' + idx}>
                    <GalleryItemTypeA galleryItemImage={image.thumbnail} />
                </React.Fragment>
            ))        
        )
    }

  return (
    <div className={galleryClass}>
        <div className='gallery-element-border'>
            <div className='gallery-element-border-spacer-segment'></div>
            <div className='gallery-element-border-pulse-segment'></div>
        </div>
        <div className={`gallery-element-console ${currentStatusBool ? 'active-gallery-element-console' : ''}`}>

            {/* {generateGalleryItems()} */}

            {
                galleryImages.map((image, idx) => (
                    <React.Fragment key={`${sectionMarker}` + '-' + idx}>
                        <GalleryItemTypeA galleryItemImage={image} sectionMarker={sectionMarker} />
                    </React.Fragment>
                )) 
            }

        </div>
        <div className='gallery-element-border'>
            <div className='gallery-element-border-pulse-segment'></div>
            <div className='gallery-element-border-spacer-segment'></div>
        </div>
    </div>
  )
}

export default GalleryElement