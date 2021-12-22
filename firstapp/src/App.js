// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import About from './components/About'; 
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import { 
  BrowserRouter as Router,
  Route,
  Routes 
  } from 'react-router-dom'


//let nikhil = "Nikhil Taparia"

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type:type 
    })

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark Mode has been Enabled', 'success');
      // setInterval(() => {
      //   document.title = ' Winner';
      // }, 500);
      // setInterval(() => {
      //   document.title = ' Download';
      // }, 1000);
    }
    else{
      setMode( 'light')
      document.body.style.backgroundColor = '#a4aeda'
      showAlert('Light Mode has been Enabled', 'success');
    }
  }



  return (
    <>
    <Router>
      <Navbar title="TextFormator" mode ={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-4">
      <Routes>
        <Route exact path='/About' element={<About/>}/>
        <Route path='/' element={<Textform showAlert={showAlert} heading="Enter Text Below" mode ={mode}/>}/>
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
