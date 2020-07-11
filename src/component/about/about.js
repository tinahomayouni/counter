import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from "../../container/header";
import "./about.scss"


let born = false;
function About() {

  const [Growth, setGrowth] = useState(0);
  const [Nirvana, setNirvana] = useState(false)
  useEffect(() => {
    if (born) {
      document.title = "Nirvana Achieved"
    }
  }, [Nirvana]) // its run when the onother state condition goes as well as 

  useEffect(() => {
    console.log("I'm born");
  }, []) //is mount for first time

  useEffect(() => {
    if (born) {
      console.log("Make mistake and learn"); // this run in every update
    } else {
      born = true
    }
    if (Growth > 75) {
      setNirvana(true);
    }
  })

  function growthHandeler() {
    setGrowth(Growth + 10); // if we want changin on state we do on setState
  }
  return (
    <>
      <Header>
        <nav className="header-about">
          <Link to="/home">Home</Link>
        </nav>
      </Header>
      <h2>Growth : {Growth}</h2>
      <p>growth over 75 and U will Achieve to Nirvana on title of browser</p>
      <button onClick={growthHandeler}>Growth</button>
      <p>ABOUT container</p>
    </>
  )
}
export default About;