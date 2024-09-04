
import "./globals.css";
import React from "react";
import {ClerkProvider} from "@clerk/nextjs";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dialog PDF',
  description: 'Built by arjungsanal | Dialog PDF',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider>
    <html lang="en">
      <body className="min-h-screen h-screen overflow-hidden flex flex-col">{children}</body>

    </html>
      </ClerkProvider>
  );
}
