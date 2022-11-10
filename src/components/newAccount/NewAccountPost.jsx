import React from 'react'
import { posts } from '../../data'
import NewSingle from '../newSingleAccPost/NewSingle'
import { Share } from '../share/Share'

const newAccountPost = () => {
  return (
    <div className='nAPost'>
    <div className="nAShareDiv">
      <Share/>
      {posts.map(post=> (
        <NewSingle post={post} key={post.id}/>
      ))}
    </div>
  </div>
  )
}

export default newAccountPost