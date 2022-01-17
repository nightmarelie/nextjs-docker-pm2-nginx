import React from "react";
import Link from "next/link";
import Image from "next/image";

function About() {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h1>About</h1>
      <Image src="/about.jpeg" width="300" height="150" />
    </>
  );
}

export default About;
