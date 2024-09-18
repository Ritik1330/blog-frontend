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

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <article className="mx-4 min-h-dvh py-6 md:mx-16 lg:mx-24 lg:py-3 xl:mx-36 2xl:mx-auto 2xl:max-w-7xl">
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
          <div className="col-span-3 flex flex-col gap-3 lg:col-span-2">
            <List />
            <List />
            <List />
            <List />
          </div>
          <div className="col-span-3 flex flex-col gap-3 lg:col-span-1">
            <RHS_1 />
            <RHS_1 />
            <RHS_1 />
            <RHS_1 />
            <RHS_1 />
            <RHS_1 />
          </div>
        </div>
        <div className="h-96"></div>
      </article>
    </>
  );
}
