import React from "react";
import Link from "next/link";
import Image from "next/image";

function Home() {
  return (
    <>
      <Link href="/about">
        <a>About</a>
      </Link>
      <h1>Home</h1>
      <Image src="/home.jpeg" width="300" height="150" />
    </>
  );
}

export default Home;
