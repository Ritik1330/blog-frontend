"use client";
import { Menu, Search } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
// import { Switch } from "@/components/ui/switch";

import MenuItem from "./MenuItem";
import { ModeToggle, ModeToggleSwitch } from "../ModeToggle";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="bg-white sticky top-0  z-10">
      <nav className=" w-full bg-blue-900 h-14 flex justify-between items-center p-4 ">
        <Togalmenu />
        <MenuItem  />
        <div className="min-w-20 flex justify-between items-center">
          <ModeToggle />
          {/* <ModeToggleSwitch/> */}

          <Search className="duration-200 ease-in-out text-secondary  hover:scale-125 dark:text-white " />
        </div>
      </nav>
    </header>
  );
}

export function Togalmenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="duration-200 ease-in-out text-secondary  hover:scale-125 text-white" />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
