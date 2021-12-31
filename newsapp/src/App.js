import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'


import './App.css';


export default class App extends Component {
   pageSize = 15;

  render() {
    return (
      <Router>
        <NavBar/>
        <Routes>
        <Route exact path='/' element={<News key='General' pageSize={this.pageSize} country="in" category="general" titleChange="Top Headlines"/>}/>
        <Route exact path='/business' element={<News key="business" pageSize={this.pageSize} country="in" category="business" titleChange="Business"/>}/>
        <Route exact path='/entertainment' element={<News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" titleChange="Entertainment"/>}/>
        <Route exact path='/health' element={<News key='health' pageSize={this.pageSize} country="in" category="health" titleChange="Health"/>}/>
        <Route exact path='/science' element={<News key='science' pageSize={this.pageSize} country="in" category="science" titleChange="Science"/>}/>
        <Route exact path='/sports' element={<News key='sports' pageSize={this.pageSize} country="in" category="sports" titleChange="Sports"/>}/>
        <Route exact path='/technology' element={<News key='technology' pageSize={this.pageSize} country="in" category="technology" titleChange="Technology"/>}/>
        
        </Routes>
      </Router>
    )
  }
}
