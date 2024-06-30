import React from 'react'
import './styles/SectionPanel.css'

const TopSectionPanel = () => {
  return (
    <div className='top-section-panel'>
        <div className="section-comp-detail-panel top-section-comp-detail-panel">
            <div class ='section-comp-detail-element-frame element-frame'>
                <div class ='section-comp-detail-element-frame-container top-eFrame'>
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
            <div class ='section-comp-detail-element-spacer detail-spacer top-detail-spacer'>
                <div className="spacer-frame top-spacer-frame">
                    <div className="spacer-element top-spacer"></div>
                    <div className="spacer-element top-spacer"></div>
                    <div className="spacer-element top-spacer"></div>
                </div>
            </div>
        </div>
        <div className="section-selection-activation-bar">
            <div className="activation-bar-segment-1"></div>
            <div className="activation-bar-segment-2"></div>
        </div>
    </div>
  )
}

export default TopSectionPanel