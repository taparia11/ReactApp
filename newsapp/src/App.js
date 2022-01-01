import React, {useState} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'


import './App.css';
 

export default function App () {
   let pageSize = 15;
   let apiKey = "7fad0c0d80714e99b458b2c602716dbb"
  //  apiKey = "f97bdaf5b38c1143dbd503873ece9987"
  //  apiKey = process.env.REACT_APP_NEWS_API

  

   const [progress, setProgress] = useState(0)

    return (
      <Router>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Routes>
        <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey} key='General' pageSize={pageSize} country="in" category="general" titleChange="Top Headlines"/>}/>
        <Route exact path='/election' element={<News setProgress={setProgress} apiKey={apiKey} key="election" pageSize={pageSize} country="in" category="election" titleChange="Election"/>}/>
        <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="in" category="business" titleChange="Business"/>}/>
        <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment" titleChange="Entertainment"/>}/>
        <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey} key='health' pageSize={pageSize} country="in" category="health" titleChange="Health"/>}/>
        <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey} key='science' pageSize={pageSize} country="in" category="science" titleChange="Science"/>}/>
        <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} key='sports' pageSize={pageSize} country="in" category="sports" titleChange="Sports"/>}/>
        <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} key='technology' pageSize={pageSize} country="in" category="technology" titleChange="Technology"/>}/>
        
        </Routes>
      </Router>
    )
  
}
