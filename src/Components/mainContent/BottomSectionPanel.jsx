import React from 'react'
import './styles/SectionPanel.css'

const BottomSectionPanel = () => {
  return (
    <div className='bottom-section-panel'>
        <div className="section-selection-activation-bar">
            <div className="activation-bar-segment-3"></div>
            <div className="activation-bar-segment-4"></div>
        </div>
        <div className="section-comp-detail-panel bottom-section-comp-detail-panel">
            <div class ='section-comp-detail-bottom-element-spacer detail-spacer'>
                <div className="spacer-frame bottom-spacer-frame">
                    <div className="spacer-element bottom-spacer"></div>
                    <div className="spacer-element bottom-spacer"></div>
                    <div className="spacer-element bottom-spacer"></div>
                </div>
            </div>
            <div class ='section-comp-detail-element-frame element-frame'>
                <div class ='section-comp-detail-element-frame-container bottom-eFrame'>
                    <div className="comp-element-1 endpoint-comp-element comp-element-1-inactive"></div>
                    <div className="comp-element-1 comp-element-1-active"></div>
                    <div className="comp-element-1 comp-element-1-active"></div>
                    <div className="comp-element-1 comp-element-1-active"></div>
                    <div className="comp-element-1 comp-element-1-active"></div>
                    <div className="comp-element-1 comp-element-1-active"></div>
                    <div className="comp-element-1 comp-element-1-active"></div>
                    <div className="comp-element-1 comp-element-1-active"></div>
                    <div className="comp-element-1 comp-element-1-active"></div>
                    <div className="comp-element-1 comp-element-1-active"></div>
                    <div className="comp-element-1 endpoint-comp-element comp-element-1-inactive"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BottomSectionPanel