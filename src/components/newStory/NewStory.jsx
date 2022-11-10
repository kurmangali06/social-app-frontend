import React from 'react'
import { Users } from '../../data'

export const NewStory = ({s}) => {
  return (
    <div key={s.is} className="storyGroup">
          <div className="storyDiv">
            <div className="storyUserAddImgDiv">
            <img src={Users.filter((user) => user.id === s?.userId)[0].profileImg} alt="" className='storyUserAddImg' />
            </div>
            <div className="storyUser">
                <img src={s?.image} alt="" />
              </div>
              <div className="storyUserTitle">
                <h5>{Users.filter((user) => user.id === s?.userId)[0].username}</h5>
              </div>
          </div>
        </div>
  )
}
