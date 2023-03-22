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
              message: "3글자이상 입력해주세요",
              value: 3,
            },
          })}
          type="text"
          placeholder="UserName"
        />{" "}
        <input
          {...register("email", {
            required: "email is required",
            validate: {
              notGmail: (value) =>
                (value.includes(".com") || "mail을 입력해주세요") &&
                (!value.includes("gmail.com") || "Gmail은 입력안됩니다."),
            },
          })}
          type="email"
          placeholder="Email"
        />
        <input
          {...register("password", {
            required: "password is required",
            minLength: {
              message: "너무짧습니다 최소 8글자이상",
              value: 8,
            },
          })}
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
