import React from 'react'
import './styles/SectionPanel.css'

const BottomSectionPanel = () => {
  return (
    <div className='bottom-section-panel  section-panel'>
        <div className="section-selection-activation-bar">
            <div className="activation-bar-segment-4-active"></div>
            <div className="activation-bar-segment-3-active"></div>
            {/* <div className="activation-bar-segment-4-active"></div> */}
        </div>
        <div className="section-comp-detail-panel bottom-section-comp-detail-panel">
            <div className='section-comp-detail-bottom-element-spacer detail-spacer'>
                <div className="spacer-frame bottom-spacer-frame">
                    <div className="spacer-element bottom-spacer"></div>
                    <div className="spacer-element bottom-spacer"></div>
                    <div className="spacer-element bottom-spacer"></div>
                </div>
            </div>
            <div className='section-comp-detail-element-frame element-frame'>
                <div className='section-comp-detail-element-frame-container bottom-eFrame'>
                    <div className="comp-element-1 endpoint-comp-element comp-element-1-active bt-element"></div>
                    <div className="comp-element-1 endpoint-comp-element comp-element-1-active bt-element"></div>
                    <div className="comp-element-1 endpoint-comp-element comp-element-1-active bt-element"></div>
                    <div className="comp-element-1 endpoint-comp-element comp-element-1-active bt-element"></div>
                    <div className="comp-element-1 endpoint-comp-element comp-element-1-active bt-element"></div>
                    <div className="comp-element-1 endpoint-comp-element comp-element-1-active bt-element"></div>
                    <div className="comp-element-1 endpoint-comp-element comp-element-1-active bt-element"></div>
                    <div className="comp-element-1 endpoint-comp-element comp-element-1-active bt-element"></div>
                    <div className="comp-element-1 endpoint-comp-element comp-element-1-active bt-element"></div>
                    <div className="comp-element-1 endpoint-comp-element comp-element-1-active bt-element"></div>
                    <div className="comp-element-1 endpoint-comp-element comp-element-1-active bt-element"></div>
                    <div className="comp-element-1 endpoint-comp-element comp-element-1-active bt-element"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BottomSectionPanel