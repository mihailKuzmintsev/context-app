import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Switch from "@material-ui/core/Switch";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/core/styles";
import classes from "*.module.sass";

export class Navbar extends Component {
  render() {
    return (
      <div className={classes.root}>
        <AppBar>
          <Toolbar>
            <IconButton>
              <span />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
