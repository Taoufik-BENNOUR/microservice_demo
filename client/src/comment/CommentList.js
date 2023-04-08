import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CommentList = ({postId}) => {
    const [comments, setcomments] = useState([]);

    useEffect(() => {
        const fetchComments = async()=>{
          const res = await axios.get(`http://localhost:5001/posts/${postId}/comments`);
            setcomments(res.data)
        }
        fetchComments();
      }, [])
  return (
    <div>
      {comments && comments.map((el)=><li key={el.id}> {el.content} </li>)}
    </div>
  )
}

export default CommentList