import React, { Fragment } from "react";
import randomcolor from "randomcolor";
import faker from "faker";
import Avatar from "@material-ui/core/Avatar";
import data from "./data.json";
import { makeStyles } from "@material-ui/core/styles";
import TrackChangesOutlinedIcon from "@material-ui/icons/TrackChangesOutlined";
import CircularProgressWithLabel from "./CircularStatic";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  palette: {
    primary: {
      main: "#42a5f5",
    },
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
}));

const Card = (props) => {
  const levelColor = randomcolor();
  const classes = useStyles();
  return (
    <ul>
      {props.data.map((item) => (
        <Fragment key={item.name}>
          <li>
            <div className="card">
              <div className="card-body">
                <TrackChangesOutlinedIcon
                  style={{ height: "50px", width: "50px" }}
                />
                <h4>{faker.company.bs()}</h4>
                <p>{new Date().toDateString()}</p> <CircularProgressWithLabel />
              </div>
              <div className="card-footer" style={{ background: levelColor }}>
                <Avatar className={classes.avatar}></Avatar>
              </div>
              <div></div>
            </div>
            {item.children?.length && <Card data={item.children} />}
          </li>
        </Fragment>
      ))}
    </ul>
  );
};

const Chart = () => {
  return (
    <div className="org-tree">
      <Card data={data} />
    </div>
  );
};

export default Chart;
