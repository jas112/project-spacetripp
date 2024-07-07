import React, {useState, useEffect} from 'react'
import './styles/GalleryElement.css'
import GalleryItemTypeA from './GalleryItemTypeA.jsx'


const GalleryElement = ({sectionIsCurrent, sMarker, galleryImages}) => {

    const generateGalleryItems = () => {
        return(
            galleryImages.map((image, idx) => (
                <React.Fragment key={`${sMarker}` + '-' + idx}>
                    <GalleryItemTypeA galleryItemImage={image}/>
                </React.Fragment>
            ))        
        )
    }

  return (
    <div className='gallery-element-frame'>
        <div className='gallery-element'>
            {generateGalleryItems()}
        </div>
    </div>
  )
}

export default GalleryElement