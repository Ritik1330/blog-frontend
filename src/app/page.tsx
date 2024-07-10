// import Header from "@/components/theme/Header/Header";
// import LHS_1 from "@/components/theme/Home/LHS_1";
// import LHS_2 from "@/components/theme/Home/LHS_2";
// import LHS_3 from "@/components/theme/Home/LHS_3";
// import RHS_1 from "@/components/theme/RHS_1";
// import Ticker from "@/components/theme/Ticker";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb";

// import Image from "next/image";

// export default function Home() {
//   return (
//     <>
//       <article className=" mx-3 sm:mx-10 my-3">
//         <Ticker />
//         <div className="w-full bg mt-3">
//           <Breadcrumb>
//             <BreadcrumbList>
//               <BreadcrumbItem>
//                 <BreadcrumbLink href="/">Home</BreadcrumbLink>
//               </BreadcrumbItem>
//               <BreadcrumbSeparator />
//               <BreadcrumbItem>
//                 <BreadcrumbLink href="/components">Components</BreadcrumbLink>
//               </BreadcrumbItem>
//               <BreadcrumbSeparator />
//               <BreadcrumbItem>
//                 <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
//               </BreadcrumbItem>
//             </BreadcrumbList>
//           </Breadcrumb>
//         </div>
//         <div className="grid gap-2 mt-3 lg:grid-cols-3 ">
//           <div className="bg-secondary  col-span-3 lg:col-span-2 ">
//             <LHS_1 />
//             <LHS_2 />
//             <LHS_3 />
//           </div>
//           <div className="lg:col-span-1  col-span-3 hidden lg:block bg-secondary  ">
//             <RHS_1 />
//             <RHS_1 />
//           </div>
//         </div>
//         <div className="h-96"></div>
//       </article>

//       <div className="h-96"></div>
//     </>
//   );
// }

"use client";
import dynamic from "next/dynamic";
const EditorNoSSR = dynamic(() => import("@/components/EditorNoSSR"), {
  ssr: false,
});
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";

import { ImagePlus, Trash2, ExternalLink, ArrowDownAZ } from "lucide-react";
import Link from "next/link";
// import "./editorCustom.css";
import Card from "@/components/Card";
import React, { use, useEffect, useState } from "react";
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import { useGetAllTags, useTranslater, useUplodImage } from "@/query/hooks";
import Image from "next/image";
import { Tag, TagInput } from "emblor";
import { extractTexts, transformedTags } from "@/helpers/tagsFilter";
import { slugBuilder } from "@/helpers/slug";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ArticleInterface } from "@/types";

type Props = {};

// Define the schemaData schema
const SchemaDataSchema = z.object({
  type: z.string().optional(),
  key: z.string().optional(),
  data: z.array(z.record(z.any())).optional(),
});

const formSchema = z.object({
  title: z.string().min(20, {
    message: "Title must be at least 20 characters.",
  }),
  summary: z.string().optional(),
  description: z.string().optional(),
  image: z.string().optional(),
  // .url(),
  // blocks:z.array[],
  type: z.enum(["article", "slide", "webstory", "ePaper"]),
  primaryCategory: z.string().optional(),
  // categories: z
  //   .array(z.string())
  //   .nonempty("Please enter at least one Category"),
  // subcategories: z
  //   .array(z.string())
  //   .nonempty("Please enter at least one Subcategory"),
  slug: z.string().min(1, {
    message: "Please enter Slug.",
  }),
  //general
  tags: z
    .array(
      z.object({
        id: z.string(),
        text: z.string(),
      }),
    )
    .optional(),
  authors: z
    .array(
      z.object({
        id: z.string(),
        text: z.string(),
      }),
    )
    .optional(),
  // tags: z.array(z.string()).nonempty("Please enter at least one Tag"),
  // author: z.array(z.string()).optional(),
  status: z.enum(["Draft", "Published", "Archived"]),
  // publicAt: z.date().optional(),

  // metadata: MetaDataSchema.optional(),
  // socialData: SocialDataSchema.optional(),
  // schemaData: z.array(SchemaDataSchema).optional(),
  // views: z.string().nonempty("Please enter Views"),
  // version: z.string().nonempty("Please enter Version"),

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

  // Social data

  ogtitle: z.string().optional(),
  ogImage: z.string().optional(),
  hashtags: z
    .array(
      z.object({
        id: z.string(),
        text: z.string(),
      }),
    )
    .optional(),
  //Schema
  articleTypeSchema: z.enum(["None", "Article", "NewsArticle", "BlogPosting"]),
  otherSchema: z.any()

});
// ---------hero image Schema--------

const heroImageSchema = z.object({
  title: z.string().min(1, "Hero Image alt text is required fis this line"),
  image: z
    .any()
    .refine((image) => image?.length == 1, "Hero image is required.")
    .refine(
      (image) => image[0]?.size <= 1024 * 1024 * 2,
      `Max HeroImage size is 2MB.`,
    ),

  credits: z.string(),
});

const metaSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  keywords: z.array(
    z.object({
      id: z.string(),
      text: z.string(),
    }),
  ),
  CanonicalUrl: z.string(),
  index: z.boolean(),
});

export default function Page({ }: Props) {
  const {
    mutate: HeroImageMutate,
    isError,
    data: heroimagedata,
    error,
    isPending,
  } = useUplodImage();

  const {
    data: AllTagsData,
    isError: TagsFetchFail,
    isFetched: isTagsFetched,
    isFetching,
    isRefetching,
    // refetch,
  } = useGetAllTags();

  const {
    mutate: translaterMutate,
    data: slugData,
    isSuccess: slugIsSuccess,
  } = useTranslater();


  const postform = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      summary: "",
      description: "",
      image: "",
      // blocks: [],
      type: "article",
      primaryCategory: "",
      // categories: [],
      // subcategories: [],
      slug: "",
      tags: [],
      authors: [],
      status: "Published",

      // updatedBy: [],
      // publicAt: undefined,
      //meta data
      metatitle: "",
      metaDescription: "",
      keywords: [],
      canonicalUrl: "",
      index: true,

      // socialData
      ogtitle: "",
      ogImage: "",
      hashtags: [],
      //Schema
      articleTypeSchema: "None",

      // version: "1",
    },
  });

  const [tags, setTags] = React.useState<Tag[]>([]);
  const [activeTagsIndex, setActiveTagsIndex] = React.useState<number | null>(
    null,
  );
  const [authors, setAuthors] = React.useState<Tag[]>([]);
  const [activeAuthorsIndex, setActiveAuthorsIndex] = React.useState<
    number | null
  >(null);
  const [keywords, setKeywords] = React.useState<Tag[]>([]);
  const [activeKeywordIndex, setActiveKeywordIndex] = React.useState<
    number | null
  >(null);
  const [hashtags, setHashtags] = React.useState<Tag[]>([]);
  const [activeHashtagIndex, setActiveHashtagIndex] = React.useState<
    number | null
  >(null);
  const { setValue } = postform;

  const heroImageForm = useForm<z.infer<typeof heroImageSchema>>({
    // resolver: zodResolver(heroImageSchema),
    defaultValues: {
      image: undefined,
      title: "",
      credits: "",
    },
    mode: "onChange",
    resolver: zodResolver(heroImageSchema),
  });
  const fileRef = heroImageForm.register("image", { required: true });

  // const metaform = useForm<z.infer<typeof metaSchema>>({
  //   resolver: zodResolver(metaSchema),
  //   defaultValues: {
  //     title: "",
  //     description: "",
  //     keywords: [],
  //     CanonicalUrl: "",
  //     index: true,
  //   },
  // });

  // const [keywords, setKeywords] = React.useState<Tag[]>([]);
  // const { setValue } = metaform;

  const articleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    if (!data.primaryCategory) {
      toast.error("Please select the primary section.")
      return
    }
    var keywordTexts: string[] = [];

    if (data.keywords !== undefined && data.keywords !== null) {
      keywordTexts = extractTexts(data.keywords);
    }
    // const ArticleData: ArticleInterface = {
    //   ...data,
    //   // keywords: keywordTexts,
    // };



    // if (categoryToggle) {
    //   if (CategoryData.category) {
    //     console.log(CategoryData)
    //     newSubCategoryMutate(CategoryData);

    //   } else {
    //     toast.warning("CATEGORY_SLECT");
    //   }
    // } else {
    //   newCategoryMutate(CategoryData);
    // }
  };

  const [heroImagePreview, setHeroImagePreview] = useState<string | undefined>(
    undefined,
  );

  const thumbImagevalidation = (e: any) => {
    if (e?.target?.files[0]?.size / 1048576 >= 2) {
      toast.warning("Oh no,image size exceeds 2 MB.");
      return;
    }
    setHeroImagePreview(URL.createObjectURL(e.target.files![0]));
  };

  const heroImageSubmit = (e: z.infer<typeof heroImageSchema>) => {
    const formData = new FormData();
    formData.append("title", heroImageForm.getValues("title"));
    formData.append("credits", heroImageForm.getValues("credits"));
    formData.append("image", heroImageForm.getValues("image")[0]);
    HeroImageMutate(formData);
  };
  const metaTagSubmit = (e: z.infer<typeof metaSchema>) => {
    // console.log(metaform)
    console.log(e);
    const formData = new FormData();
    // formData.append("title", );
    // formData.append("title",e.keywords );
    e.keywords.forEach((keyword) => {
      formData.append("keywords[]", keyword.id);
      formData.append("keywords[]", keyword.text);
    });
  };


  const slugTranslater = async (e: string) => {
    const text = postform.getValues("title");

    if (text) {
      translaterMutate(text);
    } else {
      toast.warning("Please Enter Category Name");
    }
  };

  const slugSeter = async (e: string) => {
    const generatedSlug = await slugBuilder(e);

    setValue("slug", generatedSlug);
  };


  useEffect(() => {
    let str = slugData?.translation;
    if (str) {
      slugSeter(str);
    }
    if (heroimagedata) {
      setValue("image", heroimagedata.image.url);
      console.log(heroimagedata.image.url)
    }
  }, [slugIsSuccess, heroimagedata]);

  return (

    <div className="flex flex-col sm:gap-4 sm:py-4 ">
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
        {/* <div className="relative ml-auto flex-1 md:grow-0">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
          />
        </div> */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="overflow-hidden rounded-full"
            >
              <Image
                src="/placeholder-user.jpg"
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
        <div className="flex w-full flex-col gap-4  bg-muted/40">
          <div> <PageTitle title={`Create Article`} />
            <div></div>
          </div>

          <Card className="rounded-md bg-background ">
            <Form {...postform}>
              <form
                onSubmit={postform.handleSubmit(articleSubmit)}
                className="space-y-8"
              >
                <div className="flex w-full justify-end gap-4 pr-5">
                  <Button variant="outline" asChild>
                    <Link href="/preview">save</Link>
                  </Button>
                  <Button variant="secondary" asChild>
                    <Link href="/preview">Preview</Link>
                  </Button>
                  <Button type="submit">Publish</Button>
                </div>
                <FormField
                  control={postform.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title *</FormLabel>
                      <FormControl>
                        <Input placeholder="Title" type="text" {...field} />
                      </FormControl>
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
                          <FormLabel>slug</FormLabel>
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
                  <div className=" content-center  p-4">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipContent className=" -top-4">
                          <p>Click heare for Generate slug</p>
                        </TooltipContent>
                        <TooltipTrigger asChild>
                          <ArrowDownAZ onClick={() => slugTranslater("p")} />
                        </TooltipTrigger>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
                <FormField
                  control={postform.control}
                  name="summary"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Summary</FormLabel>
                      <FormControl>
                        <Input placeholder="Summary" type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={postform.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter Description"
                          type="text"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* HeroImageDialog */}
                <Dialog>
                  <DialogTrigger className="text-neutral-90 inline-flex cursor-pointer items-center rounded-md bg-secondary p-2">
                    <ImagePlus />
                    <span className="whitespace-nowrap px-1">add hero image</span>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        Add Hero Image
                        <i className="text-xs font-normal">(Max size is 2MB)</i>
                      </DialogTitle>
                      {/* <DialogDescription> */}
                      <Tabs defaultValue="account" className="w-full">
                        <TabsList>
                          <TabsTrigger value="upload">Upload</TabsTrigger>
                          <TabsTrigger value="search">Search</TabsTrigger>
                        </TabsList>

                        <TabsContent value="upload">
                          <Form {...heroImageForm}>
                            <form
                              id="heroImagefromID"
                              onSubmit={heroImageForm.handleSubmit(heroImageSubmit)}
                              className=""
                            >
                              <div className="absolute right-6 top-12">
                                <Button id="heroImagefromID" type="submit">
                                  HeroImage Submit
                                </Button>
                              </div>

                              {heroImagePreview && (
                                <div className="m-auto flex max-h-40 max-w-52 flex-row bg-red-700">
                                  <Image
                                    width={100}
                                    height={100}
                                    className="rounded-md"
                                    src={heroImagePreview}
                                    alt=""
                                  />
                                  <div className="right-8 flex h-fit flex-row gap-3">
                                    <div className="drop-shadow-md hover:text-blue-300 hover:drop-shadow-2xl">
                                      <ExternalLink />
                                    </div>
                                    <div className="text-red-500 hover:text-red-700">
                                      <Trash2 />
                                    </div>
                                  </div>
                                </div>
                              )}
                              {!heroImagePreview && (
                                <FormField
                                  control={heroImageForm.control}
                                  name="image"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>image *</FormLabel>
                                      <FormControl>
                                        <Input
                                          placeholder="Hero Image"
                                          type="file"
                                          accept="image/jpeg,image/jpg,image/png,image/webp"
                                          {...fileRef}
                                          onChangeCapture={(e) =>
                                            thumbImagevalidation(e)
                                          }
                                        />
                                      </FormControl>
                                      <FormMessage className="mt-0" />
                                    </FormItem>
                                  )}
                                />
                              )}
                              <FormField
                                control={heroImageForm.control}
                                name="title"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Image Alt Text *</FormLabel>
                                    <FormControl>
                                      <Input
                                        placeholder="Image Alt Text"
                                        type="text"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage className="mt-0" />
                                  </FormItem>
                                )}
                              />
                              <FormField
                                control={heroImageForm.control}
                                name="credits"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>credits</FormLabel>
                                    <FormControl>
                                      <Input
                                        placeholder="credits"
                                        type="text"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </form>
                          </Form>
                        </TabsContent>
                        <TabsContent value="search">
                          Image insertion using search is under development.
                        </TabsContent>
                      </Tabs>
                      {/* </DialogDescription> */}
                    </DialogHeader>
                  </DialogContent>
                </Dialog>

                <EditorNoSSR />
                {/* rhs menu bar */}
                <Sheet>
                  <SheetTrigger className="fixed -right-9 top-36 -rotate-90 rounded-t-md bg-primary p-2 px-3">
                    Post Settings
                  </SheetTrigger>
                  <SheetContent className="overflow-y-auto">
                    <SheetHeader>
                      <SheetTitle>Sco & Post Setings</SheetTitle>
                      <div>
                        <Tabs defaultValue="account" className="w-full">
                          <TabsList>
                            <TabsTrigger value="general">General</TabsTrigger>
                            <TabsTrigger value="metadata">Meta Data</TabsTrigger>
                            <TabsTrigger value="social">Social</TabsTrigger>
                            <TabsTrigger value="schema">Schema</TabsTrigger>
                          </TabsList>
                          <TabsContent value="general">
                            <FormField
                              control={postform.control}
                              name="tags"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="">Tags</FormLabel>
                                  <FormControl>
                                    <TagInput
                                      className="shadow-none"
                                      enableAutocomplete={true}
                                      autocompleteOptions={transformedTags(AllTagsData?.tags)}
                                      // restrictTagsToAutocompleteOptions={true}
                                      {...field}
                                      placeholder="Enter a Tags"
                                      tags={tags}
                                      setTags={(newTags) => {
                                        setTags(newTags);
                                        setValue(
                                          "tags",
                                          newTags as [Tag, ...Tag[]],
                                        );
                                      }}
                                      activeTagIndex={activeTagsIndex}
                                      setActiveTagIndex={setActiveTagsIndex}
                                    />
                                  </FormControl>
                                  <FormDescription>
                                    Minimum 5 and maximum 10 tags are recommended.
                                  </FormDescription>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={postform.control}
                              name="authors"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="">Authors</FormLabel>
                                  <FormControl>
                                    <TagInput
                                      styleClasses={{
                                        input: 'shadow-none',
                                      }}
                                      className=""
                                      {...field}
                                      placeholder="Enter a Authors"
                                      tags={authors}
                                      setTags={(newTags) => {
                                        setAuthors(newTags);
                                        setValue(
                                          "authors",
                                          newTags as [Tag, ...Tag[]],
                                        );
                                      }}
                                      activeTagIndex={activeAuthorsIndex}
                                      setActiveTagIndex={setActiveAuthorsIndex}
                                    />
                                  </FormControl>
                                  <FormDescription>
                                    Minimum 5 and maximum 10 tags are recommended.
                                  </FormDescription>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </TabsContent>
                          <TabsContent value="metadata">
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
                                        input: 'shadow-none',
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
                                    Minimum 5 and maximum 10 keywords are
                                    recommended.
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
                          </TabsContent>
                          <TabsContent value="social">
                            <FormField
                              control={postform.control}
                              name="ogtitle"
                              render={({ field }) => {
                                return (
                                  <FormItem>
                                    <FormLabel>Ogtitle</FormLabel>
                                    <FormControl>
                                      <Input
                                        placeholder="Enter ogtitle"
                                        type="text"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormDescription>
                                      This is ogtitle
                                    </FormDescription>
                                    <FormMessage />
                                  </FormItem>
                                );
                              }}
                            />
                            <FormField
                              control={postform.control}
                              name="ogImage"
                              render={({ field }) => {
                                return (
                                  <FormItem>
                                    <FormLabel>ogImage</FormLabel>
                                    <FormControl>
                                      <Input
                                        placeholder="Enter ogImage"
                                        type="text"
                                        {...field}
                                      />
                                    </FormControl>
                                    <FormDescription>
                                      This is ogtitle
                                    </FormDescription>
                                    <FormMessage />
                                  </FormItem>
                                );
                              }}
                            />
                            <FormField
                              control={postform.control}
                              name="hashtags"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel >hashtags</FormLabel>
                                  <FormControl>
                                    <TagInput
                                      styleClasses={{
                                        input: 'shadow-none',
                                      }} F
                                      {...field}
                                      placeholder="Enter a hashtags"
                                      tags={hashtags}
                                      setTags={(newTags) => {
                                        setHashtags(newTags);
                                        setValue(
                                          "hashtags",
                                          newTags as [Tag, ...Tag[]],
                                        );
                                      }}
                                      activeTagIndex={activeHashtagIndex}
                                      setActiveTagIndex={setActiveHashtagIndex}
                                    />
                                  </FormControl>
                                  <FormDescription>
                                    Minimum 5 and maximum 10 HashTags are
                                    recommended.
                                  </FormDescription>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </TabsContent>
                          <TabsContent value="schema">

                            <FormField
                              control={postform.control}
                              name="articleTypeSchema"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Article Type Schema</FormLabel>
                                  <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                  >
                                    <FormControl>
                                      <SelectTrigger>
                                        <SelectValue placeholder="Select a verified email to display" />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      <SelectItem value="None">None</SelectItem>
                                      <SelectItem value="Article">Article</SelectItem>
                                      <SelectItem value="NewsArticle">NewsArticle</SelectItem>
                                      <SelectItem value="BlogPosting">BlogPosting</SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <FormDescription>
                                    You can manage article Type Schema.
                                  </FormDescription>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </TabsContent>
                        </Tabs>
                      </div>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              </form>
            </Form>
          </Card>
        </div>
      </main>
    </div>


  );
}
