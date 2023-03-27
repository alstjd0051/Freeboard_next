"use client";
import Button from "@/components/commons/items/button";
import Input from "@/components/commons/items/input";
import TextArea from "@/components/commons/items/textarea";
import Layout from "@/components/commons/layout";
import type { NextPage } from "next";
import { useForm } from "react-hook-form";
import { TbPhotoPlus } from "react-icons/tb";

interface UploadproductForm {
  name: string;
  price: string;
  description: string;
}

const Upload: NextPage = () => {
  const { register } = useForm<UploadproductForm>();
  return (
    <Layout canGoBack hasTabBar title="Upload Product">
      <form className="p-4 space-y-4">
        <div>
          <label
            htmlFor=""
            className="w-full cursor-pointer text-gray-600 hover:border-orange-500 hover:text-orange-500 flex items-center justify-center border-2 border-dashed bg-gray-300 h-48 rounded-md "
          >
            <TbPhotoPlus className="h-12 w-12 stroke-current fill-none " />
            <input className="hidden" type="file" />
          </label>
        </div>
        <Input
          register={register("name", { required: true })}
          required
          label="Name"
          name="name"
          type="text"
        />
        <Input
          register={register("price", { required: true })}
          required
          label="Price"
          name="price"
          type="text"
          kind="price"
        />
        <TextArea
          register={register("description", { required: true })}
          name="description"
          label="Description"
          required
        />
        <Button text="Upload item" />
      </form>
    </Layout>
  );
};

export default Upload;
