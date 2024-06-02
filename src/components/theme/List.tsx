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
} from "@/components/ui/breadcrumb"


type Props = {};

export default function List({}: Props) {
  return (
    <Link href={""}>
      <div className="flex flex-col sm:flex-row gap-3  p-1  rounded-sm border-b">
        <Image
          className="min-h-36 w-auto"
          width={100}
          height={75}
          src={"https://static.toiimg.com/photo/98732649/Ayodhya-temple.jpg"}
          alt=""
        />
        <div>
          <time className="text-gray-600 tracking-tight text-xs dark:text-gray-300">
            Monday , 20 jun 2024
          </time>
          <h3 className="line-clamp-2  font-semibold text-xl sm:text-3xl tracking-tight ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            architecto ex quia neque praesentium velit adipisci excepturi illum
            ipsam eaque non natus dolorem dignissimos ea laboriosam molestiae,
            aperiam ducimus porro!
          </h3>
          <p className="line-clamp-3 text-sm sm:text-xl font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            molestias voluptates pariatur odio quas corporis asperiores soluta
            nihil dolores, voluptatibus ipsa sequi aspernatur repudiandae
            consectetur. Consequatur illo dolorem alias commodi!
            molestias voluptates pariatur odio quas corporis asperiores soluta
            nihil dolores, voluptatibus ipsa sequi aspernatur repudiandae
            consectetur. Consequatur illo dolorem alias commodi!
          </p>
        </div>
      </div>
    </Link>
  );
}
