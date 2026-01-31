import HeaderPublic from "@/components/features/layout/header-public";
import React from "react";

function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="w-full h-full pt-14 sm:pt-18">
      <main className="w-full h-full py-6 flex justify-center items-center">
        {children}
      </main>
    </div>
  );
}

export default AuthLayout;
