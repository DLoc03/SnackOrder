import React from "react";
import AppProvider from "../AppProvider";
import { cookies } from "next/headers";

async function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = cookies();
  const sessionToken = (await cookieStore).get("sessionToken");
  return (
    <main>
      <AppProvider initialSessionToken={sessionToken?.value || ""}>
        {children}
      </AppProvider>
    </main>
  );
}

export default AuthLayout;
