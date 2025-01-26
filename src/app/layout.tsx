import type { Metadata } from "next";
import "./globals.css";
import { ReactLenis } from "@/utils/lenis";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Umar Khayyam | Software Engineer | Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body>
          {/* Background gradient */}
          <div
            className="fixed inset-0 -z-10 h-full w-full 
            [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"
          />

          {/* <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 
          [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}

          {/* Main content */}
          <main>{children}</main>
        </body>
      </ReactLenis>
    </html>
  );
}
