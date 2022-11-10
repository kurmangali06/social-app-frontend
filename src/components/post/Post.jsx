import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './post.css'
import {  faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { Users } from '../../data';
import { useState } from 'react';

export const Post = ({post}) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like -1 : like +1 )
    setIsLiked(!isLiked)
  }


  return (
    <div className='post'>
      <div className="postGroups">
        <div className="postGroup">
          <div className="postCardHeader">
          <div className="postCardHeaderLeft">
            <img src={Users.filter((user) => user.id === post?.userId)[0].profileImg}alt="" className="postUserImg" />
              <div className="postInfo">
              <span className='postUserName'>{Users.filter((user) => user.id === post?.userId)[0].username}</span>
            <span className="postData">{post.date}</span>
              </div>
          </div>
            <div className="postCardHeaderRight">
              <FontAwesomeIcon icon={faEllipsis}/>
            </div>
          </div>
          <div className="postCardBody">
            <p className="postText">{post.decription}</p>
            <img src={post.image} className='postImg' alt="" />
          </div>
          <div className="postCardFooter">
          <div className="postCardFooterLeft">
            {isLiked ? (
              <><img src="./assets/images/icons/thumb-down.png" onClick={likeHandler} alt="" className='postIconsImg' />
              <img src="./assets/images/icons/like.png" onClick={likeHandler} alt="" className='postIconsImg' /></>
            ) : (
              <><img src="./assets/images/icons/thumb-up.png" onClick={likeHandler} alt="" className='postIconsImg' />
              <img src="./assets/images/icons/heart.png" onClick={likeHandler} alt="" className='postIconsImg' /></>
            )}
           
             
           
              <span className="postCounter">{like} people like it</span>
            </div>
            <div className="postCardFooterRight">
                <span className="postComments">
                  {post.comment} comments
                </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
