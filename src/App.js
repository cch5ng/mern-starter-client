import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Header from './app/header/Header'
import Footer from './app/footer/Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <Route exact path="/" render={() => (
            <div>main route placeholder</div>
          )} />

          <Route exact path="/login" render={() => (
            <div>login route placeholder</div>
          )} />

          <Route exact path="/password" render={() => (
            <div>forgot pwd route placeholder</div>
          )} />

          <Route exact path="/register" render={() => (
            <div>registration route placeholder</div>
          )} />



          <Footer />

        </div>
      </Router>
    );
  }
}

export default App;
