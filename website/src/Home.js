import React, { Component } from "react";
import { Card, Button } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CardMedia from "@material-ui/core/CardMedia"
import { withStyles } from "@material-ui/core/styles"
import ParallaxScroll from "./ParallaxScroll"
import LinkButton from "./LinkButton";
import zIndex from "@material-ui/core/styles/zIndex";

const styles = {
    media: {
        // ⚠️ object-fit is not supported by IE 11.
        objectFit: 'cover',
    },
    buttonStyle: {
        color: "white"
    }
};

class Home extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { classes } = this.props
        return (
            <div>
                <div style={{
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    position: "absolute",
                    top: "0px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    width: "100%"
                     
                }}>
                    <h1 style={{color: "white", zIndex: "2", fontSize: "50px"}}>Filmmaker Photographer Visionary</h1>
                </div>
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



                <ParallaxScroll style={{ height: "100vh" }} imgSrc={require("./img/mtn.jpg")}></ParallaxScroll>

                <Card style={{ height: "600px" }}></Card>
            </div>
        )

    }
}

export default withStyles(styles)(Home)
