import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={ <News key="general" pageSize={10} category='general' country='in' />} />
            <Route exact path="/business" element={ <News key="business" pageSize={10} category='business' country='in' /> }/>
            <Route exact path="/entertainment" element={ <News key="entertainment" pageSize={10} category='entertainment' country='in' /> }/>
            <Route exact path="/general" element={ <News key="general" pageSize={10} category='general' country='in' /> }/>
            <Route exact path="/science" element={ <News key="science" pageSize={10} category='science' country='in' /> }/>
            <Route exact path="/health" element={ <News key="health" pageSize={10} category='health' country='in' /> }/>
            <Route exact path="/sports" element={ <News key="sports" pageSize={10} category='sports' country='in' /> }/>
            <Route exact path="/technology" element={ <News key="technology" pageSize={10} category='technology' country='in' /> }/>
          </Routes>
        </Router>
      </div>
    )
  }
}


