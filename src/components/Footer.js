import React from "react";
import classes from "../css/Footer.module.css";
import { useNavigate } from "react-router-dom";

const Footer = ({active}) => {
  const navigate = useNavigate();
  const navigateHandler = (path) => {
    navigate(path);
  };
  return (
    <div className={classes.footer_container}>
      <div className={classes.footer_sub_container}>
        <div className={classes.tab} onClick={()=>navigateHandler("/setAge")}>
          <i
            className={`fa-solid fa-house-chimney ${classes.icon} ${active==0 && classes.active}`}
          ></i>
        </div>
        <div className={classes.tab} onClick={()=>navigateHandler("/profile")}>
          <i className={`fa-solid fa-user ${classes.icon} ${active==1 && classes.active}`}></i>
        </div>
        <div className={classes.tab} 
        onClick={()=>navigateHandler("/menu")}
        >
          <i className={`fa-solid fa-bars ${classes.icon} ${active==2 && classes.active}`}></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
