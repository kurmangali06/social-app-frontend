import React from 'react'

export const OnlineFriends = ({user}) => {
  return (
    <div className="onlineGroup">
      <div className="onlineGroupLeft">
        <img src={user?.profileImg} alt={user.username} className="onlineUserImage" />
        <div className="onlineBadge"></div>
      </div>
      <div className="onlineGroupRight">
        <span className="onlineUserName">{user.username}</span>
      </div>

    </div>
  )
}
