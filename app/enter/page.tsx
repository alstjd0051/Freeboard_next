"use client";
import { NextPage } from "next";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";

type Props = {};
interface EnterFormn {
  email?: string;
  phone?: string;
}

const cls = (...calssname: string[]) => {
  return calssname.join(" ");
};

const EnterPage: NextPage = (props: Props) => {
  const { register } = useForm<EnterFormn>();
  const [method, setMethod] = useState<"email" | "phone" | "board">("email");
  const onEmailClick = () => setMethod("email");
  const onPhoneClick = () => setMethod("phone");
  const onBoardClick = () => setMethod("board");
  return (
    <div className="h-screen  ">
      <div className="mt-16 px-4 w-1/2 mx-auto ">
        <h3 className="text-3xl font-bold text-center ">Enter to Carrot</h3>
        <div className="mt-16">
          <div className="flex flex-col items-center">
            <h5 className="text-sm text-gray-500 font-medium ">Enter using:</h5>
            <div className="grid border-b   w-full grid-cols-3 gap-16 mt-8 ">
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
              <button
                className={cls(
                  "pb-4 font-medium border-b-2 ",
                  method === "board"
                    ? "  border-orange-500 text-orange-400"
                    : "border-transparent text-gray-500 "
                )}
                onClick={onBoardClick}
              >
                Board
              </button>
            </div>
          </div>
          <form className="flex flex-col mt-8">
            <label className="text-sm font-medium text-gray-700  ">
              {method === "email" ? "Email address" : null}
              {method === "phone" ? "Phone number" : null}
              {method === "board" ? "Welcome to BoardPage" : null}
            </label>
            <div className="mt-1">
              {method === "email" ? (
                <input
                  type="email"
                  className="appearance-none w-full px-3 py-2 border border-gray-300 shadow-sm rounded-md placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 "
                  required
                />
              ) : null}
              {method === "phone" ? (
                <div className="flex rounded-md shadow-sm ">
                  <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm  ">
                    +82
                  </span>
                  <input
                    className="py-2 px-4 border border-transparent appearance-none w-full rounded-l-none border-gray-300 shadow-sm rounded-md placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                    type="number"
                    required
                  />
                </div>
              ) : null}
              {method === "board" ? (
                <div>
                  <h1>Hello Eevery one</h1>
                </div>
              ) : null}
            </div>
            <button className="mt-5 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none ">
              {method === "email" ? "Get login link" : null}
              {method === "phone" ? "Get one-time password" : null}
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
