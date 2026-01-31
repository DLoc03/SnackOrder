import accountApiRequest from "@/apiRequest/account";
import { cookies } from "next/headers";
import React from "react";
import HeaderPrivate from "./header-private";
import HeaderPublic from "./header-public";

async function Header() {
  const cookieStore = cookies();
  const sessionToken = (await cookieStore).get("sessionToken");
  const user = await accountApiRequest.me(sessionToken?.value ?? "");
  return (
    <>
      {user ? <HeaderPrivate user={user?.payload?.data} /> : <HeaderPublic />}
    </>
  );
}

export default Header;
