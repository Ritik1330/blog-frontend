export type CategoryType = {
  name: string;
  slug: string;
  visibility?: "hamburgerMenu" | "mainMenu" | "both";
  menuHierarchy?: number;
  homeHierarchy?: number;
  description?: string;
  categoryType?: "section" | "SubSection";
  keywords?: string[];
  status?: "active" | "inactive";
  category?: string;
};
