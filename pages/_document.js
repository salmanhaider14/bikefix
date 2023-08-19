import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          async
          defer
          type="text/javascript"
          src={`https://app.engati.com/static/js/widget.js?config=${JSON.stringify(
            {
              bot_key: "c68740bd920f476a",
              welcome_msg: true,
              branding_key: "default",
              server: "https://app.engati.com",
              e: "p",
            }
          )}`}
        />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
