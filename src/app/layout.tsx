import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider";
import ModeToggle from "@/components/ModeToggle";
import TanstackProviders from "@/providers/TanstackProviders";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/theme/Header/Header";
import Footer from "@/components/theme/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "news app",
  description: "This is news App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, {
          "debug-screens": process.env.NODE_ENV === "development",
        })}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <TanstackProviders>{children}</TanstackProviders>
        </ThemeProvider>
        <Toaster richColors />
        <Footer/>
      </body>
    </html>
  );
}
