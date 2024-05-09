import React from "react";
import classes from "../css/SubscriptionInfo.module.css";
import { getCookie } from "../utils/helper";

const SubscriptionInfo = ({ packinfo }) => {
  return (
    <div className={classes.subscription_container}>
      <div className={classes.subscription_sub_container}>
        <div className={classes.number_pack_container}>
          <h3 className={classes.number}>{getCookie("msisdn")}</h3>
          <div className={classes.icon_pack_container}>
            <i className={`fa-solid fa-clock ${classes.icon}`}></i>
            <p className={classes.pack}>Subscribed to {packinfo} Package</p>
          </div>
        </div>
        <div className={classes.avatar_container}>
          <img
            src="/assets/images/cartoon2.png"
            alt=""
            className={classes.avatar}
          />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionInfo;
