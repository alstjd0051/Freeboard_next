"use client";

import React, { useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface LoginForm {
  email: string;
  password: string;
  username: string;
  error: string;
}

const FormPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: "onChange",
  });
  const router = useRouter();
  const onValid = (data: LoginForm) => {
    setError("error", { message: "서버와 연결이 끊어졌습니다." });
    reset();
  };
  const onInvalid = (error: FieldErrors) => {
    console.log(error);
  };
  console.log(errors);
  return (
    <div className="mx-auto py-10 ">
      <form
        onSubmit={handleSubmit(onValid, onInvalid)}
        className="flex flex-col items-center space-y-5  "
      >
        <div className="relative flex space-x-60 ">
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
            className="p-5 outline-none border-2 rounded-lg"
          />
          <span className="absolute flex-none w-full top-5  ">
            {errors.username?.message}
          </span>
        </div>
        <div className="relative flex space-x-60">
          <input
            {...register("email", {
              required: "이메일을 입력해주세요",
              validate: {
                notGmail: (value) =>
                  ((!value.includes("@gmail") || "Gemail을 입력해주세요") &&
                    !value.includes("@naver")) ||
                  "네이버메일은 안됩니다.",
              },
            })}
            type="email"
            placeholder="Email"
            className={`p-5 outline-none border-2 rounded-lg ${
              Boolean(errors.email?.message) ? "border-red-500" : ""
            }`}
          />
          <span className="absolute flex-none w-full top-5  ">
            {errors.email?.message}
          </span>
        </div>
        <div className="relative flex space-x-60">
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
            className="p-5 outline-none border-2 rounded-lg"
          />
          <span className="absolute flex-none w-full top-5  ">
            {errors.password?.message}
          </span>
        </div>
        {/* <input type="submit" value="Create Account" /> */}
        <input
          className="cursor-pointer"
          type="submit"
          value={"Create Account"}
        />
        <p className="">{errors.error?.message}</p>
      </form>
    </div>
  );
};

export default FormPage;
