import React, { useState } from 'react';
import axios from 'axios';
const PostCreate = () => {
    const [title, settitle] = useState('');

    const submitHandler = async(e) =>{
        e.preventDefault();
    title&& await axios.post("http://localhost:5000/posts",{title})
        settitle('');
    }
    
  return (
    <div>
        <h1>Create Post</h1>
        <form className='form-group' onSubmit={submitHandler}>
            <div className='mt-3 mb-3'>
                <label>Title</label>
                <input value={title} className='form-control' onChange={(e)=>settitle (e.target.value)} />
            </div>
            <button className='btn btn-primary'>Submit</button>
        </form>
    </div>
  )
}

export default PostCreate