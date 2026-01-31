"use client";

import Link from "next/link";
import React, { useState } from "react";
import UserPhoto from "../user/user-photo";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

type User = {
  name: string;
  email: string;
};

type HeaderProps = {
  user: User | null;
};

function HeaderPrivate({ user }: HeaderProps) {
  const [isDropdown, setIsDropdown] = useState(false);
  return (
    <header className="w-full fixed top-0 left-0 flex px-4 py-3 border-b z-50 items-center justify-between">
      <Link
        href={"/"}
        className="text-xl sm:text-4xl cursor-pointer text-shadow-2xs font-bold"
      >
        Snack Order
      </Link>
      <div className="flex items-center gap-3 ">
        {user && (
          <span className="text-sm hidden sm:inline-block">
            Xin chào, {user?.name}
          </span>
        )}
        <button
          className="cursor-pointer flex items-center gap-1"
          onClick={() => setIsDropdown(!isDropdown)}
        >
          <UserPhoto />
          <ChevronDown
            size={20}
            className={`transform duration-200  text-gray-500 ${isDropdown && "rotate-180"}`}
          />
        </button>
      </div>
    </header>
  );
}

export default HeaderPrivate;
