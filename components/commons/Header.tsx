import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4  ">
      <Link href={"/"} className="font-bold text-3xl">
        Tyler's Blog
      </Link>
      <nav className="flex items-center gap-4 ">
        <Link href={"/"}>home</Link>
        <Link href={"/about"}>about</Link>
        <Link href={"/posts"}>posts</Link>
        <Link href={"/contact"}>contact</Link>
      </nav>
    </div>
  );
};

export default Header;
