import Image from "next/image";
import React from "react";

export type ViewsProps = {
  title: string;
  summary: string;
  views: string;
  image: string;
};

export default function ViewsCard(props: ViewsProps) {
  return (
    <div className="flex flex-wrap justify-between gap-3">
      <section className="flex justify-between gap-3">
        <div className=" h-12 w-12  p-1">
          <Image
            className="rounded-[2px] border-gray-600 border-[.5px] dark:border-gray-100 "
            src={props.image}
            width={200}
            height={200}
            alt="Picture of the Article"
          />
        </div>
        <div className="text-sm">
          <p>{props.title}</p>
          <div className="text-ellipsis overflow-hidden whitespace-nowrap  sm:max-w-96  max-w-32  text-gray-400 dark:text-white ">
            {props.summary}
          </div>
        </div>
      </section>
      <p>{props.views}</p>
    </div>
  );
}
