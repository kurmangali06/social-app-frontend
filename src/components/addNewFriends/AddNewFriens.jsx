import React from 'react'
import { Link } from 'react-router-dom'

const AddNewFriens = ({user}) => {
  return (
    <Link to='/user/:id'>
    <div className="friendsGroup">
    <img className='friendsImg' src={user.profileImg} alt={user.username} />
    <p className="friendsName">{user.username}</p>
    <button>Add friends</button>
  </div>
</Link>
  )
}

export default AddNewFriens