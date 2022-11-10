import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch, faPerson, faMessage , faBell
} from "@fortawesome/free-solid-svg-icons"
import { Link, NavLink } from 'react-router-dom';
import './top.css'

const Top = () => {
  return (
    <div className='top'>
      <div className="topLeft">
        <h2 className='logo'><Link to='/'> Social App</Link></h2>
        <div className="topSearch">
          <input type="text" placeholder='Search' />
          <FontAwesomeIcon  icon={faSearch} />
        </div>
      </div>
      <div className="topMiddle">
          <div className="topLinks">
            <ul>
              <li><NavLink to='/' activeclassname="acive">Home</NavLink></li>
              <li><NavLink to='/friends' activeclassname="acive" >Friends</NavLink></li>
            </ul>
          </div>
      </div>
      <div className="topRight">
        <div className="notifications">
          <div className="notification">
            <FontAwesomeIcon  icon={faPerson}/>
            <span className="badge">1</span>
          </div>
          <div className="notification">
            <FontAwesomeIcon  icon={faMessage}/>
            <span className="badge">4</span>
          </div>
          <div className="notification">
            <FontAwesomeIcon  icon={faBell}/>
            <span className="badge">1</span>
          </div>
        </div>
        <div className="user">
          <Link to='/account'><img src="./assets/images/user/ja.png" alt="" className="userImage" /></Link>
          <span className='userLogout'>Logout</span>
        </div>
      </div>
    </div>
  )
}

export default Top