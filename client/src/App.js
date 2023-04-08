import axios from "axios";
import { useEffect } from "react";
import PostCreate from "./post/PostCreate";
import PostList from "./post/PostList";

function App() {
  
  return (
    <div className="container">
     <PostCreate/>
     <hr/>
     <PostList/>
    </div>
  );
}

export default App;
