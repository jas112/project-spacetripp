import React, {useState, useEffect} from 'react'
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import './styles/GalleryElement.css'
import GalleryItemTypeA from './GalleryItemTypeA.jsx'


const GalleryElement = ({sectionMarker, galleryType, galleryImages, currentStatusBool}) => {

    useEffect(() => {
        Fancybox.bind('[data-fancybox]', {});
    }, [])
    

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
                <a key={`${sectionMarker}` + '-' + idx} data-fancybox={sectionMarker} href={image.image}>
                    <GalleryItemTypeA galleryItemImage={image} />
                </a>
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
                    <a key={`${sectionMarker}` + '-' + idx} data-fancybox={sectionMarker} data-caption={image.imageDescription} href={image.image}>
                        <GalleryItemTypeA galleryItemImage={image} />
                    </a>
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