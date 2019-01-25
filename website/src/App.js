import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import LinkButton from "./LinkButton"
import logo from './logo.svg';
import './App.css';
import Home from "./Home"


const Projects = () => <h2>Users</h2>;
const About= () => <h2>Users</h2>;
const Resume = () => <h2>Users</h2>;
const Contact= () => <h2>Users</h2>;


const AppRouter = () => (
  <div>
    <Router>
      <div>
        
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/projects/" component={Projects} />
        <Route path="/resume/" component={Resume} />
        <Route path="/contact/" component={Contact} />
      </div>
    </Router>
  </div>
);
export default AppRouter;