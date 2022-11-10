import React from 'react'
import { Footer } from '../../components/footer/Footer'
import News from '../../components/news/News'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Top from '../../components/top/Top'
import './home.css'

const Home = () => {
  return (
    <div>
      <Top/>
      <div className="main-container">
        <Sidebar/>
        <News/>
        <Rightbar/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home