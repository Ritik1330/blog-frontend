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
    <div className={cn("min-h-screen w-full text-base flex  bg-muted/40")}>   
     <div className="sticky top-0 h-screen bg-background  ">
     <SideNavbar />
     </div>
      <div className="w-full border-l ">{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
