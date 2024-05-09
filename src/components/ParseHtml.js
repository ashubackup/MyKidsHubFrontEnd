import React from "react";
import classes from "../css/ParseHtml.module.css";

const ParseHTML = ({ html }) => {
  return <div className={classes.style} dangerouslySetInnerHTML={{ __html: html }} />;
};

export default ParseHTML;