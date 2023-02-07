import React from "react";
import { Grid, makeStyles, Badge } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  box: {
    background: "white",
    width: 200,
    height: 230,
    borderRadius: 16,
    marginRight: 16,
    padding: 8,
    minWidth: 200,
    // [theme.breakpoints.down("sm")]: {
    //   height: "100%",
    // },
  },
}));
export default function BlogPostsCard(props) {
  const classes = useStyles();
  return (
    <div
      className={classes.box}
      style={{
        width: props.width || 200,
        height: props.height || 268,
        minWidth: props.width || 200,
        marginTop: props.marginTop || "",
        marginRight: props.boxMarginRight || 16,
        cursor: "pointer",
      }}
      onClick={() => {
        if (props.onClick) {
          props.onClick();
        }
      }}
    >
      <div
        style={{
          backgroundImage: `url(${props.image})`,
          height: props.imageHeight || 135,
          borderRadius: 16,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <p
        style={{
          fontWeight: "bold",
          marginTop: 10,
          marginBottom: 0,
          fontSize: 10,
          // marginLeft: 3,
        }}
      >
        {props.heading}
      </p>
      <div>
        <p
          style={{
            // fontWeight: "bold",
            marginTop: 4,
            marginBottom: 0,
            color: "black",
            fontSize: 10,
            opacity: 0.5,
            // marginLeft: 3,
            height: 70,
          }}
        >
          {props.description}
        </p>
      </div>

      <div className="d-flex justify-content-between mt-3">
        <small
          style={{
            // fontWeight: "bold",
            marginTop: -15,
            marginBottom: 0,
            // marginLeft: 3,
            color: "black",
            opacity: "70%",
            fontSize: 10,
          }}
        >
          {props.footerLeft}
        </small>
        <small
          style={{
            // fontWeight: "bold",
            fontSize: 10,
            marginTop: -15,
            marginBottom: 0,
            color: "black",
            opacity: "70%",
          }}
        >
          {props.footerRight}
        </small>
      </div>
      {/* <p style={{ color: "red", margin: 0 }}> Left: 18:07:24</p>
      <p style={{ color: "#7b7b7b", margin: 0 }}>Participants: 41/100</p> */}

      {/* <Grid container direction="row" style={{ marginTop: 10 }}>
        <Badge
          badgeContent={
            <img
              src={verified}
              style={{ marginLeft: -5, marginBottom: -5 }}
            ></img>
          }
        >
          <img src={Avatar} style={{ width: 50, height: 50 }}></img>
        </Badge>
        <div style={{ widht: "80%" }}>
          <p
            style={{
              fontWeight: "bold",
              margin: 0,
              marginLeft: 10,
              fontSize: 16,
            }}
          >
            {props.heading}
          </p>
          <p
            style={{
              margin: 0,
              marginLeft: 10,
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            500K
          </p>
        </div>
        <p
          style={{
            width: "100%",
            margin: 0,
            marginLeft: 10,
            fontSize: 14,
            fontWeight: 500,
            color: "#cdcdcd",
          }}
        >
          Posted On : a month ago
        </p>
      </Grid> */}
    </div>
  );
}
