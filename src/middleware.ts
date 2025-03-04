import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  // const token = localStorage.getItem("token");
  const token = request.cookies.get("token")?.value; // Get token from cookies
  console.log(token);

  if (path.split("/")[1] !== "auth" && !request.cookies.has("token")) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (path.split("/")[1] === "auth" && request.cookies.has("token")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
}

export const config = {
  matcher: [
    "/",
    "/dashboard",
    "/booking",
    "/reviews",
    "/setting",
    "/login",
    "/register",
    "/auth/login",
    "/users/:path*",
    "/tour/:path*",
    "/hotel/:path*",
    "/restaurant/:path*",
    "/cab/:path*",
    "/customers/:path*",
    "/product/:path*",
    "/tours/:path*",
    "/travelagent/:path*",
  ],
};
