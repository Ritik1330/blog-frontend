import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
// import { Card,CardContent} from "./ui/card";


export type CardProps = {
  label: string;
  icon: LucideIcon;
  count: string;
  description: string;
};

export  function OverviewCard(props: CardProps) {
  return (
    <Card >
   
      <section className="flex justify-between gap-1">
        <p>{props.label}</p>
        <props.icon className="h-4 w-4 " />
      </section>
      <section className="flex flex-col gap-">
        <h2 className="text-2xl font-semibold">{props.count}</h2>
        <p className="text-xs">{props.description}</p>
      </section>
 
    </Card>
  );
}

export default function Card(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "flex w-full flex-col gap-3 rounded-xl border p-5 shadow",
        props.className
      )}
    />
  );
}
