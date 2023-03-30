import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import LoginUI from "../../layout/Login";
import useForm from "./useForm";

export const LoginComponent = () => {
  return <LoginUI form={useForm()} />;
};

