import Header from "@/components/theme/Header/Header";
import LHS_1 from "@/components/theme/Home/LHS_1";
import LHS_2 from "@/components/theme/Home/LHS_2";
import LHS_3 from "@/components/theme/Home/LHS_3";
import RHS_1 from "@/components/theme/RHS_1";
import Ticker from "@/components/theme/Ticker";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <article className="mx-4 md:mx-16 lg:mx-24 xl:mx-36 2xl:mx-auto 2xl:max-w-7xl py-6 lg:py-3">
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
          <div className="col-span-3 bg-secondary lg:col-span-2">
            <LHS_1 />
            <LHS_2 />
            <LHS_3 />
          </div>
          <div className="col-span-3 hidden bg-secondary lg:col-span-1 lg:block">
            <RHS_1 />
            <RHS_1 />
          </div>
        </div>
      </article>
    </>
  );
}
