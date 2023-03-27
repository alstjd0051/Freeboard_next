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
import { useRouter, usePathname } from "next/navigation";
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
  const pathName = usePathname();

  return (
    <div>
      <div className="bg-white w-full h-12  justify-center text-lg px-10 font-medium fixed text-gray-800 border-b top-0 flex items-center ">
        {canGoBack ? (
          <button onClick={onClick} className="absolute left-4">
            <BackwardIcon className="w-6 fill-none stroke-current h-6" />
          </button>
        ) : null}
        {title ? (
          <span className={cls(canGoBack ? "mx-auto" : "", "")}>{title}</span>
        ) : null}
      </div>
      <div className={cls("pt-12", hasTabBar ? "pb-24" : "")}>{children}</div>
      {hasTabBar ? (
        <nav className="bg-white w-full text-gray-700 border-t fixed bottom-0 px-10 pb-5 flex justify-between text-xs ">
          <Link className="flex flex-col items-center space-y-2 " href={"/"}>
            <HomeIcon
              className={cls(
                "w-6 h-6",
                pathName === "/"
                  ? "text-orange-500"
                  : "hover:text-gray-500 transition-colors"
              )}
            />
            <span>홈</span>
          </Link>
          <Link
            className="flex flex-col items-center space-y-2 "
            href={"/community"}
          >
            <NewspaperIcon
              className={cls(
                "w-6 h-6",
                pathName === "/community"
                  ? "text-orange-500"
                  : "hover:text-gray-500 transition-colors"
              )}
            />
            <span>동네생활</span>
          </Link>
          <Link
            className="flex flex-col items-center space-y-2 "
            href={"/chats"}
          >
            <ChatBubbleOvalLeftEllipsisIcon
              className={cls(
                "w-6 h-6",
                pathName === "/chats"
                  ? "text-orange-500"
                  : "hover:text-gray-500 transition-colors"
              )}
            />
            <span>채팅</span>
          </Link>
          <Link
            className="flex flex-col items-center space-y-2 "
            href={"/live"}
          >
            <VideoCameraIcon
              className={cls(
                "w-6 h-6",
                pathName === "/live"
                  ? "text-orange-500"
                  : "hover:text-gray-500 transition-colors"
              )}
            />
            <span>라이브</span>
          </Link>
          <Link
            className="flex flex-col items-center space-y-2 "
            href={"/profile"}
          >
            <UserIcon
              className={cls(
                "w-6 h-6",
                pathName === "/"
                  ? "text-orange-500"
                  : "hover:text-gray-500 transition-colors"
              )}
            />
            <span>나의 캐럿</span>
          </Link>
        </nav>
      ) : null}
    </div>
  );
};

export default Layout;
