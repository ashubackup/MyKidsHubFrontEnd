import React from "react";
import classes from "../css/TopLogo.module.css";

const TopLogo = () => {
  return (
    <div className={classes.top_logo_container}>
      <img
        src="/assets/images/name.png"
        alt="name"
        className={classes.top_logo_image}
      />
    </div>
  );
};

export default TopLogo;
