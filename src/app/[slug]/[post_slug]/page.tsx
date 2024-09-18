import List from "@/components/theme/List";
import RHS_1 from "@/components/theme/RHS_1";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Ticker from "@/components/theme/Ticker";
import Image from "next/image";
import { postDetails } from "@/query/services";

// import parse from "html-react-parser";

import {
  ParagraphBlock,
  TableBlock,
  RawBlock,
  CodeBlock,
  DelimiterBlock,
  EmbedBlock,
  HeaderBlock,
  ListBlock,
  QuoteBlock,
  ChecklistBlock,
} from "@/components/editorjs/";
import { notFound } from "next/navigation";

type Props = any;

export default async function page({ params }: Props) {
  const parmes = params?.post_slug;
  const id = parmes?.split("-")?.pop();
  const postData = await postDetails(id);
  if (!postData?.post) {
    notFound();
  }

  return (
    <>
      <article className="mx-4 py-6 md:mx-16 lg:mx-24 lg:py-3 xl:mx-36 2xl:mx-auto 2xl:max-w-7xl">
        <Ticker />
        <div className="bg mt-3 w-full">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="mt-3 grid gap-2 lg:grid-cols-3">
          <div className="col-span-3 bg-muted/40 p-3 lg:col-span-2">
            <h1 className="lg:font-4xl text-3xl font-bold leading-relaxed">
              {postData?.post?.title}
            </h1>
            <p className="mt-3 font-bold leading-7 text-gray-700">
              {postData?.post?.summary}
            </p>
            <p className="mt-2 pb-2 font-semibold">
              Auther :
              <a className="font-normal" href="/category/politics">
                Ritik
              </a>
              , Last Updated :
              <span className="font-normal"> 30 Jan 2024 04:07 PM</span>
            </p>
            <Image
              className=""
              width={700}
              height={400}
              src={
                postData?.post?.image?.url
                  ? postData?.post?.image?.url
                  : "https://res.cloudinary.com/dbacwthnv/image/upload/v1722318540/blogapp/icjtq3trvfayddab4fiy.jpg"
              }
              alt={postData?.post?.image?.title}
              priority
            />

            {postData?.post?.content?.blocks &&
              postData?.post?.content?.blocks?.map((block: any) => {
                switch (block.type) {
                  case "paragraph":
                    return (
                      <ParagraphBlock
                        className="mt-3 leading-normal"
                        key={block.id}
                        data={block.data}
                      ></ParagraphBlock>
                    );
                  case "table":
                    return (
                      <TableBlock data={block.data} key={block.id}></TableBlock>
                    );
                  case "raw":
                    return (
                      <RawBlock
                        className="mt-3 leading-normal"
                        key={block.id}
                        data={block?.data}
                      ></RawBlock>
                    );
                  case "code":
                    return (
                      <CodeBlock
                        className="mt-3 leading-normal"
                        key={block.id}
                        data={block.data}
                      ></CodeBlock>
                    );
                  case "delimiter":
                    return <DelimiterBlock className="mt-3"></DelimiterBlock>;

                  case "embed":
                    return (
                      <EmbedBlock
                        className="mt-3 leading-normal"
                        key={block.id}
                        data={block.data}
                      ></EmbedBlock>
                    );
                  case "header":
                    return (
                      <HeaderBlock
                        className="mt-3 leading-normal"
                        key={block.id}
                        data={block.data}
                      ></HeaderBlock>
                    );

                  // case "image":
                  //   return (
                  //     <ImageBlock
                  //       className="mt-3"
                  //       key={block.id}
                  //       data={block.data}
                  //     ></ImageBlock>
                  //   );

                  case "list":
                    return (
                      <ListBlock
                        className={"ml-6 mt-3 leading-normal"}
                        key={block.id}
                        data={block.data}
                      ></ListBlock>
                    );
                  case "quote":
                    return (
                      <QuoteBlock
                        className="mt3 leading-normal"
                        key={block.id}
                        data={block.data}
                      ></QuoteBlock>
                    );
                  case "checklist":
                    return (
                      <ChecklistBlock
                        className="mt3 leading-normal"
                        key={block.id}
                        data={block.data}
                      ></ChecklistBlock>
                    );
                  default:
                    return null;
                }
              })}

            <div className="mt-8">
              <div className="border-b">
                <h2 className="w-min whitespace-nowrap rounded-t bg-primary px-6 py-2 text-gray-100">
                  Related Tag
                </h2>
              </div>
              <div className="mt-4 flex flex-wrap gap-4">
                {postData?.post?.tags &&
                  postData?.post?.tags.map((tag: any, index: string) => (
                    <a
                      key={index}
                      className="border px-4 py-1 hover:border-red-700 hover:bg-gray-100"
                      href={tag._id}
                    >
                      {tag.name}
                    </a>
                  ))}
              </div>
            </div>
          </div>

          <div className="col-span-3 hidden bg-secondary lg:col-span-1 lg:block">
            <RHS_1 />
            <RHS_1 />
            <RHS_1 />
            <RHS_1 />
            <RHS_1 />
            <RHS_1 />
          </div>
        </div>
      </article>
    </>
  );
}
