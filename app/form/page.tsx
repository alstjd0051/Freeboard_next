"use client";

import React, { useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
  email: string;
  password: string;
  username: string;
}

const FormPage = () => {
  const { register, handleSubmit, watch } = useForm<LoginForm>({
    defaultValues: {},
  });
  const onValid = (data: LoginForm) => {};
  const onInvalid = (error: FieldErrors) => {
    console.log(error);
  };
  return (
    <div className="mx-auto py-10 ">
      <form
        onSubmit={handleSubmit(onValid, onInvalid)}
        className="flex flex-col items-center space-y-5  "
      >
        <input
          {...register("username", {
            required: "username is required",
            minLength: {
              message: "the username should be longere than 5 chart",
              value: 5,
            },
          })}
          type="text"
          placeholder="UserName"
        />{" "}
        <input
          {...register("email", { required: "email is required" })}
          type="email"
          placeholder="Email"
        />
        <input
          {...register("password", { required: "password is required" })}
          type="password"
          placeholder="Password"
        />
        {/* <input type="submit" value="Create Account" /> */}
        <input
          className="cursor-pointer"
          type="submit"
          value={"Create Account"}
        />
      </form>
    </div>
  );
};

export default FormPage;
