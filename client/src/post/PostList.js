import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CommentCreate from '../comment/CommentCreate'
import CommentList from '../comment/CommentList'

const PostList = () => {
    const [posts, setposts] = useState({})

    useEffect(() => {
      const fetchPosts = async()=>{
        const res = await axios.get("http://localhost:5000/posts");
        setposts(res.data);
      }
       fetchPosts();

      }, [])

  return (
    <div>
        <h1>PostList</h1>
        <div className='d-flex flex-row flex-wrap justify-content-between'>
        {Object.values(posts).map((post) => (
          <div className='card' style={{width:'30%'}} key={post.postId}>
          <div className='card-body'>
            <p>Post ID: {post.postId}</p>
            <h3>Title: {post.title}</h3>
            <CommentCreate postId={post.postId}/>
            <CommentList  postId={post.postId} />
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default PostList