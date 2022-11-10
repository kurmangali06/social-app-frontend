import React from 'react'
import { Users } from '../../data'

import { OOnlineFriends } from '../OonlineFriends/OOnlineFriends'

const ORightBar = () => {
  return (
    <div className='rightbar'>
    <h4 className='online'>Online Friends</h4>
    <div className="onlineGroups">
    {Users.map((user) => (
      <OOnlineFriends user={user} key={user.id}/>
    ))}
     
    </div>
  </div>
  )
}

export default ORightBar