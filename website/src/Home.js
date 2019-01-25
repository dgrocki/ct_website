import React, { Component } from "react";
import { Card } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CardMedia from "@material-ui/core/CardMedia"
import { withStyles } from "@material-ui/core/styles"

const styles = {
    media: {
        // ⚠️ object-fit is not supported by IE 11.
        objectFit: 'cover',
    },
};

class Home extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { classes } = this.props
        return (
            <div>
                <Card style={{ backgroundColor: "white", height: "100%", width: "auto", boxShadow: "none"}}>
                    <AppBar position="sticky" style={{ backgroundColor: "rgba(0, 0, 0, 0)", position: "absolute", top: "0px", boxShadow: "none"}} >
                        <Toolbar style={{}}>
                            <div style={{ flexGrow: "1", float: "left", fontSize: "25px", color: "white" }}>Chase Tucker</div>
                        </Toolbar>
                    </AppBar>
                    <div style = {{maxHeight: "100vh", width: "auto"}}>

                    <div>
                        <img style={{overflow:"hidden", height: "100vh", width: "auto"}}
                            src={require("./img/mtn.jpg")}
                        />
                        </div>
                    </div>
                </Card>

                <Card style={{ height: "200px" }}>

                </Card>


            </div>
        )

    }
}

export default withStyles(styles)(Home)
