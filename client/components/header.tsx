import React from "react";
import { ModeToggle } from "./toggle-mode";
import Link from "next/link";

function Header() {
  return (
    <div>
      <ModeToggle />
      <ul>
        <li>
          <Link href={"/"}>Trang chủ</Link>
        </li>
        <li>
          <Link href={"/login"}>Đăng nhập</Link>
        </li>
        <li>
          <Link href={"/register"}>Đăng ký</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
