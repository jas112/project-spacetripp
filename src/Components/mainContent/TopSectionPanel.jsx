import React from 'react'
import './styles/SectionElement.css'
import './styles/SectionPanel.css'

const TopSectionPanel = () => {
  return (
    <div className='top-section-panel section-panel'>
        <div className="section-comp-detail-panel top-section-comp-detail-panel">
            <div className='section-comp-detail-element-frame element-frame'>
                <div className='section-comp-detail-element-frame-container top-eFrame'>
                    <div className="comp-element-1 endpoint-comp-element comp-element-1-active tp-element"></div>
                    <div className="comp-element-1 endpoint-comp-element comp-element-1-active tp-element"></div>
                    <div className="comp-element-1 endpoint-comp-element comp-element-1-active tp-element"></div>
                    <div className="comp-element-1 endpoint-comp-element comp-element-1-active tp-element"></div>
                    <div className="comp-element-1 endpoint-comp-element comp-element-1-active tp-element"></div>
                    <div className="comp-element-1 endpoint-comp-element comp-element-1-active tp-element"></div>
                    <div className="comp-element-1 endpoint-comp-element comp-element-1-active tp-element"></div>
                    <div className="comp-element-1 endpoint-comp-element comp-element-1-active tp-element"></div>
                    <div className="comp-element-1 endpoint-comp-element comp-element-1-active tp-element"></div>
                    <div className="comp-element-1 endpoint-comp-element comp-element-1-active tp-element"></div>
                </div>
            </div>
            <div className='section-comp-detail-element-spacer detail-spacer top-detail-spacer'>
                <div className="spacer-frame top-spacer-frame">
                    <div className="panel-spacer-element top-spacer"></div>
                    <div className="panel-spacer-element top-spacer"></div>
                    <div className="panel-spacer-element top-spacer"></div>
                </div>
            </div>
        </div>
        <div className="section-selection-activation-bar">
            <div className="activation-bar-segment-2-active"></div>
            <div className="activation-bar-segment-1-active"></div>
            {/* <div className="activation-bar-segment-2-active"></div> */}
        </div>
    </div>
  )
}

export default TopSectionPanel