import SideNavbar from "@/components/SideNavbar";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import "./editorCustom.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={cn("flex min-h-screen w-full bg-muted/40 text-base")}>
      <div className="sticky top-0 h-screen bg-background">
        <SideNavbar />
      </div>
      <div className="w-full border-l">{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
