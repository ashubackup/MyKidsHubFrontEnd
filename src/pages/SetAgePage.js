import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import Layout from "../components/Layout";
import TopLines from "../components/TopLines";
import SubLayout from "../components/SubLayout";
import TopLogo from "../components/TopLogo";
import classes from "../css/SetAgePage.module.css";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { getCookie } from "../utils/helper";

const SetAgePage = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const images = [
  //     "../staticImages/parent_bg1.jpg",
  //     "../staticImages/parent_bg2.jpg",
  //     "../staticImages/parent_bg3.jpg",
  //   ];
  //   let loadedImages = 0;

  //   const loadImage = (imagePath) => {
  //     const tempImage = new Image();
  //     tempImage.onload = () => {
  //       loadedImages++;
  //       if (loadedImages === images.length) {
  //         setLoading(false);
  //       }
  //     };
  //     tempImage.src = imagePath;
  //   };

  //   images.forEach((image) => {
  //     loadImage(image);
  //   });
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const navigateHandler = (age) => {
    const msisdn = getCookie("userId");
    console.log("smsi",msisdn);
    if (!msisdn) {
      navigate("/login");
    } else {
      // // navigate(`/https://games.itslearnable.co/?msisdn=${msisdn}&age=${age}`);
      // window.location.href = `https://kids.itslearnable.co/?userId=${msisdn}&age=${age}`;
      // Create a form element
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://kids.itslearnable.co/api/authorize/kids'; // Target URL

      // Add hidden input fields for userId and age
      const userIdInput = document.createElement('input');
      userIdInput.type = 'hidden';
      userIdInput.name = 'userId';  
      userIdInput.value = msisdn;
      form.appendChild(userIdInput);

      const ageInput = document.createElement('input');
      ageInput.type = 'hidden';
      ageInput.name = 'age';
      ageInput.value = age;
      form.appendChild(ageInput);

      // Append the form to the document body and submit it
      document.body.appendChild(form);
      form.submit();
    }
  };
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Layout>
          <TopLines />
          <SubLayout>
            <TopLogo />
            <div className={classes.title_container}>
              <h3 className={classes.title}>Hello Parent</h3>
              <p className={classes.text}>
                Which age group does your kid fall under?
              </p>
            </div>
            <div className={classes.main_container}>
              <div
                className={classes.card_1}
                onClick={() => navigateHandler(1)}
              >
                <div className={classes.play_btn}>
                  <i className={`fa-solid fa-play ${classes.icon}`}></i>
                </div>
                <div className={classes.card_description}>
                  <p className={classes.age}>1-6 Years</p>
                  <p className={classes.name}>Tiny Tots</p>
                </div>
              </div>

              <div
                className={classes.card_2}
                onClick={() => navigateHandler(2)}
              >
                <div className={classes.play_btn}>
                  <i className={`fa-solid fa-play ${classes.icon}`}></i>
                </div>
                <div className={classes.card_description}>
                  <p className={classes.age}>7-12 Years</p>
                  <p className={classes.name}>Preteens</p>
                </div>
              </div>

              <div
                className={classes.card_3}
                onClick={() => navigateHandler(3)}
              >
                <div className={classes.play_btn}>
                  <i className={`fa-solid fa-lock ${classes.icon}`}></i>
                </div>
                <div className={classes.card_description}>
                  <p className={classes.age}>13+ Years</p>
                  <p className={classes.name}>Teens</p>
                </div>
              </div>
            </div>

            <Footer active={0} />
          </SubLayout>
        </Layout>
      )}
    </>
  );
};

export default SetAgePage;
