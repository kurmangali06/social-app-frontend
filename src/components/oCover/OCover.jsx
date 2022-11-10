import React from 'react'

const OCover = () => {
  return (
    <div className="accountDiv">
    <div className="accountCover">
      <img src="../assets/images/account/1.jpg" alt="" />
      </div>
      <div className="accountInfo">
        <div className="accountInfoLeft">
          <img src="../assets/images/user/ja.png" alt="" />
        </div>
        <div className="accountInfoRight">
          <h3 className='userName'>Kurmangali</h3>
          <span className='userFriends'>friends: 6</span>
          <div className="friends">
            <img src="../assets/images/user/1.jpg" alt="" />
            <img src="../assets/images/user/2.jpg" alt="" />
            <img src="../assets/images/user/3.jpg" alt="" />
            <img src="../assets/images/user/4.jpg" alt="" />
            <span className='dots'> ...</span>
            <button className='unfriend'>Unfriend</button>
            </div>
        </div>
      </div>
  </div>
  )
}

export default OCover