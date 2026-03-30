import type { Metadata } from "next";
import "./globals.css";
import 'animate.css';

export const metadata: Metadata = {
  title: "CalcForCardiac",
  description: "A zero friction and zero login medical calculator made by Saksham Vitwekar (SomeTroller77)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
