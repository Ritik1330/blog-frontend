import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LHS_2() {
  return (
    <div className="border-b bg-muted/85 p-3 dark:border-b-slate-700">
      <Link href={"#"}>
        <div className="flex w-full items-center justify-between">
          <h3 className="text-2xl font-semibold">India</h3>
          <div className="text-primary">View More</div>
        </div>
      </Link>
      <div className="grid gap-3 sm:grid-cols-5">
        <div className="relative w-full sm:col-span-3">
          <Image
            className="max-h-[240px] w-full rounded object-cover md:col-span-1"
            src="https://static.toiimg.com/photo/98732649/Ayodhya-temple.jpg"
            width={1200}
            height={800}
            alt="Picture of the author"
          />
        </div>
        <div className="sm:col-span-2">
          <h6 className="text-xs font-semibold tracking-tight text-gray-600">
            22 jun 2024
          </h6>
          <h3 className="my-2 line-clamp-2 text-xl font-medium leading-loose tracking-tight lg:text-3xl">
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
      <div className="my-3 grid gap-3 sm:grid-cols-3">
        <div className="flex md:col-span-1">
          <Image
            className="max-h-[100px] max-w-[100px] rounded object-cover md:col-span-1"
            src="https://static.toiimg.com/thumb/msid-109951524.jpg"
            width={100}
            height={100}
            alt="Picture of the author"
          />

          <h3 className="mx-3 line-clamp-3 text-base font-medium tracking-tight">
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
