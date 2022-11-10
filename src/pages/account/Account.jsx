import React from 'react';
import Cover from '../../components/cover/Cover';
import { Footer } from '../../components/footer/Footer';
import NewAccountPost from '../../components/newAccount/NewAccountPost'
import Rightbar from '../../components/rightbar/Rightbar';
import Top from '../../components/top/Top';
import './account.css'

const Account = () => {
  return (
    <div>
    <Top/>
    <div className="main-container d-flex">
        <Cover/>
      <div className="nADiv">
        <NewAccountPost/>
        <Rightbar/>
      </div>
    </div>
    <Footer/>
  </div>
  )
}

export default Account