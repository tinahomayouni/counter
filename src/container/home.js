import React from 'react'
import Header from './header'
import { Link } from 'react-router-dom';
import Counter from '../component/counter/counter';
import "./home.scss"

function Home() {
  return (
    <div>
      <Header>
        <nav className="header">
          <Link to="/home">home</Link>
          <Link to="/counter">Counter</Link>
          <Link to="/about">About Use Effect & Use State</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/asyncAction">asyncAction</Link>
          <Link to="/contact-us">Contact Us</Link></nav>
      </Header>
      <Counter />
    </div>
  )
}
export default Home;
