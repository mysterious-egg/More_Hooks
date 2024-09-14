import './App.css'
import Posts from './Posts'
import React, { useState, useReducer, useRef} from 'react';


export const Action_Type = {
  Add_Post : "add-post",
  Toggle : "toggle"
};
function App() {
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState("");
  const inputRef = useRef();
 

  function reducer(posts, action){
    switch (action.type){
      case Action_Type.Add_Post:
        return [
          ...posts, {id :Date.now(), name : action.payload.name, toggle : true }
        ];
      case Action_Type.Toggle:
        return posts.map(post => 
          post.id === action.payload.id ?{...post, toggle : !post.toggle} : post
        );
        default : return posts;
    }
  }

  function highlight(){
    inputRef.current.focus();
  }


  function handleSubmit(e){
    e.preventDefault();
    dispatch({type : Action_Type.Add_Post, payload : {name : title}});
    setTitle("");
  }


  return (
    <>
      <div>
        <form onSubmit={handleSubmit} >
          <input ref= {inputRef} type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>

        </form>
        {state.map((post)=>(
          <Posts key = {post.id} post = {post} dispatch = {dispatch} />
        ))}
      </div>
    </>
  )
}

export default App
