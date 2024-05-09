import React, { useEffect, useState } from "react";
import { getCookie } from "../utils/helper";
import { useNavigate } from "react-router-dom";

const Auth = ({ children }) => {
  const navigate = useNavigate();
  const [value,setValue]=useState(()=>getCookie("msisdn"));
  useEffect(() => {
    // const value = getCookie("msisdn");
    if (!value) {
      navigate("/login");
    }
  }, [value]);
  return <div>{children}</div>;
};

export default Auth;
