import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/FormStyles";

export class Form extends Component {
  render() {
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <Paper>
          <Avatar>
            
          </Avatar>
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(Form);
