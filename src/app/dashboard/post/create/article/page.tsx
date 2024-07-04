"use client";
import dynamic from "next/dynamic";
const EditorNoSSR = dynamic(() => import("@/components/EditorNoSSR"), {
  ssr: false,
});
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";

import { ImagePlus, Trash2, ExternalLink } from "lucide-react";
import Link from "next/link";
import "./editorCustom.css";
import Card from "@/components/Card";
import React, { useEffect, useState } from "react";
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

import { useUplodImage } from "@/query/hooks";
import Image from "next/image";
import { Tag, TagInput } from "emblor";

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
  image: z.string().url(),
  // blocks:z.array[],
  type: z.enum(["article", "slide", "webstory", "ePaper"]),
  // categories: z
  //   .array(z.string())
  //   .nonempty("Please enter at least one Category"),
  // subcategories: z
  //   .array(z.string())
  //   .nonempty("Please enter at least one Subcategory"),
  slug: z.string().min(1, {
    message: "Please enter Slug.",
  }),
  // tags: z.array(z.string()).nonempty("Please enter at least one Tag"),
  // author: z.array(z.string()).optional(),
  // status: z.enum(["draft", "published", "archived"]),
  // createdBy: z.string().nonempty("Please enter Created By"),
  // updatedBy: z.array(z.string()).optional(),
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
  // .refine(
  //   (image) =>
  //     ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(
  //       image?.type
  //     ),
  //   "Only .jpg, .jpeg, .png and .webp formats are supported."
  // ),

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

export default function Page({}: Props) {
  const {
    mutate,
    isError,
    data: heroimagedata,
    error,
    isPending,
  } = useUplodImage();
  const imageMutation = useUplodImage();
  const postform = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      summary: "",
      description: "",
      image: "https://static.toiimg.com/thumb/110200232.jpg",
      // blocks: [],
      type: "article",
      // categories: [],
      // subcategories: [],
      slug: "",
      // tags: [],
      // author: [],
      // status: "draft",
      // createdBy: "",
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

      // socialData: {
      //   ogtitle: "",
      //   ogImage: "",
      //   hashtags: [],
      // },
      // schemaData: [],
      // views: "",
      // version: "1",
    },
  });
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

  const handleSubmit1 = (e: z.infer<typeof formSchema>) => {
    alert("submit");
    console.log(postform);

    console.log("first000000");
    console.log("data", e); // Handle form submission here
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
    imageMutation.mutate(formData);
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
  // console.log(e?.target?.files[0].type);
  // console.log(image);
  // const {data } = useTestHook()

  return (
    <div className="flex w-full flex-col gap-4">
      <PageTitle title={`Create Article`} />
      {/* <Button>open</Button> */}
      <Card className="rounded-md">
        <Form {...postform}>
          <form
            onSubmit={postform.handleSubmit(handleSubmit1)}
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
            <FormField
              control={postform.control}
              name="slug"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>slug</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Meta slug"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Recommended size is up to 100 charts.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
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
                        <TabsTrigger value="metadata">Meta Data</TabsTrigger>
                        <TabsTrigger value="social">Social</TabsTrigger>
                        <TabsTrigger value="other">Other</TabsTrigger>
                      </TabsList>

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
                                  Recommended size is 200 charts.
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
                                  Recommended size is 500 charts.
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
                                  className=""
                                  {...field}
                                  placeholder="Enter a Keyword"
                                  tags={keywords}
                                  // className="sm:min-w-[450px]"
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
                              <FormLabel className="">hashtags</FormLabel>
                              <FormControl>
                                <TagInput
                                  {...field}
                                  placeholder="Enter a hashtags"
                                  tags={keywords}
                                  // className="sm:min-w-[450px]"
                                  setTags={(newTags) => {
                                    setKeywords(newTags);
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
                                Minimum 5 and maximum 10 keywords are
                                recommended.
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </TabsContent>
                      <TabsContent value="other">Under devlopment</TabsContent>
                    </Tabs>
                  </div>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </form>
        </Form>
      </Card>
    </div>
  );
}
