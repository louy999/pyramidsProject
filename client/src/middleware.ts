import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// import { getCookie } from "cookies-next";

export function middleware(request: NextRequest) {
  // Get the token from the cookies
  const token = request.cookies.get("token");
  const url = request.nextUrl;

  // Check if the user is trying to access the login page
  if (url.pathname === "/login") {
    if (token) {
      // Redirect to the previous page (or a different page if needed)
      const previousPage = request.headers.get("referer") || "/"; // Default to root if no referrer
      return NextResponse.redirect(new URL(previousPage, request.url));
    }
  }

  // Continue to the requested page if no token is present
  return NextResponse.next();
}

// Middleware config to apply only to certain routes
export const config = {
  matcher: ["/login"], // Apply this middleware only to the login page
};
