import React from "react";
import classes from "../css/SubLayout.module.css";

const SubLayout = ({ children , style }) => {
  return (
    <div className={classes.main}>
      <div className={classes.bg}>
        <img
          src="/assets/images/background.png"
          alt="background"
          className={classes.image}
        />
      </div>
      <div className={classes.white_line} style={style}>
        <img
          src="/assets/images/WhiteLine.png"
          alt="white"
          className={classes.image}
        />
      </div>
      {children}
    </div>
  );
};

export default SubLayout;
