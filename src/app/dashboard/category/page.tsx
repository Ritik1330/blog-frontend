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
import { Tag, TagInput } from "@/components/tag-input";

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
import { useTranslater } from "@/query/hooks";
import { BASE_URL } from "../../../../config/constants";

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
  visibility: z.optional(z.enum(["hamburger_menu", "main_menu", "both"])),

  // description: z.optional(z.string()),
  description: z.string().optional(),
  // tags: z.optional(z.array(z.string())),
  categoryType: z.optional(z.enum(["section", "SubSection"])),
  parentCategory: z.string().optional(),

  keywords: z
    .array(
      z.object({
        id: z.string(),
        text: z.string(),
      })
    )
    .optional(),
});

export default function CategoryPage() {
  const {
    mutate: translaterMutate,
    data: generatedslug,
    isSuccess,
  } = useTranslater();

  const [categoryToggle, setCategoryToggle] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "all",
    defaultValues: {
      name: undefined,
      slug: undefined,
      description: undefined,
      keywords: [],
      parentCategory: undefined,
      visibility: "both",
      categoryType: "section",
    },
  });
  const [tags, setTags] = React.useState<Tag[]>([]);
  const { setValue } = form;

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("data"); // Handle form submission here
    console.log(data); // Handle form submission here
  };

  const slugTranslater = async (e: string) => {
    const text = form.getValues("name");
    console.log(text);
    if (text) {
      translaterMutate(text);
    } else {
      toast.warning("Please Enter Category Name");
    }
  };

  const slugSeter = async (e: string) => {
    let slug = e.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "");
    slug = slug.replace(/ /g, "-").toLowerCase();
    slug = slug.replace(/ /g, "-").toLowerCase();
    console.log(slug);
    setValue("slug", slug);
  };
  useEffect(() => {
    let str = generatedslug?.data.translated;
    if (str) {
      slugSeter(str);
    }

    // return () => {
    //   second
    // }
  }, [isSuccess]);

  return (
    <div className="flex flex-col gap-4 w-full ">
      <PageTitle title="Categorys" />
      <section>
        <div className=" flex flex-row justify-between min-h-10 w-full container mx-auto pt-5">
          <Sheet>
            <SheetTrigger className="bg-primary rounded-md px-3 text-white">
              Add Category
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle>Create Category</SheetTitle>
                <div>
                  <Switch
                    className=" absolute right-0"
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
                          name="parentCategory"
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
                                  <SelectItem value="m@example.com">
                                    m@example.com
                                  </SelectItem>
                                  <SelectItem value="m@google.com">
                                    m@google.com
                                  </SelectItem>
                                  <SelectItem value="m@support.com">
                                    m@support.com
                                  </SelectItem>
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
                            <div className="flex justify-between ">
                              <FormLabel>Slug</FormLabel>
                              <TooltipProvider>
                                <Tooltip>
                                  <div
                                    className=" "
                                    onClick={() => slugTranslater("p")}
                                  >
                                    <ArrowDownAZ />
                                  </div>

                                  <TooltipContent>
                                    <p>Click heare for Generate slug</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                            <FormControl>
                              <Input
                                placeholder="Slug"
                                // defaultValue={slug}
                                onChangeCapture={(e) =>
                                  slugSeter(e.currentTarget.value)
                                }
                                type="text"
                                {...field}
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
                          <FormItem>
                            <FormLabel>Tags</FormLabel>
                            <FormControl>
                              <TagInput
                                {...field}
                                placeholder="Enter a topic"
                                tags={tags}
                                className=""
                                setTags={(newTags) => {
                                  setTags(newTags);
                                  setValue(
                                    "keywords",
                                    newTags as [Tag, ...Tag[]]
                                  );
                                }}
                              />
                            </FormControl>
                            <FormDescription>
                              This is tags input.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="parentCategory"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Category</FormLabel>
                            <FormControl>
                              <Select onValueChange={field.onChange}>
                                <SelectTrigger className="w-full">
                                  <SelectValue placeholder="Category" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="light">Light</SelectItem>
                                  <SelectItem value="dark">Dark</SelectItem>
                                  <SelectItem value="system">System</SelectItem>
                                </SelectContent>
                              </Select>
                            </FormControl>
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
          <Button onClick={() => {}}>Migration</Button>
        </div>
      </section>
      <section>
        <div className="container mx-auto ">
          <DataTable columns={columns} data={Categorydata} />
        </div>
      </section>
    </div>
  );
}
