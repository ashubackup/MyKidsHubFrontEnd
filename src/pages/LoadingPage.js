import React, { useEffect } from "react";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";

const LoadingPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      navigate("/login");
    }, 1500);

    return () => {
      clearTimeout(timeout2);
    };
  }, []);
  return <Loading />;
};

export default LoadingPage;
