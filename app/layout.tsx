"use client";

import "./globals.css";
import { SWRConfig } from "swr";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <SWRConfig
          value={{
            refreshInterval: 5000,
            fetcher: (url: string) =>
              fetch(url).then((response) => response.json()),
          }}
        >
          {children}
        </SWRConfig>
      </body>
    </html>
  );
}
