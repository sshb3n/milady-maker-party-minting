import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import stylesheet from "~/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

const backgroundImageUrl =
  "https://miladymakerparty.s3.us-east-2.amazonaws.com/clouds.webp";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://miladymakerparty.s3.us-east-2.amazonaws.com/miladymakerpartylogoanimated.gif"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://miladymakerparty.s3.us-east-2.amazonaws.com/miladymakerpartylogoanimated.gif"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffffff" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#ffffff"></meta>
        <Meta />
        <Links />
      </head>
      <body
        className="bg-repeat h-full min-h-screen text-white"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
