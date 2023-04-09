import "./comment.css"

const CommentList = ({comments}) => {

  const Button = ({status}) =>{
    return <button className={`button ${status}`} >{status}</button>
  }

  return (
    <div>
      {comments && comments.map((el)=><li key={el.id}> {el.content} status : <Button status={el.status} /> </li>)}
    </div>
  )
}

export default CommentList