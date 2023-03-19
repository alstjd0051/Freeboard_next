"use client";

import React, { useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";

// Better validation
// Better Errors(set,clear,display)
// Have contorl over inputs

interface LoginForm {
  username: string;
  password: string;
  email: string;
}

const Forms = () => {
  const { register, handleSubmit } = useForm<LoginForm>();
  const onValid = (data: LoginForm) => {
    console.log("Hello");
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
  return (
    <form
      onSubmit={handleSubmit(onValid, onInvalid)}
      className="flex flex-col w-80 m-auto py-5 gap-2 border bg-gray-400 space-y-5  "
    >
      <input
        {...register("username", {
          required: "user is required",
          minLength: {
            message: "the username shold be longer than 5 chars",
            value: 5,
          },
        })}
        type="text"
        placeholder="Username"
      />
      <input
        {...register("email", { required: "email is required", minLength: 5 })}
        type="email"
        placeholder="Email"
      />
      <input
        {...register("password", {
          required: "password is required",
          minLength: 8,
        })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="Create Account" />
    </form>
  );
};

export default Forms;
