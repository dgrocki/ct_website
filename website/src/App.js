import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CardMedia from "@material-ui/core/CardMedia"
import { withStyles } from "@material-ui/core/styles"
import ParallaxScroll from "./ParallaxScroll"
import zIndex from "@material-ui/core/styles/zIndex";
import LinkButton from "./LinkButton"
import logo from './logo.svg';
import './App.css';
import Home from "./Home"


const Projects = () => <h2>Users</h2>;
const About= () => <h2>Users</h2>;
const Resume = () => <h2>Users</h2>;
const Contact= () => <h2>Users</h2>;

const styles = {
    media: {
        // ⚠️ object-fit is not supported by IE 11.
        objectFit: 'cover',
    },
    buttonStyle: {
        color: "white"
    }
};

class AppRouter extends Component{
  render(){
const { classes } = this.props

    return(
  <div>
    <Router>
      <div>
                <AppBar position="sticky" style={{ backgroundColor: "rgba(0, 0, 0, 0)", position: "absolute", top: "0px", boxShadow: "none" }} >
                    <Toolbar style={{}}>
                        <div style={{ flexGrow: "1", float: "left", fontSize: "25px", color: "white" }}>Chase Tucker</div>
                        <div>
                            <LinkButton to="/About" className={classes.buttonStyle}>About</LinkButton>
                            <LinkButton to="/Projects" className={classes.buttonStyle}>Projects</LinkButton>
                            <LinkButton to="/Contact" className={classes.buttonStyle}>Contact</LinkButton>
                        </div>
                    </Toolbar>
                </AppBar>
        
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/projects/" component={Projects} />
        <Route path="/resume/" component={Resume} />
        <Route path="/contact/" component={Contact} />
      </div>
    </Router>
  </div>
);
    }
}
export default withStyles(styles)(AppRouter);