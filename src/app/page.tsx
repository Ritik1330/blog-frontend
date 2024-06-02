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
      <article className=" mx-3 sm:mx-10 my-3">
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
            <LHS_1 />
            <LHS_2 />
            <LHS_3 />
          </div>
          <div className="lg:col-span-1  col-span-3 hidden lg:block bg-secondary  ">
            <RHS_1 />
            <RHS_1 />
          </div>
        </div>
        <div className="h-96"></div>
      </article>

      <div className="h-96"></div>
    </>
  );
}
