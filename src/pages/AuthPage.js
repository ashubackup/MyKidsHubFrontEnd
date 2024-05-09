import React from "react";
import Layout from "../components/Layout";
import TopLines from "../components/TopLines";
import SubLayout from "../components/SubLayout";
import TopLogo from "../components/TopLogo";
import classes from "../css/Auth.module.css";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../utils/helper";

const AuthPage = () => {
  const navigate=useNavigate();
  const navigateHandler=()=>{
    console.log("userId in age group",getCookie("userId"))
    navigate("/setAge");
  }
  return (
    <Layout>
      <TopLines />
      <SubLayout>
        <TopLogo />
        <div className={classes.success_container}>
          <div className={classes.circle}>
            <i className={`fa-solid fa-check ${classes.icon}`}></i>
          </div>

          <h3 className={classes.title}>Success!</h3>
          <p className={classes.description}>
            Congratulations! You have been successfully authenticated
          </p>
          <button type="button" className={classes.continue_btn} onClick={navigateHandler}>
            Continue
          </button>
        </div>
        <div className={classes.footer_container}>
          <div className={classes.footer_sub_container}>
            <img
              src="/assets/images/econet_logo.png"
              alt="econet"
              className={classes.footer}
            />
            <p className={classes.footer_text}>
              By clicking subscribe, you have read, understood and agree to be
              bound by the MyKidzHub service’s Terms & Conditions and FAQ’s
            </p>
          </div>
        </div>
      </SubLayout>
    </Layout>
  );
};

export default AuthPage;
