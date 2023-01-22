"use client";
//Images
import Image from "next/image";
import Logo from "../public/Logo.png";
//Libraries
import React from "react";

type Props = {};

const Menu = (props: Props) => {
  return (
    <div className="flex flex-col bg-red-100 w-96">
      {/*Logo*/}
      <div className="flex flex-col w-full p-10">
        <h1 className="text-center text-3xl font-extrabold">Monkey Note</h1>
      </div>

      <div className="flex flex-col w-full p-10">
        <button
          className="bg-red-300 py-2 rounded-full"
          onClick={() => alert("New Note")}
        >
          New Note
        </button>
        <h3 className="my-10 font-bold">All Collections</h3>
      </div>
    </div>
  );
};

export default Menu;
