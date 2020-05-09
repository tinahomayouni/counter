import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from "../../container/header";


let born = false;
function About() {

  const [Growth, setGrowth] = useState(0);
  useEffect(() => {
    console.log("I'm born");
  }, []) //is mount for first time

  useEffect(() => {
    if (born) {
      console.log("Make mistake and learn"); // this run in every update
    } else {
      born = true
    }
  })

  function growthHandeler() {
    setGrowth(Growth + 10); // if we want changin on state we do on setState
  }
  return (
    <>
      <Header>
        <nav className="header-about">
          <Link to="/">Home</Link>
        </nav>
      </Header>
      <h2>Growth : {Growth}</h2>
      <button onClick={growthHandeler}>Growth</button>
      <p>ABOUT container</p>
    </>
  )
}
export default About;