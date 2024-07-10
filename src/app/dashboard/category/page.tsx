"use client";
// import { translate } from "@vitalets/google-translate-api";

import React, { useEffect } from "react";
import Image from "next/image";
import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import PageTitle from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// import { Tag, TagInput } from "@/components/tag-input";
import { Tag, TagInput } from "emblor";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Ellipsis, ArrowDownAZ } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import {
  useTranslater,
  useGetAllCategories,
  useNewCategory,
  useNewSubCategory,
  useGetAllSubCategories,
} from "@/query/hooks";
import { BASE_URL } from "../../../../config/constants";
import { CategoryType } from "@/types/Category";
import { extractTexts } from "@/helpers/tagsFilter";
import { slugBuilder } from "@/helpers/slug";
import { useQueryClient } from "@tanstack/react-query";

interface Category {
  _id: string;
  name: string;
  slug: string;
  menuHierarchy: number;
  sectionType: string;
  category: string;
}

const Categorydata: Category[] = [
  {
    _id: "603b2c64e4cb147e18505317",
    name: "Example category 1",
    slug: "example-category-1",
    menuHierarchy: 0,
    sectionType: "subsection",
    category: "603b2c64e4cb147e18505318",
  },
  {
    _id: "603b2c64e4cb147e18505318",
    name: "Example category 2",
    slug: "example-category-2",
    menuHierarchy: 1,
    sectionType: "subsection",
    category: "603b2c64e4cb147e18505319",
  },
  {
    _id: "603b2c64e4cb147e18505319",
    name: "Example category 3",
    slug: "example-category-3",
    menuHierarchy: 2,
    sectionType: "subsection",
    category: "603b2c64e4cb147e18505320",
  },
  {
    _id: "603b2c64e4cb147e18505320",
    name: "Example category 4",
    slug: "example-category-4",
    menuHierarchy: 3,
    sectionType: "subsection",
    category: "603b2c64e4cb147e18505321",
  },
  {
    _id: "603b2c64e4cb147e18505321",
    name: "Example category 5",
    slug: "example-category-5",
    menuHierarchy: 4,
    sectionType: "subsection",
    category: "603b2c64e4cb147e18505322",
  },
  {
    _id: "603b2c64e4cb147e18505322",
    name: "Example category 6",
    slug: "example-category-6",
    menuHierarchy: 5,
    sectionType: "subsection",
    category: "603b2c64e4cb147e18505323",
  },
  {
    _id: "603b2c64e4cb147e18505323",
    name: "Example category 7",
    slug: "example-category-7",
    menuHierarchy: 6,
    sectionType: "subsection",
    category: "603b2c64e4cb147e18505324",
  },
  {
    _id: "603b2c64e4cb147e18505324",
    name: "Example category 8",
    slug: "example-category-8",
    menuHierarchy: 7,
    sectionType: "subsection",
    category: "603b2c64e4cb147e18505325",
  },
  {
    _id: "603b2c64e4cb147e18505325",
    name: "Example category 9",
    slug: "example-category-9",
    menuHierarchy: 8,
    sectionType: "subsection",
    category: "603b2c64e4cb147e18505326",
  },
  {
    _id: "603b2c64e4cb147e18505326",
    name: "Example category 10",
    slug: "example-category-10",
    menuHierarchy: 9,
    sectionType: "subsection",
    category: "603b2c64e4cb147e18505327",
  },
];

const columns: ColumnDef<Category>[] = [
  {
    accessorKey: "_id", // Assuming _id is the unique identifier for category
    header: "_id",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "slug",
    header: "Slug",
  },
  {
    accessorKey: "menuHierarchy",
    header: "Menu Priority",
  },
  {
    accessorKey: "sectionType",
    header: "Section Type",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const category = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <Ellipsis className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(category._id)}
            >
              Copy Category ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Category & Subcategory must be at least 2 characters.",
  }),
  slug: z.string().min(2, {
    message: "slug must be at least 2 characters.",
  }),
  visibility: z.optional(z.enum(["hamburgerMenu", "mainMenu", "both"])),

  // description: z.optional(z.string()),
  description: z.string().optional(),
  // tags: z.optional(z.array(z.string())),
  categoryType: z.optional(z.enum(["section", "SubSection"])),
  category: z.string().optional(),

  keywords: z
    .array(
      z.object({
        id: z.string(),
        text: z.string(),
      }),
    )
    .optional(),
});

export default function CategoryPage() {

  const queryClient = useQueryClient()

  const {
    data: AllCategories,
    isError: CategoriesFetchFail,
    isFetched,
    isFetching,
    isRefetching,
    refetch,
  } = useGetAllCategories();
  const {
    mutate: translaterMutate,
    data: slugData,
    isSuccess,
  } = useTranslater();
  const {
    mutate: newCategoryMutate,
    data: newCategoryData,
    isSuccess: categoryIsSuccess,
  } = useNewCategory(queryClient);
  const {
    mutate: newSubCategoryMutate,
    data: newSubCategoryData,
    isSuccess: SubCategoryIsSuccess,
  } = useNewSubCategory();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "all",
    defaultValues: {
      name: "",
      slug: "",
      description: "",
      keywords: [],
      category: "",
      visibility: "both",
      categoryType: "section",
    },
  });
  const [tags, setTags] = React.useState<Tag[]>([]);
  const [activeTagIndex, setActiveTagIndex] = React.useState<number | null>(
    null,
  );
  // const [slug, setSlug] = React.useState("");
  const { setValue } = form;

  const [categoryToggle, setCategoryToggle] = React.useState(false);

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    var keywordTexts: string[] = [];

    if (data.keywords !== undefined && data.keywords !== null) {
      keywordTexts = extractTexts(data.keywords);
    }
    const CategoryData: CategoryType = {
      ...data,
      keywords: keywordTexts,
    };
    console.log(CategoryData);
    if (categoryToggle) {
      if (CategoryData.category) {
        console.log(CategoryData)
        newSubCategoryMutate(CategoryData);

      } else {
        toast.warning("CATEGORY_SLECT");
      }
    } else {
      newCategoryMutate(CategoryData);
    }
  };

  const slugTranslater = async (e: string) => {
    const text = form.getValues("name");

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

  }, [isSuccess]);

  return (
    <div className="flex w-full flex-col gap-4">
      <PageTitle title="Categorys" />
      <section>
        <div className="container mx-auto flex min-h-10 w-full flex-row justify-between pt-5">
          <Sheet>
            <SheetTrigger className="rounded-md bg-primary px-3 text-white">
              Add Category
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle>Create Category</SheetTitle>
                <div>
                  <Switch
                    className="absolute right-0"
                    checked={categoryToggle}
                    onCheckedChange={() => setCategoryToggle(!categoryToggle)}
                  />
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(handleSubmit)}
                      className="space-y-8"
                    >
                      {categoryToggle && (
                        <FormField
                          control={form.control}
                          name="category"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Parent Category</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select Parent Category" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {isFetched && (
                                    <div>
                                      {AllCategories?.categories?.map(
                                        (e: any, index: any) => (
                                          <SelectItem
                                            key={index}
                                            value={e._id}
                                          >
                                            {e.name}
                                          </SelectItem>
                                        ),
                                      )}
                                    </div>
                                  )}
                                </SelectContent>
                              </Select>
                              <FormDescription>
                                You can manage email addresses in your
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => {
                          return (
                            <FormItem>
                              <FormLabel>Category</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Category"
                                  type="text"
                                  {...field}
                                // onChangeCapture={(e) =>
                                //   slugGenerate(e.currentTarget.value)
                                // }
                                />
                              </FormControl>
                              {/* <FormDescription>
                        This is your Category name.
                      </FormDescription> */}
                              <FormMessage />
                            </FormItem>
                          );
                        }}
                      />
                      <FormField
                        control={form.control}
                        name="slug"
                        render={({ field }) => (
                          <FormItem>
                            <div className="flex justify-between">
                              <FormLabel>Slug</FormLabel>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <ArrowDownAZ onClick={() => slugTranslater("p")} />
                                  </TooltipTrigger>

                                  <TooltipContent>
                                    <p>Click heare for Generate slug</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
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
                            <FormDescription className="text-green-600">
                              {form.getValues("slug") && (
                                <>
                                  <b className="text-slate-800">URL: </b>
                                  {`${BASE_URL}${form.getValues("slug")}`}
                                </>
                              )}
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="description"
                                type="text"
                                {...field}
                              />
                            </FormControl>
                            <FormDescription>
                              This is description.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="keywords"
                        render={({ field }) => (
                          <FormItem className="flex flex-col items-start">
                            <FormLabel className="text-left">Keyword</FormLabel>
                            <FormControl className="w-full">
                              <TagInput
                                {...field}
                                placeholder="Enter a Keyword"
                                tags={tags}
                                // className="sm:min-w-[450px]"
                                setTags={(newTags) => {
                                  setTags(newTags);
                                  setValue(
                                    "keywords",
                                    newTags as [Tag, ...Tag[]],
                                  );
                                }}
                                activeTagIndex={activeTagIndex}
                                setActiveTagIndex={setActiveTagIndex}
                              />
                            </FormControl>
                            <FormDescription className="text-left">
                              These are the topics that you&apos;re interested
                              in.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit">Submit</Button>
                    </form>
                  </Form>
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <Button onClick={() => { }}>Migration</Button>
        </div>
      </section>
      <section>
        <div className="container mx-auto">
          <DataTable columns={columns} data={Categorydata} />
        </div>
      </section>
    </div>
  );
}
