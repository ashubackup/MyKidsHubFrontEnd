import React, { useEffect } from "react";
import Layout from "../components/Layout";
import classes from "../css/IntroPage.module.css";
import { useNavigate } from "react-router-dom";
import TopLines from "../components/TopLines";
import SubLayout from "../components/SubLayout";

const IntroPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/loading");
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return (
    <Layout style={{maxHeight:"100dvh"}}>
      <TopLines />
      <SubLayout style={{top:'-5rem'}}>

        <div className={classes.logo_container}>
          <img src="/assets/images/name.png" alt="logo" />
        </div>
        <div className={classes.green_line}>
          <img src="/assets/images/green_line.png" alt="green line" />
        </div>

        <div className={classes.cartoon_container}>
          <img src="/assets/images/cartoon3.png" alt="cartoon" />
        </div>

         <div className={classes.blob_1}>
          <img src="/assets/images/blob_small.png" alt="cartoon" />
        </div>

        <div className={classes.blob_2}>
          <img src="/assets/images/blob_large.png" alt="cartoon" />
        </div>  
      </SubLayout>
    </Layout>
  );
};

export default IntroPage;
