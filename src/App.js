import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import Footer from './container/footer';
import './assets/css/style.scss';


function App() {
  return (
    <>
      <Router>
        <Routes />
      </Router>
      <Footer />
    </>
  );
}

export default App;
