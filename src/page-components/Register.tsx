import ButtonAppBar from "@/components/AppBar";
import RegisterForm from "@/components/RegisterForm/RegisterForm";
import React from "react";
import * as Styled from "../components/StyledComponents";

const Register = () => {
  return (
    <>
      <ButtonAppBar />
      <Styled.MainDiv>
        <RegisterForm />
      </Styled.MainDiv>
    </>
  );
};
export default Register;
