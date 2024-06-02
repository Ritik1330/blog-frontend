"use client";
import React, { useEffect, useState } from "react";

import {
  LayoutDashboard,
  UsersRound,
  Layers,
  File,
  MessageSquareTextIcon,
  SettingsIcon,
  Tags,
  ChevronRight,
} from "lucide-react";
import { Nav } from "./nav";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { useWindowWidth } from "@react-hook/window-size";

export default function SideNavbar() {
  const pathname = usePathname();
  const windowWidth = useWindowWidth();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(windowWidth < 768);
  }, [windowWidth]);

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }
  return (
    <div className="relative min-w-30 pb-10 pt-14 ">
      {!isMobile && (
        <div className="absolute top-2 right-[-20px]">
          <Button
            variant="secondary"
            className="rounded-full p-2"
            onClick={toggleSidebar}
          >
            <ChevronRight />
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={isMobile ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/dashboard",
            label: "",
            icon: LayoutDashboard,
            variant: "/dashboard" === pathname ? "default" : "ghost",
          },
          {
            title: "Users",
            label: "",
            href: "/dashboard/users",
            icon: UsersRound,
            variant: pathname.includes("/dashboard/users")
              ? "default"
              : "ghost",
          },
          {
            title: "Post",
            href: "/dashboard/post",
            label: "",
            icon: File,
            variant: pathname.includes("/dashboard/post") ? "default" : "ghost",
          },

          {
            title: "Category",
            href: "/dashboard/category",
            label: "",
            icon: Layers,
            variant: pathname.includes("/dashboard/category")
              ? "default"
              : "ghost",
          },
          {
            title: "Tags",
            href: "/dashboard/tags",
            label: "",
            icon: Tags,
            variant: pathname.includes("/dashboard/tags") ? "default" : "ghost",
          },
          {
            title: "Comments",
            href: "/dashboard/comments",
            label: "",
            icon: MessageSquareTextIcon,
            variant: pathname.includes("/dashboard/comments")
              ? "default"
              : "ghost",
          },
          {
            title: "Setings",
            href: "/dashboard/setings",
            label: "",
            icon: SettingsIcon,
            variant: pathname.includes("/dashboard/setings")
              ? "default"
              : "ghost",
          },
        ]}
      />
    </div>
  );
}
