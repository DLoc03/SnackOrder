import React from "react";

function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <h1>Giao diện đăng nhập, đăng ký</h1>
      {children}
    </main>
  );
}

export default AuthLayout;
