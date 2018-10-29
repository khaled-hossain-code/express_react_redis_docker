import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Fib from './Fib';
import OtherPage from './OtherPage';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Link to="/">Home</Link>
            <Link to="/otherpage">Other Page</Link>
          </header>
          <div>
            <Route exact path="/" compoponent={Fib} />
            <Route path="/otherpage" compoponent={OtherPage} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
