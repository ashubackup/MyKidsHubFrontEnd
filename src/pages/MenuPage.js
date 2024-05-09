import React, { useEffect, useState } from "react";
import TopLogo from "../components/TopLogo";
import HeaderTitle from "../components/HeaderTitle";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import TopLines from "../components/TopLines";
import SubLayout from "../components/SubLayout";
import classes from "../css/MenuPage.module.css";
import { toast } from "react-toastify";
import { questionsApi, termsApi } from "../http/http";
import ParseHTML from "../components/ParseHtml";

const MenuPage = () => {
  const [showAbout, setShowAbout] = useState(true);
  const [showTerms, setShowTerms] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);
  const [terms, setTerms] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTerms = async () => {
    try {
      const response = await termsApi();
      setTerms(response?.data?.response?.data);
    //   console.log(response, "response.....");
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          error?.data?.message ||
          error?.message ||
          error
      );
    }
  };

  const fetchQuestions = async () => {
    try {
      const response = await questionsApi();
      setQuestions(response?.data?.response?.data);
    //   console.log(response, "response2.....");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  useEffect(() => {
    fetchTerms();
    fetchQuestions();
  }, []);

  const handleAboutClick = () => {
    setShowAbout((prevValue) => !prevValue);
    setShowTerms(false);
    setShowQuestions(false);
  };

  const handleTermsClick = () => {
    setShowTerms((prevValue) => !prevValue);
    setShowAbout(false);
    setShowQuestions(false);
  };
  const handleQuestionsClick = () => {
    setShowQuestions((prevValue) => !prevValue);
    setShowTerms(false);
    setShowAbout(false);
  };

  return (
    <Layout>
      <TopLines />
      <SubLayout>
        <TopLogo />
        <HeaderTitle title="Information" />
        <div className={classes.accordian} onClick={handleAboutClick}>
          <div className={classes.accordian_nav}>
            <div className={classes.nav_container}>
              <div className={classes.nav_sub_container}>
                <div className={classes.white_box}></div>
                <div className={classes.title}>
                  <p className={classes.title}>About MyKidzHub</p>
                </div>
              </div>
              <div className={classes.arrow}>
                {showAbout ? (
                  <i className={`fa-solid fa-chevron-up ${classes.icon}`}></i>
                ) : (
                  <i className={`fa-solid fa-chevron-down ${classes.icon}`}></i>
                )}
              </div>
            </div>
            <div className={classes.underline_container}>
              <div className={classes.underline}></div>
            </div>
          </div>
          <div
            className={`${classes.accordian_details} ${
              showAbout && classes.show
            }`}
          >
            <p className={classes.text}>
              Discover the joy of learning and play on MyKidzHub, a free and fun
              platform designed for kids aged 1 to teenagers.
            </p>
            <p className={classes.text}>
              From toddlers exploring shapes to teenagers diving into advanced
              topics, MyKidzHub offers interactive experiences tailored to every
              stage of childhood development.
            </p>
            <p className={classes.text}>
              Join the MyKidzHub community today and embark on a journey of
              discovery and growth together with your child.
            </p>
          </div>
        </div>

        <div className={classes.accordian} onClick={handleTermsClick}>
          <div className={classes.accordian_nav}>
            <div className={classes.nav_container}>
              <div className={classes.nav_sub_container}>
                <div className={classes.white_box}></div>
                <div className={classes.title}>
                  <p className={classes.title}>Terms & Conditions</p>
                </div>
              </div>
              <div className={classes.arrow}>
                {showTerms ? (
                  <i className={`fa-solid fa-chevron-up ${classes.icon}`}></i>
                ) : (
                  <i className={`fa-solid fa-chevron-down ${classes.icon}`}></i>
                )}
              </div>
            </div>
            <div className={classes.underline_container}>
              <div className={classes.underline}></div>
            </div>
          </div>
          <div
            className={`${classes.accordian_details} ${
              showTerms && classes.show
            }`}
          >
            <ParseHTML html={terms} />
          </div>
        </div>

        <div
          className={`${classes.accordian} ${classes.accordian_last}`}
          onClick={handleQuestionsClick}
        >
          <div className={classes.accordian_nav}>
            <div className={classes.nav_container}>
              <div className={classes.nav_sub_container}>
                <div className={classes.white_box}></div>
                <div className={classes.title}>
                  <p className={classes.title}>Frequently Asked Questions</p>
                </div>
              </div>
              <div className={classes.arrow}>
                {showQuestions ? (
                  <i className={`fa-solid fa-chevron-up ${classes.icon}`}></i>
                ) : (
                  <i className={`fa-solid fa-chevron-down ${classes.icon}`}></i>
                )}
              </div>
            </div>
            <div className={classes.underline_container}>
              <div className={classes.underline}></div>
            </div>
          </div>
          <div
            className={`${classes.accordian_details} ${
              showQuestions && classes.show
            }`}
          >
            <ParseHTML html={questions} />
          </div>
        </div>

        <Footer active={2} />
      </SubLayout>
    </Layout>
  );
};

export default MenuPage;
