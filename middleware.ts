import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match everything except API routes, Next assets, and files.
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
