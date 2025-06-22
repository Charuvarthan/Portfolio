import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { CursorFollower } from "@/components/ui/cursor-follower";
import { MagnifierFollower } from "../components/ui/magnifier-follower";

export const metadata: Metadata = {
  title: "Charuvarthan - Developer",
  description:
    "Portfolio of Charuvarthan - Developer passionate about creating robust and scalable applications",
  keywords:
    "developer, full stack, react, next.js, portfolio, web development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased cursor-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <CursorFollower />
          <MagnifierFollower />
          {children}
          <a
            href="/Charuvarthan_s_Resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="..." // your button classes
          >
            Download CV
          </a>
        </ThemeProvider>
      </body>
    </html>
  );
}