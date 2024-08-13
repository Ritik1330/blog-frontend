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
      <article className="mx-4 md:mx-16 lg:mx-24 xl:mx-36 2xl:mx-auto 2xl:max-w-7xl py-6 lg:py-3">
        <Ticker />
        <div className="w-full bg mt-3">
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
        <div className="grid gap-2 mt-3 lg:grid-cols-3 ">
          <div className="bg-secondary  col-span-3 lg:col-span-2 ">
            <List />
            <List />
            <List />
            <List />
          </div>
          <div className="lg:col-span-1  col-span-3 hidden lg:block bg-secondary  ">
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
