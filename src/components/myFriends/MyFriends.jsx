import React from 'react'
import { Link } from 'react-router-dom'

const MyFriends = ({user}) => {
  return (
    <Link to='/user/:id'>
        <div className="friendsGroup">
        <img className='friendsImg' src={user.profileImg} alt={user.username} />
        <p className="friendsName">{user.username}</p>
        <button>Delete friends</button>
      </div>
  </Link>
  )
}

export default MyFriends