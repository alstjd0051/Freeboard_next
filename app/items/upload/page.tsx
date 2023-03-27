import type { NextPage } from "next";
import { TbPhotoPlus } from "react-icons/tb";

const Upload: NextPage = () => {
  return (
    <div className="px-4 py-16">
      <div>
        <label className="w-full text-gray-600 hover:border-orange-500 hover:text-orange-500 flex items-center justify-center border-2 border-dashed border-gray-300 h-48 rounded-md">
          <TbPhotoPlus className="h-12 w-12" />
          <input className="hidden" type="file" />
        </label>
      </div>
      <div className="my-5">
        <label
          className="mb-1 block text-sm font-medium text-gray-700 "
          htmlFor="price"
        >
          Price
        </label>
        <div className="rounded-md flex items-center relative shadow-sm ">
          <div className="absolute left-0 pl-3 pointer-events-none flex items-center justify-center">
            <span className="text-gray-500 text-sm">$</span>
          </div>
          <input
            id="price"
            className="appearance-none w-full px-3 py-2 border border-gray-300 shadow-sm rounded-md placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 pl-7"
            type="text"
            placeholder="0.00"
          />
          <div className="absolute right-0 pointer-events-none pr-3 flex items-center ">
            <span className="text-gray-500">USD</span>
          </div>
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700 ">
          Description
        </label>

        <textarea
          className="mt-1 shadow-sm w-full focus:ring-2 focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500"
          rows={4}
        />
      </div>
      <button className=" bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none w-full mt-4">
        Upload product
      </button>
    </div>
  );
};

export default Upload;
