import React from "react";

function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <main className="w-ful py-6 flex justify-center">{children}</main>;
}

export default AuthLayout;
