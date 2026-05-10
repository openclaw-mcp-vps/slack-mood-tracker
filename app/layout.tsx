import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Slack Mood Tracker — Track Team Mood & Burnout via Slack",
  description: "Analyzes Slack sentiment patterns to detect team stress and burnout early. Built for HR managers, team leads, and startup founders."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="f4bf4285-de88-4391-a0a9-ed514b8cd86b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
