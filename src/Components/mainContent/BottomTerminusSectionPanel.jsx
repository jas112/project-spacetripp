import React, {useState, useEffect} from 'react'
import './styles/SectionPanel.css'
import './styles/TerminusSectionPanel.css'

const BottomTerminusSectionPanel = ({currentStatusBool}) => {

    const [activatePanel, setActivatePanel] = useState(currentStatusBool);

  return (
    <div className={`top-section-panel btm-terminus-panel  section-panel ${activatePanel ? 'active-terminus-section-panel' : ''}`}>
        <div className="section-selection-activation-bar">
            <div className={`activation-bar-segment-3-active ${activatePanel ? 'current-section' : ''}`}></div> 
            <div className="activation-bar-segment-4-active ele-bar"></div>
        </div>
        <div className="section-comp-detail-panel bottom-section-comp-detail-panel">
            <div className='section-comp-detail-element-spacer detail-spacer bottom-detail-spacer btm-ele-spacer'>
                <div className={`spacer-frame bottom-spacer-frame ${activatePanel ? 'active-spacer-frame' : ''}`}>

                    {[...Array(3)].map((_, idxSpacer) => (
                        <div key={idxSpacer} className={`spacer-element bottom-spacer ${activatePanel ? 'active-spacer' : ''}`}></div>
                    ))}
  
                </div>
            </div>
            <div className='section-comp-detail-element-frame element-frame'>
                <div className='section-comp-detail-element-frame-container bottom-eFrame terminus-eFrame'>

                    \\\\\\\\\\\\\\\

                </div>
            </div>
        </div>
    </div>
  )
}

export default BottomTerminusSectionPanel