import React from 'react';
import { Action_Type } from "./App";

export default function Posts({post, dispatch}) {
  return (
    <>
    <div>
      {post?.toggle?<h2>{post.name}</h2>: <h2>Content is hidden</h2>}
    </div>
    <button onClick={()=>post && dispatch({type : Action_Type.Toggle, payload : {id : post.id}})}>Toggle</button>
    </>
  )
}


