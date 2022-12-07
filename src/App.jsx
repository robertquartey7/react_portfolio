import React from "react";
import './App.css'
import Navbar from "./component/Navbar/Navbar";
import Home from './component/Landing_page/Home'
import About from "./component/About/About";
import Projects from './component/Projects/Projects'
import Contact from "./component/Contact/Contact";
import Footer from './component/Footer/Footer'
function App() {
  return (
    <div className="body">
      <div>
      <Navbar></Navbar>
      </div>
     
      <div className="bg__color">
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
