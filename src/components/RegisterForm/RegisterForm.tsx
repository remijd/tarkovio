import React from "react";
import * as Styles from "./RegisterForm.styles";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import { TextField, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const RegisterForm: React.FC = () => {
  const initialValues = {
    email: "",
    nickname: "",
    password: "",
    confirmPassword: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email address"),
    nickname: Yup.string()
      .required("Nickname is required")
      .min(5, "Nickname must be at least 5 characters"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<typeof initialValues>({
    resolver: yupResolver(validationSchema),
  });
  const submit = () => {
    alert("udało się");
  };
  const onerrror = () => {
    toast.error("Registration error");
  };
  return (
    <Styles.Form
      className="RegisterForm"
      onSubmit={handleSubmit(submit, onerrror)}
    >
      <Typography variant="h5" sx={{ textAlign: "center  " }}>
        <b>Sign up</b>
      </Typography>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            error={!!errors.email?.message}
            helperText={errors.email?.message}
            label="E-Mail"
            {...field}
          />
        )}
      />
      <Controller
        name="nickname"
        control={control}
        render={({ field }) => (
          <TextField
            error={!!errors.nickname?.message}
            helperText={errors.nickname?.message}
            label="Nickname"
            {...field}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextField
            type="password"
            error={!!errors.password?.message}
            helperText={errors.password?.message}
            label="Password"
            {...field}
          />
        )}
      />
      <Controller
        name="confirmPassword"
        control={control}
        render={({ field }) => (
          <TextField type="password" label="Confirm Password" {...field} />
        )}
      />
      <Button type="submit" variant="outlined">
        Register
      </Button>
    </Styles.Form>
  );
};

export default RegisterForm;
