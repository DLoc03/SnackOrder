"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import UserPhoto from "../user/user-photo";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import HeaderDropdown from "../item/header-dropdown";

type User = {
  name: string;
  email: string;
};

type HeaderProps = {
  user: User | null;
};

function HeaderPrivate({ user }: HeaderProps) {
  const [isDropdown, setIsDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = () => {
    setIsDropdown(false);
  };

  useOnClickOutside(dropdownRef, handleClickOutside);

  return (
    <header className="w-full fixed top-0 left-0 flex px-4 sm:px-8 py-3 border-b z-50 items-center justify-between">
      <Link
        href={"/"}
        className="text-xl sm:text-4xl cursor-pointer text-shadow-2xs font-bold"
      >
        Snack Order
      </Link>
      <div ref={dropdownRef} className="flex relative items-center gap-3 ">
        {user && (
          <span className="text-sm hidden sm:inline-block">
            Xin chào, {user?.name}
          </span>
        )}
        <div
          className="cursor-pointer relative flex items-center gap-1"
          onClick={() => setIsDropdown(!isDropdown)}
        >
          <UserPhoto />
          <button className="rounded-full absolute cursor-pointer -right-2 bottom-0 p-1 bg-gray-300">
            <ChevronDown
              size={10}
              className={`transform duration-200   ${isDropdown && "rotate-180"}`}
            />
          </button>
        </div>
        <div
          className={`bg-white shadow w-52 rounded-lg p-3 absolute right-0 top-full mt-2 z-10 transition-all duration-200 ${isDropdown ? "opacity-100 " : "opacity-0 "}`}
        >
          <HeaderDropdown user={user} />
        </div>
      </div>
    </header>
  );
}

export default HeaderPrivate;
