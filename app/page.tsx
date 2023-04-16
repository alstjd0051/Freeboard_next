import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center  justify-evenly h-screen  ">
      <h1>Home Page</h1>
      <Link href={"/users"}>user </Link>
    </div>
  );
}
