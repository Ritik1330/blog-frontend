"use client";

import SideNavbar from "@/components/SideNavbar";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

// import Navbar from './navbar';
// import Footer from './footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={cn("min-h-screen w-full text-base flex ")}>
     <div className="sticky top-0 h-screen  ">
     <SideNavbar />
     </div>
      <div className="px-4 w-full border-l">{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
