import React from "react";
import "./styles.css";
import Chart from "./chart";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
export default function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <div className={classes.root}>
        <Button variant="contained" color="primary">
          Compact
        </Button>
        <Button variant="contained" color="primary">
          Medium
        </Button>
        <Button variant="contained" color="primary">
          Relaxed
        </Button>
      </div>

      <div className="container">
        <Chart />
      </div>
    </div>
  );
}
