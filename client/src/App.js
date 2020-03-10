import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar'
import About from './Components/About'
import Education from './Components/Education'
import Skills from './Components/Skills'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'

import './App.css';

class App extends React.Component {


  render() {

    return (
      <div className="App overflow-hidden" >
        <NavBar />
        <About />
        <Education />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default App;
