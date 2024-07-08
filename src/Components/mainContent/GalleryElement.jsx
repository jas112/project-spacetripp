import React, {useState, useEffect} from 'react'
import './styles/GalleryElement.css'
import GalleryItemTypeA from './GalleryItemTypeA.jsx'


const GalleryElement = ({sectionMarker, galleryType, galleryImages, currentStatusBool}) => {

    const [blinkGalleryItem, setBlinkGalleryItem] = useState(false);
    const [blinkingGalleryItemIdx, setBlinkGalleryItemIdx] = useState(-1);


    // useEffect(() => {
    //     let interval;
    //     if(blinkGalleryItem){
    //         interval = setInterval(() => {
    //             setBlinkGalleryItemIdx((prev) => (prev + 1) % galleryImages.length);
    //         }, 200);
    //     }else{
    //         setBlinkGalleryItemIdx(-1);
    //     }

    //   return () => {
    //     clearInterval(interval);
    //   }

    // }, [blinkGalleryItem])
    

    // useEffect(() => {

    //     let interval;
    //     let timer;
    //     if (currentStatusBool) {

    //         timer = setTimeout(() => {
    //             setBlinkGalleryItem(true);
    //         }, 200);

    //     }else{
    //         setBlinkGalleryItem(false);
    //     }

    //     return () => {
    //         clearTimeout(timer);
    //     }

    //   }, [currentStatusBool]);

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
                    {/* <GalleryItemTypeA galleryItemImage={image.thumbnail} itemIdx={idx} blinkIdx={blinkingGalleryItemIdx} blinkGalleryItem={blinkGalleryItem} /> */}
                    <GalleryItemTypeA galleryItemImage={image.thumbnail} itemIdx={idx} blinkIdx={idx} blinkGalleryItem={blinkGalleryItem} />
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
                        <GalleryItemTypeA galleryItemImage={image.thumbnail} sectionMarker={sectionMarker} itemIdx={idx} blinkIdx={blinkingGalleryItemIdx} blinkGalleryItem={blinkGalleryItem} />
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