import { faLocation, faPhotoFilm, faSmile, faTag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './oshare.css'


export const OShare = () => {
  return (
    <div className='share'>
      <div className="shareGroups">
        <div className="shareGroup">
          <div className="shareGroupLeft">
            <img src="../assets/images/user/ja.png" alt="" />
          </div>
          <div className="shareGroupRight">
            <input type="text" placeholder='What do you think about , Kurmangali ?' />
          </div>
        </div>
        <div className="shareGroup">
          <div className="shareGroupIcons">
            <div className="shareGroupIcon">
              <FontAwesomeIcon icon={faPhotoFilm}/>
              <span className="iconTitle">Photo or Video</span>
            </div>
            <div className="shareGroupIcon">
              <FontAwesomeIcon icon={faTag}/>
              <span className="iconTitle">Tags</span>
              </div>
              <div className="shareGroupIcon">
              <FontAwesomeIcon icon={faLocation}/>
              <span className="iconTitle">Location</span>
              </div>
              <div className="shareGroupIcon">
              <FontAwesomeIcon icon={faSmile}/>
              <span className="iconTitle">Feelings</span>
              </div>
          </div>
          <div className="shareGroupShareBtn">
            <button>Share</button>
          </div>
        </div>
      </div>
    </div>
  )
}
