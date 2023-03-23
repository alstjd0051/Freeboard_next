"use client";
import Button from "@/components/commons/items/button";
import Input from "@/components/commons/items/input";
import useMutation from "@/components/commons/libs/client/useMutation";
import { cls } from "@/components/commons/libs/client/utils";
import { NextPage } from "next";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";

type Props = {};
interface EnterFormn {
  email?: string;
  phone?: string;
}

const EnterPage: NextPage = (props: Props) => {
  const [enter, { loading, data, error }] = useMutation("/api/users/enter");
  const [submittion, setSubmittion] = useState(false);
  const { register, reset, handleSubmit } = useForm<EnterFormn>();
  const [method, setMethod] = useState<"email" | "phone">("email");
  const onEmailClick = () => {
    reset();
    setMethod("email");
  };
  const onPhoneClick = () => {
    reset();
    setMethod("phone");
  };
  const onValid = (data: EnterFormn) => {
    enter(data);
  };
  return (
    <div className="h-screen  ">
      <div className="mt-16 px-4 w-1/2 mx-auto ">
        <h3 className="text-3xl font-bold text-center ">Enter to Carrot</h3>
        <div className="mt-16">
          <div className="flex flex-col items-center">
            <h5 className="text-sm text-gray-500 font-medium ">Enter using:</h5>
            <div className="grid border-b   w-full grid-cols-2 gap-16 mt-8 ">
              <button
                className={cls(
                  "pb-4 font-medium border-b-2 ",
                  method === "email"
                    ? "  border-orange-500 text-orange-400"
                    : "border-transparent text-gray-500 "
                )}
                onClick={onEmailClick}
              >
                Email
              </button>
              <button
                className={cls(
                  "pb-4 font-medium border-b-2 ",
                  method === "phone"
                    ? "  border-orange-500 text-orange-400"
                    : "border-transparent text-gray-500 "
                )}
                onClick={onPhoneClick}
              >
                Phone
              </button>
            </div>
          </div>
          <form onSubmit={handleSubmit(onValid)} className="flex flex-col mt-8">
            <label
              htmlFor="input"
              className="text-sm font-medium text-gray-700  "
            >
              {method === "email" ? (
                <Input
                  register={register("email", { required: true })}
                  name="email"
                  label="Email address"
                  type="email"
                  required
                />
              ) : null}
              {method === "phone" ? (
                <Input
                  register={register("phone", { required: true })}
                  name="phone"
                  label="Phone number"
                  type="number"
                  kind="phone"
                  required
                />
              ) : null}
            </label>
            <button className="mt-5 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none ">
              {method === "email" ? <Button text="Get login link" /> : null}
              {method === "phone" ? (
                <Button
                  text={submittion ? "Loading" : "Get one-time password"}
                />
              ) : null}
            </button>
          </form>
          <div className="mt-8">
            <div className="relative">
              <div className="absolute w-full border-t border-gray-300 " />
              <div className="relative -top-3 text-center  ">
                <span className="bg-white px-2 text-sm text-gray-500">
                  Or enter with
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-2 ">
              <button className="flex justify-center items-center py-2 px-4 border border-gray-300 shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 rounded-md ">
                <AiOutlineTwitter className="w-5 h-5" />
              </button>
              <button className="flex justify-center items-center py-2 px-4 border border-gray-300 shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 rounded-md ">
                <AiFillGithub className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterPage;
