import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Post from './pages/Post';
import Project from './pages/Project';


class App extends Component {
  render() {
    return (
      <div className="my-app">
        <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link exact to="/" class="nav-link" href="/">Home <span class="sr-only">(current)</span></Link>
              </li>
              <li class="nav-item">
                <Link to="/about" class="nav-link">About</Link>
              </li>
              <li class="nav-item">
                <Link to="/posts" class="nav-link">Post</Link>
              </li>
              <li class="nav-item">
                <Link to="/projects" class="nav-link">Project</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="App container">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/posts" component={Post} />
          <Route path="/projects" component={Project} />
        </div>
      </div>
    );
  }
}

export default App;
