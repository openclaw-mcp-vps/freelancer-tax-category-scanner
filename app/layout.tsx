import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FreelancerTax — Auto-Categorize Bank Expenses for Tax Filing",
  description: "Connect your bank, let AI scan and categorize your business expenses automatically. Built for solo freelancers and consultants."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="84c4da1b-bb45-4ee2-ab5b-d4e97cfa12b2"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
