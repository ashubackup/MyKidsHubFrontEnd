import React, { useEffect, useState } from "react";
import MainLayout from "../components/MainLayout";
import TopLogo from "../components/TopLogo";
import HeaderTitle from "../components/HeaderTitle";
import classes from "../css/ProfilePage.module.css";
import SubscriptionInfo from "../components/SubscriptionInfo";
import Footer from "../components/Footer";
import { packInfoApi, unsubApi } from "../http/http";
import TopLines from "../components/TopLines";
import SubLayout from "../components/SubLayout";
import { useNavigate } from "react-router-dom";
import { getCookie, removeCookie } from "../utils/helper";
import InfoModal from "../components/InfoModal";
import { toast } from "react-toastify";
import Loader from "../components/Loader";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [packinfo, setPackinfo] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchPackInfo = async () => {
    try {
      setLoading(true);
      const response = await packInfoApi(getCookie("msisdn"));
      setPackinfo(response?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(
        error?.response?.data?.message ||
          error?.data?.message ||
          error?.message ||
          error
      );
    }
  };
  useEffect(() => {
    fetchPackInfo();
  }, []);

  const closeModal = () => {
    setModal(false);
  };
  const unsubhandle = async () => {
    const msisdn = getCookie("msisdn");
    try {
      const response = await unsubApi({ ani: msisdn });
      navigate("/login");
      removeCookie();
    } catch (error) {
      removeCookie();
      navigate("/login");
    }
  };

  const navigateHandler = () => {
    navigate("/setAge");
  };

  return (
    <MainLayout>
      <TopLines />
      <TopLogo />
      <HeaderTitle title="Profile" />
      {loading ? (
        <Loader />
      ) : (
        <>
          <SubscriptionInfo packinfo={packinfo} />
          <div className={classes.line}></div>
          <div className={classes.btn_container}>
            <button className={classes.btn} onClick={navigateHandler}>
              Continue Playing
            </button>
          </div>
          <div className={classes.padding}>
            <div className={classes.unsubscribe_container}>
              <div className={classes.image_text_container}>
                <img
                  src="/assets/images/cat.png"
                  alt="cat"
                  className={classes.cat}
                />
                <div className={classes.text_container}>
                  <h3 className={classes.text}>Unsubscribe</h3>
                  <p className={classes.p}>
                    It’s free and fun to learn on MyKidzHub!
                  </p>
                </div>
              </div>
              <button
                className={`${classes.btn} ${classes.btn2}`}
                // onClick={() => unsubhandle()}
                onClick={() => setModal(true)}
              >
                UNSUBSCRIBE
              </button>
            </div>
          </div>
          {modal && (
            <InfoModal closeModal={closeModal} unsubhandle={unsubhandle} />
          )}
        </>
      )}
      <Footer active={1} />
    </MainLayout>
  );
};

export default ProfilePage;
