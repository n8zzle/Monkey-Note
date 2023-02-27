"use client";
//Images
import Image from "next/image";
import Logo from "../public/Logo.png";
//Libraries
import React from "react";
import Link from "next/link";
import { Button, MenuItem } from "@mui/material";
import Menu from "@mui/material/Menu";

type Props = {};

const MyMenu = (props: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex flex-row md:flex-col bg-gray-900 w-full md:w-96 p-5 items-center">
      {/*Logo*/}
      <Link href="../">
        <div className="flex flex-col w-full">
          <h1 className="text-center text-white text-3xl font-extrabold">
            GoMonkey
          </h1>
        </div>
      </Link>

      <div className="hidden md:flex  flex-col w-full md:p-10  md:space-y-5 justify-end md:justify-center">
        <Link
          href="./Qr/
        "
        >
          <input
            type="button"
            value="QR Generator"
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

      <div className="flex md:hidden w-full justify-end">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Menu
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <Link href={"./Qr"}>
            <MenuItem onClick={handleClose}>QR Code</MenuItem>
          </Link>
          <Link href={"./Password"}>
            <MenuItem onClick={handleClose}>Password</MenuItem>
          </Link>
          <Link href={"./Weather"}>
            <MenuItem onClick={handleClose}>Weather</MenuItem>
          </Link>
        </Menu>
      </div>
    </div>
  );
};

export default MyMenu;
