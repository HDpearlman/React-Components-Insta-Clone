// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  console.log(`csc comments`, props.comments)
  const [dataComment , setDataComment] = useState(props.comments)

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {dataComment.map(item =>{
      return <Comment comment={item}/>})}
      <CommentInput changeComment={setDataComment}/>
    </div>
  );
};

export default CommentSection;
