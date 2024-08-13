"use client";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@/components/Editor"), {
  ssr: false,
});
import { EditorProps } from "@/components/Editor";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";

import { ArrowDownAZ, Search } from "lucide-react";
import Link from "next/link";
import Card from "@/components/Card";
import React, { use, useCallback, useEffect, useState } from "react";
import PageTitle from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { any, string, z } from "zod";
// import { Tag, TagInput } from "@/components/tag-input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  useAllstaticPage,
  useNewStaticPage,
  useTranslater,
} from "@/query/hooks";
import Image from "next/image";
import { Tag, TagInput } from "emblor";
import { extractTexts, transformedTags } from "@/helpers/tagsFilter";
import { slugBuilder } from "@/helpers/slug";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { StaticPageType } from "@/types";

type Props = {};

// Define the schemaData schema
const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),

  content: z.any(),

  slug: z.string().min(1, {
    message: "Please enter Slug.",
  }),

  status: z.enum(["Public", "Private"]),

  // meta data
  metatitle: z.string().optional(),
  metaDescription: z.string().optional(),
  keywords: z
    .array(
      z.object({
        id: z.string(),
        text: z.string(),
      }),
    )
    .optional(),
  canonicalUrl: z.string().optional(),
  index: z.boolean(),
});

export default function Page({}: Props) {
  const {
    mutate: staticPageMutate,
    isError: isStaticPageMutationsError,
    data: staticPageData,
    error: staticPageError,
  } = useNewStaticPage();
  const {
    data: staticPagesData,
    isError: staticPagesFetchFail,
    isFetched: staticPagesIsFetched,
    refetch: staticPagesRefetch,
  } = useAllstaticPage();

  const {
    mutate: translaterMutate,
    data: slugData,
    isSuccess: slugIsSuccess,
  } = useTranslater();

  const postform = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: any,
      slug: "",
      status: "Public",

      metatitle: "",
      metaDescription: "",
      keywords: [],
      canonicalUrl: "",
      index: true,
    },
  });

  const [keywords, setKeywords] = React.useState<Tag[]>([]);
  const [activeKeywordIndex, setActiveKeywordIndex] = React.useState<
    number | null
  >(null);

  const [preContent, setPreContent] = useState<EditorProps["data"]>(null);

  const { setValue } = postform;

  const slugTranslater = async (e: string) => {
    const text = postform.getValues("title");

    if (text) {
      translaterMutate(text);
    } else {
      toast.warning("Please Enter Category Name");
    }
  };

  const handleContentChange = (newContent: EditorProps["data"]) => {
    setValue("content", newContent);
  };

  const articleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);

    const metaData = {
      metatitle: data?.metatitle,
      metaDescription: data?.metaDescription,
      keywords: data.keywords ? extractTexts(data.keywords) : [],
      canonicalUrl: data?.canonicalUrl,
      index: data?.index,
    };

    const StaticPageData: StaticPageType = {
      title: data.title,
      content: data?.content,
      slug: data.slug,
      status: data.status,
      metaData: metaData,
    };

    console.log(StaticPageData);
    staticPageMutate(StaticPageData);
  };

  const slugSeter = useCallback(
    async (e: string) => {
      const generatedSlug = await slugBuilder(e);
      setValue("slug", generatedSlug);
    },
    [setValue],
  );

  useEffect(() => {
    if (slugData?.translation) {
      slugSeter(slugData.translation);
    }
  }, [slugSeter, slugData]);

  return (
    <div className="flex flex-col sm:gap-4 sm:py-4">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Breadcrumb className="hidden md:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="#">Dashboard</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="#">Orders</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Recent Orders</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="relative ml-auto flex-1 md:grow-0">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="overflow-hidden rounded-full"
            >
              <Image
                src="https://github.com/shadcn.png"
                width={36}
                height={36}
                alt="Avatar"
                className="overflow-hidden rounded-full"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <div className="flex w-full flex-col gap-4 bg-muted/40">
          <div className="flex justify-between">
            <PageTitle title={`Create Static Page`} />
            <div className="min-w-60">
              <Select
                onValueChange={(e) => {
                  // setValue("primaryCategory", e);
                }}
              >
                {/* <FormControl> */}
                <SelectTrigger>
                  <SelectValue placeholder="Select Page" />
                </SelectTrigger>
                {/* </FormControl> */}
                <SelectContent>
                  {staticPagesIsFetched && (
                    <div>
                      {staticPagesData?.pages?.map((e: any, index: any) => (
                        <SelectItem key={index} value={e._id}>
                          {e.title}
                        </SelectItem>
                      ))}
                    </div>
                  )}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Card className="rounded-md bg-background">
            <Form {...postform}>
              <form
                id="article-form"
                onSubmit={postform.handleSubmit(articleSubmit)}
                className="space-y-8"
              >
                <div className="flex w-full justify-end gap-4 pr-5">
                  <Button variant="secondary" asChild>
                    <Link href="/preview">Preview</Link>
                  </Button>
                  <Button id="article-form" type="submit">
                    Publish
                  </Button>
                </div>
                <FormField
                  control={postform.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title*</FormLabel>
                      <FormControl>
                        <Input placeholder="Title" type="text" {...field} />
                      </FormControl>
                      <FormDescription>
                        Recommended size is a maximum of 50 Characters
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex w-full">
                  <FormField
                    control={postform.control}
                    name="slug"
                    render={({ field }) => {
                      return (
                        <FormItem className="w-full">
                          <FormLabel>slug*</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Slug"
                              // defaultValue={"riti"}
                              onChangeCapture={(e) =>
                                slugSeter(e.currentTarget.value)
                              }
                              type="text"
                              {...field}
                              // value={slug}
                            />
                          </FormControl>
                          <FormDescription>
                            Recommended size is a maximum of 50 Characters
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      );
                    }}
                  />
                  <div className="content-center p-4">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipContent className="-top-4">
                          <p>Click heare for Generate slug</p>
                        </TooltipContent>
                        <TooltipTrigger asChild>
                          <ArrowDownAZ onClick={() => slugTranslater("p")} />
                        </TooltipTrigger>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>

                {/* rhs menu bar */}
                <Sheet>
                  <SheetTrigger className="fixed -right-9 top-36 -rotate-90 rounded-t-md bg-primary p-2 px-3">
                    Post Settings
                  </SheetTrigger>
                  <SheetContent className="overflow-y-auto">
                    <SheetHeader>
                      <SheetTitle>Sco Setings</SheetTitle>
                      <FormField
                        control={postform.control}
                        name="metatitle"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>meta title</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter Meta title"
                                  type="text"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                Recommended size is a maximum of 100 characters.
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                      <FormField
                        control={postform.control}
                        name="metaDescription"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>meta Description</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter Meta Description"
                                  type="text"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                Recommended size is a maximum of 500 characters.
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                      <FormField
                        control={postform.control}
                        name="keywords"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="">keywords</FormLabel>
                            <FormControl>
                              <TagInput
                                styleClasses={{
                                  input: "shadow-none",
                                }}
                                {...field}
                                placeholder="Enter a Keyword"
                                tags={keywords}
                                setTags={(newTags) => {
                                  setKeywords(newTags);
                                  setValue(
                                    "keywords",
                                    newTags as [Tag, ...Tag[]],
                                  );
                                }}
                                activeTagIndex={activeKeywordIndex}
                                setActiveTagIndex={setActiveKeywordIndex}
                              />
                            </FormControl>
                            <FormDescription>
                              Minimum 5 and maximum 10 keywords are recommended.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={postform.control}
                        name="canonicalUrl"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Canonical Url</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Enter Canonical Url"
                                  type="text"
                                  {...field}
                                />
                              </FormControl>
                              <FormDescription>
                                This is Canonical Url
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                      <FormField
                        control={postform.control}
                        name="index"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Index</FormLabel>
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormDescription>
                                If you want to index it, leave the checkbox
                                checked.
                              </FormDescription>
                            </div>
                          </FormItem>
                        )}
                      />
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              </form>
            </Form>

            <div className="mt-8 flex flex-col space-y-2">
              <h2 className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Body*
              </h2>
              <Editor
                data={preContent}
                onChange={handleContentChange}
                holder="editor_create"
              />
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
