

interface Block {
  type: string;
  data: Record<string, any>;
}

interface metaData {
  metatitle?: string;
  metaDescription?: string;
  keywords?: string[];
  canonicalUrl?: string;
  index: boolean;
}
interface socialData {
  ogtitle?: string;
  ogImage?: string;
  hashtags?: string[];
}
interface schemaData {
  articleTypeSchema: "None" | "Article" | "NewsArticle" | "BlogPosting";
  otherSchema?: {
    name: "None" | "FAQPage" | "JobPosting ";
    schemaData: any;
  };
}

 export interface ArticleInterface{
  title: string;
  summary?: string | undefined;
  description?: string;
  image: string | undefined;
  // blocks: Block[];
  type: "Article" | "Slide" | "Webstory" | "EPaper";
  primaryCategory:string
  categories: string[];
  // subcategories: string[];
  slug: string;
  tags: string[];
  authors?: string[];
  status: "Draft" | "Published" | "Archived";
  publicAt?: Date;
  metadata?: metaData;
  socialData?: socialData;
  schemaData?: schemaData;
  version?:number,
  
}