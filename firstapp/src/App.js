// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

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
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark Mode has been Enabled', 'success');
    }
    else{
      setMode( 'light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode has been Enabled', 'success');
    }
  }
  return (
    <>
      <Navbar title="TextFormator" mode ={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-4">
      {/* <About/> */}
      <Textform showAlert={showAlert} heading="Enter Text Below" mode ={mode}/>
      </div>
    </>
  );
}

export default App;
