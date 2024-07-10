import React, {useState, useEffect} from 'react'
import { useInView } from 'react-intersection-observer'
import TopTerminusSectionPanel from './TopTerminusSectionPanel'
import BottomSectionPanel from './BottomSectionPanel'
import BottomTerminusSectionPanel from './BottomTerminusSectionPanel'
import {generateText} from '../../utils/contentTools.jsx'
import './styles/SectionPanel.css'
import './styles/TerminusSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons'



const TerminusSection = ({sectionTitle, sectionSubtitle, sectionNfo, sectionMarker, currentPageLocation, hasGallery, galleryType, galleryImages, sectionLinks}) => {

    const [currentStatusBool, setCurrentStatusBool] = useState(false);
    const [activateSectionMinor, setActivateSectionMinor] = useState(false);

    const hasGalleryBool = hasGallery === 'true';
    // console.log(`${sectionMarker} has a gallery: ${hasGalleryBool} ||| ${hasGallery}`);

    const {ref, inView } = useInView({
        triggerOnce: false, // keep observing SectionElement
        threshold: 0.2, // trigger when 10% of the element is in view
    });

    useEffect(() => {

        setCurrentStatusBool(sectionMarker == currentPageLocation);

    }, [currentPageLocation])

    useEffect(() => {

        let timer;
        if (currentStatusBool) {

            timer = setTimeout(() => {
                setActivateSectionMinor(true);
            }, 100);

        }else{
            setActivateSectionMinor(false);
        }

        return () => {
            clearTimeout(timer);
        }

      }, [currentStatusBool]);

  return (
    <div id={sectionMarker} ref={ref} className={`full-section-config floating ${inView ? 'fade-in' : 'fade-out'}`}>
        <div className='terminus-console-frame-outer'>
            <TopTerminusSectionPanel currentStatusBool={currentStatusBool} />
            <div className='terminus-hdr-frame'>
                <div className="ftr-txt-title ftr-main-title">{sectionTitle}</div>
            </div>
            <div className='terminus-console-frame-inner'>
                <div className='terminus-console-panel terminus-console-panel-A'>
                    <div className='terminus-avatar-frame'>
                        <div className='terminus-avatar' style={{backgroundImage: `url(${galleryImages[0].image})`}}></div>
                    </div>
                    <div className='terminus-end-msg-frame'>
                        <div className='terminus-end-msg'>
                            {generateText(sectionNfo,'sectionNfo', sectionMarker)}
                        </div>
                    </div>
                </div>
                <div className='terminus-console-panel terminus-console-panel-B'>
                    <div className='terminus-console-panel-indicator'></div>
                    <div className='terminus-console-panel-button-A'>
                        <a className='terminus-console-panel-button-text' href='www.cartoonbrew.com' target='_blank' rel='noopener noreferrer'>Email Me</a>
                    </div>
                    <div className='terminus-console-panel-button-A'>
                        <a className='terminus-console-panel-button-text' href='www.cartoonbrew.com' target='_blank' rel='noopener noreferrer'>Resume</a>
                    </div>
                    <div className='terminus-console-panel-button-B-frame'>
                        <div className='terminus-console-panel-button-shell'>
                            <div className='terminus-console-panel-button-B' title='My LinkedIn'>
                                <div className='icon-frame'>
                                    <FontAwesomeIcon icon={faLinkedinIn} className="icon linkedin" size='2x' />
                                </div>
                            </div>
                        </div>
                        <div className='terminus-console-panel-button-shell'>
                            <div className='terminus-console-panel-button-B' title='My Github Portal'>
                                <div className='icon-frame'>
                                    <FontAwesomeIcon icon={faGitAlt} className="icon linkedin" size='2x' />
                                </div>
                            </div>
                        </div>
                        <div className='terminus-console-panel-button-shell'>
                            <div className='terminus-console-panel-button-B' title='My Cargocollective Site'>
                                <div className='icon-frame'>
                                    <FontAwesomeIcon icon={faBolt} className="icon linkedin" size='2x' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='terminus-console-panel-indicator'></div>
                </div>
            </div>
            <BottomTerminusSectionPanel currentStatusBool={currentStatusBool} /> 
        </div>
    </div>

  )
}

export default TerminusSection