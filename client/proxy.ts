import { NextResponse, NextRequest } from "next/server";
import { authPaths, privatePaths } from "./constants/path";
import { PATHSNAME } from "./constants/paths-name";

// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionToken = request.cookies.get("sessionToken")?.value;
  if (privatePaths.some((path) => pathname.startsWith(path)) && !sessionToken)
    return NextResponse.redirect(new URL(PATHSNAME.LOGIN, request.url));
  if (authPaths.some((path) => pathname.startsWith(path)) && sessionToken)
    return NextResponse.redirect(new URL(PATHSNAME.ME, request.url));
  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/register", "/me"],
};
