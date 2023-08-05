import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <News/>
      </div>
    )
  }
}

// api_key = 3ceaacf6ef2b4897a552e5a3166168b6

