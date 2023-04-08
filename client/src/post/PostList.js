import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CommentCreate from '../comment/CommentCreate'
import CommentList from '../comment/CommentList'

const PostList = () => {
    const [posts, setposts] = useState({})

    useEffect(() => {
      const fetchPosts = async()=>{
        const res = await axios.get("http://localhost:5002/posts");
        setposts(res.data);
      }
       fetchPosts();

      }, [])

  return (
    <div>
        <h1>PostList</h1>
        <div className='d-flex flex-row flex-wrap justify-content-between'>
        {Object.values(posts).map((post) => (
          <div className='card' style={{width:'30%'}} key={post.id}>
          <div className='card-body'>
            <p>Post ID: {post.id}</p>
            <h3>Title: {post.title}</h3>
            <CommentCreate postId={post.id}/>
            <CommentList  comments={post.comments} />
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default PostList