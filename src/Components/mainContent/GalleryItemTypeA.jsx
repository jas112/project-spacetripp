import React from 'react'
import './styles/Animations.css'
import './styles/GalleryItemTypes.css'

const GalleryItemTypeA = ({galleryItemImage}) => {
  return (
    <div className={`gallery-item-frame`}>
        <div className={`gallery-item-indicator`}></div>
            <div className='gallery-item-tile' style={{backgroundImage: `url(${galleryItemImage.thumbnail})`}}></div>
        <div className={`gallery-item-indicator`}></div>
    </div>
  )
}

export default GalleryItemTypeA