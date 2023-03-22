"use client";

import {
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
export default function Home() {
  return (
    <div className="flex flex-col space-y-5 py-10 ">
      {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
        <div
          key={i}
          className="flex px-4 border-b pb-4 cursor-pointer justify-between "
        >
          <div className="flex space-x-4  ">
            {/* images */}
            <div className="w-20 h-20 bg-gray-400 rounded-md " />
            <div className="pt-2 flex flex-col ">
              <h3 className="text-sm font-medium text-gray-900 ">
                New iPhone 14
              </h3>
              <span className="text-xs text-gray-500">Black</span>
              <span className="font-medium mt-1 text-gray-900 ">$95</span>
            </div>
          </div>
          <div className="flex space-x-2 items-end justify-end">
            <div className="flex space-x-0.5 items-center text-sm text-gray-600  ">
              <HeartIcon className="w-4 h-4" />

              <span>1</span>
            </div>
            <div className="flex space-x-0.5 items-center text-sm text-gray-600">
              <ChatBubbleOvalLeftIcon className="w-4 h-4" />
              <span>1</span>
            </div>
          </div>
        </div>
      ))}
      <button className="fixed hover:bg-orange-500 transition-colors bottom-24 right-5 bg-orange-400 rounded-full p-4 shadow-xl text-white  ">
        <PlusIcon className="w-4 h-4" />
      </button>
    </div>
  );
}
