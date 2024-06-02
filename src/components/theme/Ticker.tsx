import { TrendingUp } from "lucide-react";
import React from "react";

type Props = {};

export default function Ticker({}: Props) {
  return (
    <div className="w-full h-7 bg-blue-300 flex items-center overflow-hidden">
      <div className="relative top-0  min-w-fit p-3 font-semibold bg-red-600 flex border-r-2">
        <TrendingUp className="mr-2" />
        Breaking News
      </div>

      <div className="overflow-x-hidden">
        <div className="py-12 animate-marquee whitespace-nowrap ">
          <span className=" mx-4">Marquee Item 1</span>
          <span className=" mx-4">Marquee Item 1</span>
          <span className=" mx-4">Marquee Item 1</span>
          <span className=" mx-4">Marquee Item 1</span>
          <span className=" mx-4">Marquee Item 1</span>
        </div>
      </div>
    </div>
  );
}
