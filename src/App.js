import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './Home/Home';
import { About } from './About/About';
import { Contact } from './Contact/Contact';
import { NavBar } from './NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
