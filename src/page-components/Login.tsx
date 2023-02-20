import ButtonAppBar from "@/components/AppBar";
import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import * as Styles from "../components/StyledComponents";

const Login = () => {
  return (
    <>
      <ButtonAppBar />
      <Styles.MainDiv>
        <LoginForm />
      </Styles.MainDiv>
    </>
  );
};
export default Login;
