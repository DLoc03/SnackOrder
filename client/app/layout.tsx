import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { Toaster } from "sonner";
import AppProvider from "./AppProvider";
import { cookies } from "next/headers";

const geistInter = Inter({
  subsets: ["vietnamese"],
});

export const metadata: Metadata = {
  title: "Snack Order - Đặt món tiện lợi, nhanh chóng",
  description: "Đặt món tiện lợi, nhanh chóng",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const sessionToken = (await cookieStore).get("sessionToken");
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={` ${geistInter.className} antialiased`}>
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppProvider initialSessionToken={sessionToken?.value || ""}>
            <Header />
            {children}
          </AppProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
