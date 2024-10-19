import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose"; // Import the appropriate method from jose

// Secret used to verify JWT token (replace with your secret)
const JWT_SECRET = process.env.LOCAL_JWT_SECRET_KEY || "your-secret-key";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  const url = request.nextUrl;

  // Handle logic for /login page
  if (url.pathname === "/login") {
    if (token) {
      const previousPage = request.headers.get("referer") || "/";
      return NextResponse.redirect(new URL(previousPage, request.url));
    }
    return NextResponse.next(); // No token, allow access to login page
  }
  // Handle logic for /register page

  if (url.pathname === "/register") {
    if (token) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next(); // No token, allow access to login page
  }

  // Handle logic for /req page (JWT verification)
  if (url.pathname === "/req") {
    if (!token) {
      return NextResponse.next();
    }

    try {
      const { payload } = await jwtVerify(
        token.value,
        new TextEncoder().encode(JWT_SECRET)
      );
      // Token is valid, allow access to the page
      const response = NextResponse.next();
      response.headers.set("x-user", JSON.stringify(payload.user));

      return response;
    } catch (error) {
      console.error("Invalid JWT:", error);
      // Token is invalid, redirect to login
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
}

// Middleware config to apply to certain routes
export const config = {
  matcher: ["/login", "/req", "/register"], // Apply to /login and /req routes
};
