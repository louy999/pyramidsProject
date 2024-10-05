import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  const url = request.nextUrl;

  // If the URL is "/login", handle the token existence logic
  if (url.pathname === "/login") {
    if (token) {
      const previousPage = request.headers.get("referer") || "/";
      return NextResponse.redirect(new URL(previousPage, request.url));
    }
    return NextResponse.next(); // No token, allow access to login page
  }
}

// Middleware config to apply to certain routes
export const config = {
  matcher: ["/login", "/req"], // Apply to /login and /req routes
};
