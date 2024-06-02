import { MapPinnedIcon, } from "lucide-react";
import { InstagramLogoIcon, } from '@radix-ui/react-icons'


import Link from "next/link";
import React from "react";
import { InstagramIcon } from "@/assets/Icon";



type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="min-h-32 bg-secondary w-full p-3 pt-8">
      <div className=" w-full flex ">
        <Link className="pr-3 p border-r border-slate-800 dark:border-slate-400" href={"#"}>
          about Us
        </Link>
        <Link className="pr-3 border-r border-slate-800 dark:border-slate-400" href={"#"}>
          about Us
        </Link>
        <Link className="pr-3 border-r border-slate-800 dark:border-slate-400" href={"#"}>
          about Us
        </Link>
      </div>
      <div className="flex mt-3 ">
        <div className="flex gap-2 flex-col "> <div className="flex gap-1"><MapPinnedIcon/> <span>location</span></div><p>CoppyRight</p></div>
        <div className="flex"><InstagramIcon></InstagramIcon></div>
      </div>
    </footer>
  );
}
