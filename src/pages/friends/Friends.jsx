import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Footer } from '../../components/footer/Footer'
import Top from '../../components/top/Top'
import './friends.css'
import { Users } from '../../data';
import MyFriends from '../../components/myFriends/MyFriends'

const Friends = () => {
  return (
    <div>
    <Top/>
    <div className="mainDiv">
      <div className="friends">
        <div className="friendsTop">
          <h3 className='friendsTitle'>All Friends</h3>
          <div className="topSearch">
          <input type="text" placeholder='Search' />
          <FontAwesomeIcon  icon={faSearch} />
        </div>
        </div>
        <div className="friendsMiddle">
          <div className="friendsGroups">
            {
              Users.map((user) =>  (
                <MyFriends key={user.id} user={user}/>
              ))
            }
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
  )
}

export default Friends