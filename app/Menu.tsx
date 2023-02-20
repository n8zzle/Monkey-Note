"use client";
//Images
import Image from "next/image";
import Logo from "../public/Logo.png";
//Libraries
import React from "react";
import Link from "next/link";

type Props = {};

const Menu = (props: Props) => {
  return (
    <div className="flex flex-col bg-gray-900 w-96">
      {/*Logo*/}
      <Link href="../">
        <div className="flex flex-col w-full p-10">
          <h1 className="text-center text-white text-3xl font-extrabold">
            GoMonkey
          </h1>
        </div>
      </Link>

      <div className="flex flex-col w-full p-10 space-y-5">
        <Link
          href="./Qr/
        "
        >
          <input
            type="button"
            value="QR Code Generator"
            className="rounded-full text-white bg-gray-700 p-3 w-full"
          />
        </Link>
        <Link
          href="./Password/
        "
        >
          <input
            type="button"
            value="Password Generator"
            className="rounded-full text-white bg-gray-700 p-3 w-full"
          />
        </Link>
        <Link
          href="./Weather/
        "
        >
          <input
            type="button"
            value="Weather"
            className="rounded-full text-white bg-gray-700 p-3 w-full"
          />
        </Link>
      </div>
    </div>
  );
};

export default Menu;
