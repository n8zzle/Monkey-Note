"use client";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";

type Props = {};

const qrcode = (props: Props) => {
  return (
    <div className="flex flex-col w-full p-10 bg-gray-800">
      <h1 className="w-full text-2xl text-white text-center font-bold">
        Weather App
      </h1>
      <div className=" flex flex-col  w-1/2 h-1/2 bg-gray-700 p-10 rounded-lg mx-auto my-auto justify-between">
        <div className="flex justify-center">Berlin</div>

        <div>
          <div className="flex justify-center align-middle">Image</div>
          <div className="flex justify-center">18</div>
          <div className="flex justify-center">Date</div>
        </div>

        <div className="flex flex-row justify-between">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
    </div>
  );
};

export default qrcode;
