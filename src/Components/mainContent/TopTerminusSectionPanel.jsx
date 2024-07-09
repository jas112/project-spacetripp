import React, {useState, useEffect} from 'react'
import './styles/SectionPanel.css'
import './styles/TerminusSectionPanel.css'

const TopTerminusSectionPanel = ({currentStatusBool}) => {

    const [activatePanel, setActivatePanel] = useState(false);

  return (
    <div className={`top-section-panel tp-terminus-panel  section-panel ${activatePanel ? 'active-terminus-section-panel' : ''}`}>
        <div className="section-comp-detail-panel top-section-comp-detail-panel">
            <div className='section-comp-detail-element-frame element-frame'>
                <div className='section-comp-detail-element-frame-container top-eFrame terminus-eFrame'>

                    ///////////////////

                </div>
            </div>
            <div className='section-comp-detail-element-spacer detail-spacer top-detail-spacer'>
                <div className={`spacer-frame top-spacer-frame ${activatePanel ? 'active-spacer-frame' : ''}`}>

                    {[...Array(3)].map((_, idxSpacer) => (
                        <div key={idxSpacer} className={`spacer-element top-spacer ${activatePanel ? 'active-spacer' : ''}`}></div>
                    ))}

                </div>
            </div>
        </div>
        <div className="section-selection-activation-bar">
            <div className="activation-bar-segment-1-active"></div>
            <div className={`activation-bar-segment-2-active ${activatePanel ? 'current-section' : ''}`}></div>
        </div>
    </div>
  )
}

export default TopTerminusSectionPanel