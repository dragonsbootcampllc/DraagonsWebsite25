import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { Navbar } from "./_components/layout";
import { Particles } from "./_components/ui";

export const metadata: Metadata = {
  title: "Dragons",
  description: "Dragons",
  icons: [{ rel: "icon", url: "/images/identity/D_Logo.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="dark box-border w-dvw overflow-hidden overflow-y-auto bg-primary-900 pt-36">
        {/* <Navbar /> */}
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <div className="fixed inset-0 z-[-1] size-full bg-[radial-gradient(circle,_theme(colors.primary.500/12%)_0%,_theme(colors.primary.700/10%)_40%,_theme(colors.primary.700/10%)_50%,_theme(colors.primary.500/12%)_100%)]" />
        <Particles
          className="fixed inset-0 z-[-1]"
          quantity={100}
          ease={80}
          color="#ffffff"
          refresh
        />
      </body>
    </html>
  );
}
