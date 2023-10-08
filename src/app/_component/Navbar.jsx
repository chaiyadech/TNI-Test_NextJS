import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <Image
              src="/tni.jpg"
              alt="Vercel Logo"
              width={230}
              height={100}
              priority
            />
          </a>
          <h1>TNI Test NextJs</h1>
        </div>
      </nav>
    </>
  );
}
