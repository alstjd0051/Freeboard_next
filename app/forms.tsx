"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

// Better validation
// Better Errors(set,clear,display)
// Have contorl over inputs

type Props = {};

const Forms = () => {
  const { register, handleSubmit } = useForm();
  const onValid = () => {
    console.log("Hello");
  };
  return (
    <form
      onSubmit={handleSubmit(onValid)}
      className="flex flex-col w-80 m-auto py-5 gap-2 border bg-gray-400 space-y-5  "
    >
      <input
        {...register("username", { required: true })}
        type="text"
        placeholder="Username"
      />
      <input
        {...register("email", { required: true })}
        type="email"
        placeholder="Email"
      />
      <input
        {...register("password", { required: true })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="Create Account" />
    </form>
  );
};

export default Forms;
