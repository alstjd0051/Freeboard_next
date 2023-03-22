import { VideoCameraIcon } from "@heroicons/react/24/outline";
import { NextPage } from "next";
import React from "react";

const Live: NextPage = () => {
  return (
    <div className="py-10  divide-y-2 space-y-4">
      {[1, 2, 3, 4, 5].map((_, i) => (
        <div className="pt-4 px-4 " key={i}>
          <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
          <h3 className=" text-gray-700 text-lg mt-2 ">
            Let&apos;s try potatos
          </h3>
        </div>
      ))}
      <button className="fixed hover:bg-orange-500 transition-colors bottom-24 right-5 bg-orange-400 rounded-full p-4 shadow-xl border-transparent text-white  ">
        <VideoCameraIcon className="w-6 h-6 stroke-2 " />
      </button>
    </div>
  );
};

export default Live;
