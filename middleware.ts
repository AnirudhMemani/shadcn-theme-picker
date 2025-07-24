import { NextResponse, type NextRequest } from "next/server";
import { API_AUTH_PREFIX } from "./routes";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  console.log("pathname", pathname);

  const isApiAuth = pathname.startsWith(API_AUTH_PREFIX);

  if (isApiAuth) {
    return NextResponse.next();
  }

  if (!pathname.startsWith("/editor/theme")) {
    return NextResponse.redirect(new URL("/editor/theme", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
