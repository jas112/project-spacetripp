import React from 'react'
import './styles/Animations.css'
import './styles/GalleryItemTypes.css'

const GalleryItemTypeA = ({galleryItemImage,sectionMarker, itemIdx, blinkIdx, blinkGalleryItem}) => {

    const doIdxsMatch = itemIdx == blinkIdx;
    // const blinkThisGalleryItem = doIdxsMatch && blinkGalleryItem;

    const blinkThisGalleryItem = false;

    // console.log(`sectionMarker: ${sectionMarker} | itemIdx: ${itemIdx} | blinkIdx: ${blinkIdx} | doIdxsMatch: ${doIdxsMatch} | blinkThisGalleryItem: ${blinkThisGalleryItem}`);

  return (
    <div className={`gallery-item-frame ${blinkThisGalleryItem ? 'blink-focus-item' : ''}`}>
        {/* <div className={`gallery-item-indicator ${blinkThisGalleryItem ? 'blink' : ''}`}></div>
            <div className='gallery-item-tile' style={{backgroundImage: `url(${galleryItemImage})`}}></div>
        <div className={`gallery-item-indicator ${blinkThisGalleryItem ? 'blink' : ''}`}></div> */}
        <div className={`gallery-item-indicator ${blinkThisGalleryItem ? 'blink' : ''}`}></div>
            <div className='gallery-item-tile' style={{backgroundImage: `url(${galleryItemImage})`}}></div>
        <div className={`gallery-item-indicator ${blinkThisGalleryItem ? 'blink' : ''}`}></div>
    </div>
  )
}

export default GalleryItemTypeA