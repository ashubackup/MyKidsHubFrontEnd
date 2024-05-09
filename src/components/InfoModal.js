import React from "react";
import classes from "../css/InfoModal.module.css";

const InfoModal = ({ closeModal, unsubhandle }) => {
  return (
    <div className={classes.container}>
      <div className={classes.modal}>
        <div className={classes.danger_image}>
          <img
            src="/assets/images/warning.png"
            alt="warning"
            className={classes.danger}
          />
        </div>
        <div className={classes.info}>
          <p className={classes.text}>
            Are you sure , You want to unsubscribe from MyKidzHub ?
          </p>
        </div>
        <div className={classes.btns_container}>
          <button type="button" className={classes.btn} onClick={unsubhandle}>
            Yes
          </button>
          <button
            type="button"
            className={`${classes.btn} ${classes.no}`}
            onClick={closeModal}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
