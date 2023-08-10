import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {
  pageSize=15

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <Router>
        <LoadingBar
          color='#088F8F'
          height={3}
          progress={this.state.progress}
          loaderSpeed={300}
          onLoaderFinished={this.setProgress}
        />
          <NavBar />
          <Routes>
            <Route exact path="/" element={ <News setProgress={this.setProgress} key="general" pageSize={this.pageSize} category='general' country='in' />} />
            <Route exact path="/business" element={ <News setProgress={this.setProgress} key="business" pageSize={this.pageSize} category='business' country='in' /> }/>
            <Route exact path="/entertainment" element={ <News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} category='entertainment' country='in' /> }/>
            <Route exact path="/general" element={ <News setProgress={this.setProgress} key="general" pageSize={this.pageSize} category='general' country='in' /> }/>
            <Route exact path="/science" element={ <News setProgress={this.setProgress} key="science" pageSize={this.pageSize} category='science' country='in' /> }/>
            <Route exact path="/health" element={ <News setProgress={this.setProgress} key="health" pageSize={this.pageSize} category='health' country='in' /> }/>
            <Route exact path="/sports" element={ <News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} category='sports' country='in' /> }/>
            <Route exact path="/technology" element={ <News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} category='technology' country='in' /> }/>
          </Routes>
        </Router>
      </div>
    )
  }
}


