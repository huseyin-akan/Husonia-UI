import "@styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Navbar } from "@components";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Husonia",
  description: "Hüseyin Akan's Portfolio Site And Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navbar title="Husokan" />
        </header>
        {children}
      </body>
    </html>
  );
}
