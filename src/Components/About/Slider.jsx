import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: 200,
    },
    title: {
      color: "#c6c9d8bf !important",
      width: "100%",
      fontFamily: "Poppins !important",
      fontSize: "1.5vw !important",
      [theme.breakpoints.down("md")]: {
        fontSize: "1.5vw !important",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "2.5vw !important",
      },
    },
  })
);

export default function ContinuousSlider({ title, silderColor, value }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} id="continuous-slider" gutterBottom>
        {title}
      </Typography>
      <Slider
        style={{ color: silderColor }}
        value={value}
        aria-labelledby="continuous-slider"
      />
    </div>
  );
}
