import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="p-5 bg-blue-500 flex items-center gap-5">
      <Link href={"/"} className="px-2 py-1 bg-white text-blue-500 rounded-lg">
        Home
      </Link>
      <Link
        href={"/form"}
        className="px-2 py-1 bg-white text-blue-500 rounded-lg"
      >
        Form
      </Link>
      <Link
        href={"/search"}
        className="px-2 py-1 bg-white text-blue-500 rounded-lg"
      >
        Search
      </Link>
    </header>
  );
};

export default Header;
