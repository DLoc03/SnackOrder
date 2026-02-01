import React from "react";
import AppProvider from "../AppProvider";
import { cookies } from "next/headers";
import HeaderPrivate from "@/components/features/layout/header-private";
import accountApiRequest from "@/apiRequest/account";

async function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = cookies();
  const sessionToken = (await cookieStore).get("sessionToken");
  const user = await accountApiRequest.me(sessionToken?.value);
  return (
    <main>
      <HeaderPrivate user={user?.payload?.data} />
      <AppProvider initialSessionToken={sessionToken?.value || ""}>
        <main className="pt-14 sm:pt-16 px-4">{children}</main>
      </AppProvider>
    </main>
  );
}

export default AuthLayout;
