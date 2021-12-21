// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

//let nikhil = "Nikhil Taparia"

function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
    }
    else{
      setMode( 'light')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      <Navbar title="TextFormator" mode ={mode} toggleMode={toggleMode}/>
      <div className="container my-4">
      {/* <About/> */}
      <Textform heading="Enter Text Below" mode ={mode}/>
      </div>
    </>
  );
}

export default App;
