//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data";



const PostsPage = () => {
  // set up state for your data
 
  return (
    <div className="posts-container-wrapper">
      {dummyData.map( (item) => {
       return <Post post={item}/>
      })}
    </div>
  );
};

export default PostsPage;
