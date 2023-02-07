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
    <div className="flex flex-col bg-red-100 w-96">
      {/*Logo*/}
      <Link href="../">
        <div className="flex flex-col w-full p-10">
          <h1 className="text-center text-3xl font-extrabold">Monkey</h1>
        </div>
      </Link>

      <div className="flex flex-col w-full p-10">
        <Link
          href="./qrcode/
        "
        >
          <input
            type="button"
            value="QR Code"
            className="rounded-full bg-blue-500 p-3 w-full"
          />
        </Link>
      </div>
    </div>
  );
};

export default Menu;
