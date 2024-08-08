import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export default async function middleware(request: NextRequest) {

  return NextResponse.next();
  // const token = await getToken({
  //   req: request,
  //   secret: process.env.NEXTAUTH_SECRET,
  // });

  // const path = request.nextUrl.pathname;

  // if (token) {
  //   if (path == "/login" || path == "/register" || path == "/") {
  //     return NextResponse.redirect(new URL("/dashboard", request.url));
  //   }

  //   return NextResponse.next({
  //     request,
  //   });
  // } else if (path != "/login" && path != "/register") {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

  // return NextResponse.next({
  //   request,
  // });
}

export const config = {
  matcher: ['/','/login/:path*', '/register/:path*', '/users/:path*', '/dashboard/:path*'],
};
