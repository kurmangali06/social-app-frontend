import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Users } from '../../data';
import './newsingle.css'

const NewSingle = ({post}) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like -1 : like +1 )
    setIsLiked(!isLiked)
  }
  return (
    <div className='nsap'>
    <div className="nsapGroups">
      <div className="nsapGroup">
        <div className="nsapCardHeader">
        <div className="nsapCardHeaderLeft">
          <img src={Users.filter((user) => user.id === post?.userId)[0].profileImg}alt="" className="nsapUserImg" />
            <div className="nsapInfo">
            <span className='nsapUserName'>{Users.filter((user) => user.id === post?.userId)[0].username}</span>
          <span className="nsapData">{post.date}</span>
            </div>
        </div>
          <div className="nsapCardHeaderRight">
            <FontAwesomeIcon icon={faEllipsis}/>
          </div>
        </div>
        <div className="nsapCardBody">
          <p className="nsapText">{post.decription}</p>
          <img src={post.image} className='postImg' alt="" />
        </div>
        <div className="nsapCardFooter">
        <div className="nsapCardFooterLeft">
          {isLiked ? (
            <><img src="./assets/images/icons/thumb-down.png" onClick={likeHandler} alt="" className='nsapIconsImg' />
            <img src="./assets/images/icons/like.png" onClick={likeHandler} alt="" className='nsapIconsImg' /></>
          ) : (
            <><img src="./assets/images/icons/thumb-up.png" onClick={likeHandler} alt="" className='nsapIconsImg' />
            <img src="./assets/images/icons/heart.png" onClick={likeHandler} alt="" className='nsapIconsImg' /></>
          )}
         
           
         
            <span className="nsapCounter">{like} people like it</span>
          </div>
          <div className="nsapCardFooterRight">
              <span className="nsapComments">
                {post.comment} comments
              </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default NewSingle