import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CommentCreate = ({postId}) => {
    const [content, setcontent] = useState('')
    const submitHandler = async(e) =>{
        e.preventDefault();
        try {
            await axios.post(`http://localhost:5001/posts/${postId}/comments`,{content})
            setcontent('');
            
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <div className='form-group'>
                <label>New Comment</label>
                <input value={content} className='form-control' onChange={(e)=>setcontent(e.target.value)} />
            </div>
            <button className='btn btn-secondary'>comment</button>
        </form>
    </div>
  )
}

export default CommentCreate