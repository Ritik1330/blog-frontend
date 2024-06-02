import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LHS_2() {
  return (
    <div className=" border-b p-3 dark:border-b-slate-700">
      <Link href={"#"}>
        <div className="flex w-full items-center justify-between ">
          <h3 className="font-semibold text-2xl">India</h3>
          <div className="text-primary">View More</div>
        </div>
      </Link>
      <div className="grid sm:grid-cols-5 gap-3  ">
        <div className="w-full relative sm:col-span-3">
          <Image
            className="w-full max-h-[240px] rounded object-cover md:col-span-1"
            src="https://static.toiimg.com/photo/98732649/Ayodhya-temple.jpg"
            width={1200}
            height={800}
            alt="Picture of the author"
          />
        </div>
        <div className="sm:col-span-2 ">
          <h6 className="text-gray-600 tracking-tight text-xs font-semibold">
            22 jun 2024
          </h6>
          <h3 className=" line-clamp-2  font-medium text-xl leading-loose tracking-tight lg:text-3xl  my-2 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis eius ad, soluta quo tempora beatae maxime odit magnam
            laudantium quod veniam rerum vel sed harum. Impedit ipsam distinctio
            fuga ea.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis eius ad, soluta quo tempora beatae maxime odit magnam
            laudantium quod veniam rerum vel sed harum. Impedit ipsam distinctio
            fuga ea.
          </h3>
          <h4 className="line-clamp-4 text-sm tracking-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis eius ad, soluta quo tempora beatae maxime odit magnam
            laudantium quod veniam rerum vel sed harum. Impedit ipsam distinctio
            fuga ea.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis eius ad, soluta quo tempora beatae maxime odit magnam
            laudantium quod veniam rerum vel sed harum. Impedit ipsam distinctio
            fuga ea.
          </h4>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 gap-3 my-3">
        <div className="md:col-span-1 flex ">
          <Image
            className=" max-h-[100px] max-w-[100px] rounded object-cover md:col-span-1"
            src="https://static.toiimg.com/thumb/msid-109951524.jpg"
            width={100}
            height={100}
            alt="Picture of the author"
          />

          <h3 className=" line-clamp-3  font-medium text-base  tracking-tight mx-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis eius ad, soluta quo tempora beatae maxime odit magnam
            laudantium quod veniam rerum vel sed harum. Impedit ipsam distinctio
            fuga ea.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis eius ad, soluta quo tempora beatae maxime odit magnam
            laudantium quod veniam rerum vel sed harum. Impedit ipsam distinctio
            fuga ea.
          </h3>
        </div>
      </div>
    </div>
  );
}
