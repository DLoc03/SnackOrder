import HeaderPublic from "@/components/features/layout/header-public";
import React from "react";

function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <header>
        <HeaderPublic />
      </header>
      <main className="w-full py-6 flex justify-center items-center">
        {children}
      </main>
    </div>
  );
}

export default AuthLayout;
