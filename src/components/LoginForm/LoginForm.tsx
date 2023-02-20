import React from "react";
import * as Yup from "yup";
import * as Styles from "./LoginForm.styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const LoginForm: React.FC = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email address"),
    password: Yup.string().required("Password is required"),
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<typeof initialValues>({
    resolver: yupResolver(validationSchema),
  });
  const submit = () => {
    alert("git");
  };
  const onerror = () => {
    toast.error("Login error");
  };
  return (
    <Styles.Form onSubmit={handleSubmit(submit, onerror)}>
      <Typography variant="h5" sx={{ textAlign: "center  " }}>
        <b>Log in</b>
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
        name="password"
        control={control}
        render={({ field }) => (
          <TextField
            error={!!errors.password?.message}
            helperText={errors.password?.message}
            type="password"
            label="Password"
            {...field}
          />
        )}
      />
      <Button type="submit" variant="outlined">
        Log in
      </Button>
    </Styles.Form>
  );
};
export default LoginForm;
