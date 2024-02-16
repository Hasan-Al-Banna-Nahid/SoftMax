"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiSilverBullet } from "react-icons/gi";

const NestedNavbar = () => {
  const user =
    typeof window !== "undefined" ? window.localStorage.getItem("user") : null;
  const [openMenu, setOpenMenu] = useState(false);
  const [profileMenu, setProfileMenu] = useState(false);
  const handleOpenMenu = () => {
    setOpenMenu((prev) => !prev);
  };
  const handleProfileMenu = () => {
    setProfileMenu((prev) => !prev);
  };
  return (
    <div>
      <div className="navbar bg-base-300">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <RxHamburgerMenu
                onClick={handleOpenMenu}
                className="text-2xl text-purple-950"
              />
            </div>
            {openMenu && (
              <div
                tabIndex={0}
                className="menu menu-sm  mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
              >
                <li>
                  <Link href={"/"} className="font-bold text-xl navbarText">
                    <GiSilverBullet className="text-2xl text-blue-900" />
                    Homepage
                  </Link>
                </li>
                <li>
                  <a className="font-bold text-xl navbarText">
                    <GiSilverBullet className="text-2xl text-blue-900" />
                    Services
                  </a>
                </li>
                <li>
                  <a className="font-bold text-xl navbarText">
                    <GiSilverBullet className="text-2xl text-blue-900" />
                    About
                  </a>
                </li>
              </div>
            )}
          </div>
        </div>
        <div className="navbar-center">
          <Link href={"/"} className="btn btn-ghost text-xl navbarText">
            SoftMax
          </Link>
        </div>
        <div className="">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
            onClick={handleProfileMenu}
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          {profileMenu && user ? (
            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href={"/Dashboard/Admin"} className=" font-bold">
                  <GiSilverBullet className="text-2xl text-red-900" />
                  Profile
                </Link>
              </li>
              <li>
                <a className="font-bold">
                  <GiSilverBullet className="text-2xl text-red-900" />
                  Settings
                </a>
              </li>
              <li>
                <a className="font-bold">
                  <GiSilverBullet className="text-2xl text-red-900" />
                  Logout
                </a>
              </li>
            </div>
          ) : (
            <button className="btn btn-primary btn-outline w-[300px]">
              <Link href={"/Authorization/Login"}>Login</Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NestedNavbar;
