export type SuccessStoryOverview = {
  id: string;
  title: string;
  imageSrc: string;
  type: BlogCategory;
};

export enum BlogCategory {
  Blog = "Blog",
  CustomerCaseStudy = "Customer Case Study",
  MarketInsight = "Market Insight",
}
