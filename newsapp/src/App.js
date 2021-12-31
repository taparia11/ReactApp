import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'


import './App.css';


export default class App extends Component {
   pageSize = 15;
   apiKey = process.env.REACT_APP_NEWS_API

   state = {
     progress:0
   }

   setProgress = (progress)=>{
    this.setState({progress:progress})
   }


  render() {
    return (
      <Router>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Routes>
        <Route exact path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='General' pageSize={this.pageSize} country="in" category="general" titleChange="Top Headlines"/>}/>
        <Route exact path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business" titleChange="Business"/>}/>
        <Route exact path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" titleChange="Entertainment"/>}/>
        <Route exact path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='health' pageSize={this.pageSize} country="in" category="health" titleChange="Health"/>}/>
        <Route exact path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='science' pageSize={this.pageSize} country="in" category="science" titleChange="Science"/>}/>
        <Route exact path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='sports' pageSize={this.pageSize} country="in" category="sports" titleChange="Sports"/>}/>
        <Route exact path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='technology' pageSize={this.pageSize} country="in" category="technology" titleChange="Technology"/>}/>
        
        </Routes>
      </Router>
    )
  }
}
