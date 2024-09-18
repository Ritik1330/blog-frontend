import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type Props = {};

export default function List({}: Props) {
  return (
    <Link href={""}>
      <div className="flex flex-col gap-3 rounded-sm border-b bg-secondary p-3 sm:flex-row">
        <Image
          className="min-h-36 w-auto"
          width={100}
          height={75}
          src={"https://static.toiimg.com/photo/98732649/Ayodhya-temple.jpg"}
          alt=""
        />
        <div>
          <time className="text-xs tracking-tight text-gray-600 dark:text-gray-300">
            Monday , 20 jun 2024
          </time>
          <h3 className="line-clamp-2 text-xl font-semibold tracking-tight sm:text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            architecto ex quia neque praesentium velit adipisci excepturi illum
            ipsam eaque non natus dolorem dignissimos ea laboriosam molestiae,
            aperiam ducimus porro!
          </h3>
          <p className="line-clamp-3 text-sm font-normal sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            molestias voluptates pariatur odio quas corporis asperiores soluta
            nihil dolores, voluptatibus ipsa sequi aspernatur repudiandae
            consectetur. Consequatur illo dolorem alias commodi! molestias
            voluptates pariatur odio quas corporis asperiores soluta nihil
            dolores, voluptatibus ipsa sequi aspernatur repudiandae consectetur.
            Consequatur illo dolorem alias commodi!
          </p>
        </div>
      </div>
    </Link>
  );
}
