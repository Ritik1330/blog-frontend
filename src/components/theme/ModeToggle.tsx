"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const themetoggle = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };
  return (
    <TooltipProvider >
      <Tooltip>
        <TooltipTrigger asChild>
          <Button className="h-8" variant="outline" size="icon" onClick={() => themetoggle()}>
            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 " />
            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>
            {resolvedTheme === "dark"
              ? "Toggle Light Mode"
              : "Toggle Dark Mode"}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
  const { setTheme, resolvedTheme } = useTheme();
  const themetoggle = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };
  return (
    <SwitchPrimitives.Root
      //   onClick={() => themetoggle()}
      className={cn(
        "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input ",
        className
      )}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none block h-5 w-5 rounded-full bg-primary data-[state=checked]:bg-secondary  shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 "
        )}
      />

      <SunIcon className=" absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-100 " />
      <MoonIcon className=" relative top-0 left-0  h-[1.2rem] w-[1.2rem] rotate-100 scale-100 transition-all dark:rotate-0 dark:scale-100" />
    </SwitchPrimitives.Root>
  );
});
Switch.displayName = SwitchPrimitives.Root.displayName;

export default function ModeToggleSwitch() {
  const { setTheme, resolvedTheme } = useTheme();

  const themetoggle = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };
  console.log(resolvedTheme === "dark" ? true : false);
  const [ThemeState, setThemeState] = React.useState<"dark" | "light">();
  return (
    <Switch
      checked={resolvedTheme === "dark" ? true : false}
      onClick={() => themetoggle()}
    />
  );
}

export { ModeToggleSwitch };
