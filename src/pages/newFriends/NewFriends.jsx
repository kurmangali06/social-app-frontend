import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import AddNewFriens from '../../components/addNewFriends/AddNewFriens'
import { Footer } from '../../components/footer/Footer'
import MyFriends from '../../components/myFriends/MyFriends'
import Top from '../../components/top/Top'
import { Users } from '../../data'
import './newfriends.css'

export const NewFriends = () => {
  return (
    <div>
    <Top/>
    <div className="mainDiv">
      <div className="friends">
        <div className="friendsTop">
          <h3 className='friendsTitle'>People you may know</h3>
          <div className="topSearch">
          <input type="text" placeholder='Search' />
          <FontAwesomeIcon  icon={faSearch} />
        </div>
        </div>
        <div className="friendsMiddle">
          <div className="friendsGroups">
            {
              Users.map((user) =>  (
                <AddNewFriens key={user.id} user={user}/>
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
