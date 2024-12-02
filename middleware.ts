import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isAdminPage = request.nextUrl.pathname.startsWith('/admin');
  const isLoginPage = request.nextUrl.pathname === '/admin';
  const isLoggedIn = request.cookies.get('isAdminLoggedIn')?.value === 'true';

  if (isAdminPage) {
    if (!isLoggedIn && !isLoginPage) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
   
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
}; 