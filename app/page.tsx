"use client";

import Item from "@/components/commons/items/item";
import Layout from "@/components/commons/layout";
import useUser from "@/components/commons/libs/client/useUser";
import {
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { Product } from "@prisma/client";
import Head from "next/head";
import { useRouter } from "next/navigation";
import useSWR from "swr";

interface ProductsResponse {
  ok: boolean;
  products: Product[];
}

export default function Home() {
  const { user, isLoading } = useUser();
  const { data } = useSWR<ProductsResponse>("/api/products");
  console.log(data);
  const router = useRouter();
  return (
    <Layout title="Home" hasTabBar>
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex flex-col space-y-5  ">
        {data?.products?.map((product) => (
          <Item
            id={product.id}
            key={product.id}
            title={product.name}
            price={product.price}
            comments={1}
            hearts={1}
          />
        ))}
        <button
          onClick={() => router.push("/products/upload")}
          className="fixed hover:bg-orange-500 transition-colors bottom-24 right-5 bg-orange-400 rounded-full p-4 shadow-xl text-white  "
        >
          <PlusIcon className="w-4 h-4" />
        </button>
      </div>
    </Layout>
  );
}
