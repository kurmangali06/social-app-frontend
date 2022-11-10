import React from 'react'
import { posts } from '../../data'
import ONewSingle from '../ONewSingle/ONewSingle'
import { OShare } from '../OShare/OShare'

const ONewAccout = () => {
  return (
    <div className='nAPost'>
    <div className="nAShareDiv">
      <OShare/>
      {posts.map(post=> (
        <ONewSingle post={post} key={post.id}/>
      ))}
    </div>
  </div>
  )
}

export default ONewAccout