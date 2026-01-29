import React from "react";
import { ModeToggle } from "./toggle-mode";
import Link from "next/link";
import { Button } from "./ui/button";

function Header() {
  return (
    <header className="w-full flex px-4 py-3 shadow  z-50 justify-between">
      <Link
        href={"/"}
        className="text-4xl cursor-pointer text-shadow-2xs font-bold"
      >
        Snack Order
      </Link>

      <div className="flex gap-x-2 items-center">
        <ModeToggle />
        <Link href={"/login"}>
          <Button variant={"default"} size={"sm"}>
            Đăng nhập
          </Button>
        </Link>
        <Link href={"/register"}>
          <Button variant={"outline"} size={"sm"}>
            Đăng ký
          </Button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
