import React from 'react'
import './styles/FTR_Element.css'
import TerminusSection from './TerminusSection'
import sectionsData from '../../data/sections'
import FTRParallaxFrames_Star from '../parallaxFrames/FTRParallaxFrames_Star'
import FTRParallaxFrames_Starships from '../parallaxFrames/FTRParallaxFrames_Starships'

const FTR_Element = () => {

    // const generateTerminus = () => {
    //     return(
    //         <TerminusSection 
    //         sectionTitle={sectionsData.terminus.sectionTitle}
    //         sectionSubtitle={sectionsData.terminus.sectionSubTitle}
    //         sectionNfo={sectionsData.terminus.sectionNfo}
    //         sectionMarker={sectionsData.terminus.sectionMarker}
    //         currentPageLocation={currentPageLocation}
    //         hasGallery={sectionsData.terminus.hasGallery} 
    //         galleryType={sectionsData.terminus.galleryType} 
    //         galleryImages={sectionsData.terminus.galleryImages}
    //         sectionLinksA={sectionsData.terminus.sectionLinksA}
    //         sectionLinksB={sectionsData.terminus.sectionLinksB}
    //       />
    //     )
    // }

  return (
    <div className='ftr-element-block'>
        {/* <div className='ftr-element-section ftr-block1'>
            {generateTerminus()}
        </div> */}
        <div className='ftr-element-bg ftr-block2'>
            <div className='ftr-element-bg-frm ftr-bg-frm1'>
                <FTRParallaxFrames_Starships />
            </div>
            <div className='ftr-element-bg-frm ftr-bg-frm2'>
                <FTRParallaxFrames_Star />
            </div>
        </div>
    </div>
  )
}

export default FTR_Element