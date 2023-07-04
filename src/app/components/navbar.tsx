import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav>
      <Link href="about/">About</Link>
      <Link href="about">Route with an Id</Link>
      <Link href="about/us">About Us</Link>
      <Link href="listofposts">List Of Posts</Link>
    </nav>
  );
}

export default Navbar;
