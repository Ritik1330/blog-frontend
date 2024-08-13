export * from "./Category";
export * from "./tag";
export * from "./post";

interface Block {
  id: string;
  type: string;
  data: any;
}

interface Content {
  time: string;
  blocks: Block[];
  version: string;
}
interface metaData {
  metatitle?: string;
  metaDescription?: string;
  keywords?: string[];
  canonicalUrl?: string;
  index: boolean;
}

export interface StaticPageType {
  title: string;
  content: Content;
  slug: string;
  status: "Public" | "Private";
  metaData?: metaData;
}
