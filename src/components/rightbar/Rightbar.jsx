import React from 'react'
import { Users } from '../../data'
import { OnlineFriends } from '../onlineFriends/OnlineFriends'
import './rightbar.css'

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <h4 className='online'>Online Friends</h4>
      <div className="onlineGroups">
      {Users.map((user) => (
        <OnlineFriends user={user} key={user.id}/>
      ))}
       
      </div>
    </div>
  )
}

export default Rightbar