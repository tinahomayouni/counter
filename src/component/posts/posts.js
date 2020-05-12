import React, { useState, useEffect } from 'react';
import axios from 'axios'
import PostItem from './postItem';
import Header from '../../container/header';
import { Link } from 'react-router-dom';
import "./post.scss";

function Posts() {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log(res)
        setPosts(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
  console.log(posts);
  return (
    <>
      <Header>
        <nav className="header-about">
          <Link to="/">Home</Link>
        </nav>
      </Header>
      <ul>
        {posts.map((post, i) => {
          return <PostItem post={post} key={i} />
        })}
      </ul>
    </>
  )
}

export default Posts;
