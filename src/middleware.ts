import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { ROUTES } from './app/routes';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  if (Object.values(ROUTES).includes(path as any)) {
    return NextResponse.next();
  }

  return NextResponse.next();
}
