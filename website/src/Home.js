import React, { Component } from "react";
import { Card, Button } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CardMedia from "@material-ui/core/CardMedia"
import { withStyles } from "@material-ui/core/styles"
import ParallaxScroll from "./ParallaxScroll"
import LinkButton from "./LinkButton";
import zIndex from "@material-ui/core/styles/zIndex";
import MediaCard from "./MediaCard";
import ComplexButton from "./ComplexButton";
import ParallaxButton from "./ParallaxButton";
import ParallaxLinkButton from "./ParallaxLinkButton";

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
                    <h1 style={{ color: "white", zIndex: "2", fontSize: "50px" }}>Filmmaker Photographer Visionary</h1>
                </div>



                <ParallaxScroll imgSrc={require("./img/Home_Landscape.jpeg")} viewPort="100vh" imgHeight="1100px"></ParallaxScroll>

                <Card style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ padding: "30px" }}>
                        <h1 style={{ fontSize: "40px" }}>Amazing Title</h1>
                    </div>
                    <div style={{ display: "flex", padding: "20px", width: "100%", justifyContent: "center" }}>
                        <div style={{ flex: "1", padding: "20px 40px 10px 40px", display: "flex", justifyContent: "center" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                        <div style={{ flex: "1", display: "flex", justifyContent: "center", padding: "20px 20px 10px 10px", height: "100%" }}>
                            <div style={{ minWidth: "350px" }}>
                                {/*<MediaCard style ={{width: "100%", height: "100%", display: "inlineBlock"}} imgSrc={require("./img/Home_img1.jpeg")}></MediaCard>
                            */}
                                <img style={{ maxWidth: "100%" }} src={require("./img/Home_img1.jpeg")}></img>
                            </div>
                        </div>
                    </div>
                </Card>


                <Card>

                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <div style={{ padding: "30px" }}>
                            <h1 style={{ fontSize: "40px" }}>My Work</h1>
                        </div>
                    </div>
                    <ParallaxLinkButton to="/Projects"></ParallaxLinkButton>
                </Card>

                <Card style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ padding: "30px" }}>
                        <h1 style={{ fontSize: "40px" }}>Amazing Title</h1>
                    </div>
                    <div style={{ display: "flex", padding: "20px", width: "100%", justifyContent: "center" }}>
                        <div style={{ flex: "1", display: "flex", justifyContent: "center", padding: "20px 20px 10px 10px", height: "100%" }}>
                            <div style={{ minWidth: "350px" }}>
                                {/*<MediaCard style ={{width: "100%", height: "100%", display: "inlineBlock"}} imgSrc={require("./img/Home_img1.jpeg")}></MediaCard>
                            */}
                                <img style={{ maxWidth: "100%" }} src={require("./img/27042.jpeg")}></img>
                            </div>
                        </div>
                        <div style={{ flex: "1", padding: "20px 40px 10px 40px", display: "flex", justifyContent: "center" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                </Card>
                <Card style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ padding: "30px" }}>
                        <h1 style={{ fontSize: "40px" }}>Amazing Title</h1>
                    </div>
                    <div style={{ display: "flex", padding: "20px", width: "100%", justifyContent: "center" }}>
                        <div style={{ flex: "1", display: "flex", justifyContent: "center", padding: "20px 20px 10px 10px", height: "100%" }}>
                            <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                                <iframe src="https://player.vimeo.com/video/316706461" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                            </div>
                        </div>
                        <div style={{ flex: "1", padding: "20px 40px 10px 40px", display: "flex", justifyContent: "center" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                    </div>
                </Card>
                <Card style={{ height: "100vh" }}>

                </Card>

            </div>
        )

    }
}

export default withStyles(styles)(Home)
