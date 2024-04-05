import type { Metadata } from "next";
import { Noto_Sans, Space_Grotesk } from "next/font/google";
import { Layout } from "@/components/Layout";
import classNames from "classnames";
import "./globals.css";
import "prismjs/themes/prism-solarizedlight.min.css";

const notoSans = Noto_Sans({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames(notoSans.className, spaceGrotesk.className, 'h-full m-0')}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
