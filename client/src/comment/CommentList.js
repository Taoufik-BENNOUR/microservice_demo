import axios from 'axios';

const CommentList = ({comments}) => {


  return (
    <div>
      {comments && comments.map((el)=><li key={el.id}> {el.content} </li>)}
    </div>
  )
}

export default CommentList