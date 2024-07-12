import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/LinkButtonTile.css'

const LinkButtonTile = ({ linkData, linkBtnTileType }) => {

    const isLinkBtnTypeA = linkBtnTileType == 'A';

    const generateLinkBtnTile = () => {
        if(isLinkBtnTypeA){
            return(
                <div className='link-button-tile-A'>
                    <a className='link-button-tile-text' href={linkData.url} title={linkData.title}>
                        {linkData.linkText}
                    </a>
                </div>
            );
        }else{
            return(
                <div className='link-button-tile-shell'>
                    <div className='link-button-tile-B' title={linkData.title}>
                        <div className='icon-frame'>
                            <a href={linkData.url} className='link-button-tile-link'>
                                <FontAwesomeIcon icon={linkData.icon} className="icon" size='2x' />
                            </a>
                        </div>
                    </div>
                </div>
            );
        }
    }

  return (
    <React.Fragment>
        {generateLinkBtnTile()}
    </React.Fragment>
  )
}

export default LinkButtonTile