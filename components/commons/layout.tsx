"use client";
import { spawn } from "child_process";
import React from "react";
import Link from "next/link";
import {
  BackwardIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HomeIcon,
  NewspaperIcon,
  UserIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { cls } from "./libs/client/utils";

interface Props {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
}

const Layout = ({ children, canGoBack, hasTabBar, title }: Props) => {
  const router = useRouter();
  const onClick = () => {
    router.back();
  };
  return (
    <div>
      <div
        className={cls(
          !canGoBack ? "justify-center" : "",
          " bg-white h-12 w-full text-lg px-10 font-medium py-3 fixed text-gray-700 border-b top-0  flex items-center "
        )}
      >
        <button onClick={onClick} className="absolute left-10">
          <BackwardIcon className="w-7 h-7" />
        </button>
        {title ? <span>{title}</span> : null}
      </div>
      <div className={cls("pt-14", hasTabBar ? "pb-16" : "")}>{children}</div>
      {hasTabBar ? (
        <nav className="bg-white  text-gray-700 border-t fixed bottom-0 w-full px-10  pb-5 pt-3 flex justify-between text-xs">
          <Link href={"/"} className="flex flex-col items-center space-y-2">
            <HomeIcon className="w-6 h-6 stroke-2" />
            <span>홈</span>
          </Link>
          <Link
            href={"/community"}
            className="flex flex-col items-center space-y-2"
          >
            <NewspaperIcon className="w-6 h-6 stroke-2" />
            <span>동내생활</span>
          </Link>
          <Link
            href={"/chats"}
            className="flex flex-col items-center space-y-2"
          >
            <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6 stroke-2" />

            <span>채팅</span>
          </Link>
          <Link href={"/live"} className="flex flex-col items-center space-y-2">
            <VideoCameraIcon className="w-6 h-6 stroke-2" />
            <span>라이브</span>
          </Link>
          <Link
            href={"/profile"}
            className="flex flex-col items-center space-y-2"
          >
            <UserIcon className="w-6 h-6 stroke-2" />
            <span>나의 캐럿</span>
          </Link>
        </nav>
      ) : null}
    </div>
  );
};

export default Layout;
