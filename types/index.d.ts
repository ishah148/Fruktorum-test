export interface ArticlesPreview {
  page_type: string;
  meta: ArticlesMeta;
  body: ArticlesBody[];
}

export interface ArticlesMeta {
  title: string;
  description: string;
  slug: string;
}

export interface ArticlesBody {
  type: string;
  id: string;
  data: ArticlesData;
}

export interface ArticlesData {
  title: string;
  articles: ArticlesPreviewInfo[];
}

export interface ArticlesPreviewInfo {
  title: string;
  link: string;
  image: string;
}

export interface ApiResponseError {
  error: string;
}

export enum ComponentTypes {
  ArticleIntroBlock = "article_intro_block",
  ArticleListBlock = "article_list_block",
  CtaFormBlock = "cta_form_block",
  ImageBlock = "image_block",
  SliderBlock = "slider_block",
  SubscribeFormBlock = "subscribe_form_block",
  TextBlock = "text_block",
}
export type cmpKeys =
  | "article_intro_block"
  | "article_list_block"
  | "cta_form_block"
  | "image_block"
  | "slider_block"
  | "subscribe_form_block"
  | "text_block";
export interface Article {
  pageType: string;
  meta: Meta;
  body: ArticleBody[];
}

export interface ArticleBody {
  type: cmpKeys;
  id: string;
  data:
    | string[]
    | ArticleData
    | string
    | ArticleIntroData
    | ArticleSliderData
    | ArticleBlockData;
}

export interface ArticleData {
  title?: string;
  image?: string;
  readingTime?: number;
  viewsCount?: number;
  shortDescription?: string;
  src?: string;
  caption?: string;
  articles?: ArticleElement[];
}

export interface ArticleElement {
  title: string;
  link: string;
  image: string;
}

export interface Meta {
  title: string;
  description: string;
  slug: string;
}

// export type ComponentTypes = {
//   article_intro_block: "ArticleIntroBlock";
//   article_list_block: "ArticleListBlock";
//   cta_form_block: "CtaFormBlock";
//   image_block: "ImageBlock";
//   slider_block: "SliderBlock";
//   subscribe_form_block: "SubscribeFormBlock";
//   text_block: "TextBlock";
// };
export interface ArticleIntroData {
  image: string;
  reading_time: number;
  short_description: string;
  title: string;
  views_count: number;
}

export type ArticleSliderData = string[];

export interface AtricleListBlock {}

export interface ArticleBlockData {
  title: string;
  articles: ArticleShortInfo[];
}

export interface ArticleShortInfo {
  title: string;
  link: string;
  image: string;
}

// export interface ArticleTextData {
//   data: string;
//   id: string;
//   type: string;
// }
