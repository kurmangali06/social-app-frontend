import React from 'react'
import { Footer } from '../../components/footer/Footer'
import OCover from '../../components/oCover/OCover'
import ONewAccout from '../../components/oNewAccount/ONewAccout'
import ORightBar from '../../components/ORightBar/ORightBar'
import OTop from '../../components/oTop/OTop'
import './oUserProfile.css'

const OUserProfile = () => {
  return (
    <div>
    <OTop/>
    <div className="main-container d-flex">
        <OCover/>
      <div className="nADiv">
        <ONewAccout/>
        <ORightBar/>
      </div>
    </div>
    <Footer/>
  </div>
  )
}

export default OUserProfile