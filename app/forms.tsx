"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";

// Less code
// Better validation
// Better Errors(set,clear,display)
// Have contorl over inputs
// Dont deal with evetnts
// Easier Inputs

type Props = {};

const Forms = () => {
  const { register, watch } = useForm();
  return (
    <form className="flex flex-col">
      <input {...register("username")} type="text" placeholder="Username" />
      <input {...register("email")} type="email" placeholder="Email" />
      <input {...register("password")} type="password" placeholder="Password" />
      <input type="submit" value="Create Account" />
    </form>
  );
};

export default Forms;
