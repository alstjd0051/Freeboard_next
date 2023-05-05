import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="text-center">
      <Image
        className="mx-auto rounded-full"
        src={"/images/profile.png"}
        alt="Picture of the author"
        width={250}
        height={250}
        priority
      />
      <h2 className="text-3xl font-bold mt-2">{"Hi, I'm Tyler"}</h2>
      <h3 className="text-xl font-semibold">Full-stack Engineer</h3>
      <p>꿈을 코딩하는사람</p>
      <Link href={"/contact"}>
        <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2">
          Contect Me
        </button>
      </Link>
    </section>
  );
};

export default Hero;
