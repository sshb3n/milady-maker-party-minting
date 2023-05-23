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
  "https://miladymakerparty.s3.us-east-2.amazonaws.com/background.webp";

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
          href="https://miladymakerparty.s3.us-east-2.amazonaws.com/favicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://miladymakerparty.s3.us-east-2.amazonaws.com/favicon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffffff" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="author" content="Milady Maker Party"></meta>
        <title>Milady Maker Party</title>
        <meta name="description" content="Milady Maker Party is the gamification of collective wealth creation and redistribution for the Remilia ecosystem."></meta>
        <meta name="og:image" content="https://miladymakerparty.s3.us-east-2.amazonaws.com/twittercard.jpg"></meta>
        <meta name="theme-color" content="#ffffff"></meta>

        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@miladymakerprty" />
        <meta name="twitter:creator" content="@miladymakerprty" />
        <meta name="twitter:title" content="Milady Maker Party" />
        <meta name="twitter:description" content="Milady Maker Party is the gamification of collective wealth creation and redistribution for the Remilia ecosystem." />
        <meta name="twitter:image" content="https://miladymakerparty.s3.us-east-2.amazonaws.com/twittercard.jpg?4362984378" />

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
