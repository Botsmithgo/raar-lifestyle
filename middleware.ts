import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match everything except API routes, Next assets, files with an extension,
  // and extensionless metadata routes (including their localized variants like
  // /en/opengraph-image — next-intl would otherwise strip the locale prefix
  // on default-locale routes and 307 them to a non-existent root path).
  matcher:
    "/((?!api|trpc|_next|_vercel|opengraph-image|twitter-image|icon|apple-icon|.*\\/opengraph-image|.*\\/twitter-image|.*\\/icon|.*\\/apple-icon|.*\\..*).*)",
};
