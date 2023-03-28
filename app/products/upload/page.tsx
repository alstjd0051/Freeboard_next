"use client";
import Button from "@/components/commons/items/button";
import Input from "@/components/commons/items/input";
import TextArea from "@/components/commons/items/textarea";
import Layout from "@/components/commons/layout";
import useMutation from "@/components/commons/libs/client/useMutation";
import { Product } from "@prisma/client";
import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { TbPhotoPlus } from "react-icons/tb";

interface UploadproductForm {
  name: string;
  price: number;
  description: string;
}
interface UploadProductMutation {
  ok: boolean;
  product: Product;
}

const Upload: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<UploadproductForm>();
  const [uploadProduct, { loading, data }] =
    useMutation<UploadProductMutation>("/api/products");
  const onValid = (data: UploadproductForm) => {
    if (loading) return;
    uploadProduct(data);
  };
  useEffect(() => {
    if (data?.ok) {
      router.push(`/products/${data.product.id}`);
    }
  }, [data, router]);
  return (
    <Layout canGoBack hasTabBar title="Upload Product">
      <form className="p-4 space-y-4" onSubmit={handleSubmit(onValid)}>
        <div>
          <label
            htmlFor=""
            className="w-full cursor-pointer text-gray-600 hover:border-orange-500 hover:text-orange-500 flex items-center justify-center border-2 border-dashed bg-gray-300 h-48 rounded-md "
          >
            <input className="hidden" type="file" />
            <TbPhotoPlus className="h-12 w-12 stroke-current fill-none " />
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
        <Button text={loading ? "loading" : "Upload item"} />
      </form>
    </Layout>
  );
};

export default Upload;
