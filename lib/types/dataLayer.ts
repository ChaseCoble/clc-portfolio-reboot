import { Database } from "./supabase";

export interface AssetOptions{
    assets: string[]
}
export type AssetData = {
    assetIndex: number;
    assetUri: string;
};
export type ProjectBriefDet = Pick<EnrichedProject, "title" | "updated_at_raw" | "brief">
export type ArticleBriefDet = Pick<EnrichedArticle, "title" | "updated_at_raw" | "brief">
export type ProjectBrief = Record<string, ProjectBriefDet>
export type ArticleBrief = Record<string, ArticleBriefDet>
export type ArticleRow = Database['public']['Tables']['Articles']['Row'];
export type ProjectRow = Database['public']['Tables']['Projects']['Row'];
export type RefRow = Database['public']['Tables']['Articles_Projects_Refs']['Row'];
export type EnrichedArticle = Omit<ArticleRow, "assets" | "content_md" | "id"> & {
    id: string;
    content_html: string;
    updated_at_raw: string;
    created_at_raw: string;
    projects_referenced: ProjectBrief;
}
export type EnrichedProject = Omit<ProjectRow, "content_md" | "assets" | "id"> & {
    id: string,
    content_html: string;
    updated_at_raw: string;
    created_at_raw: string;
    articles_referenced: ArticleBrief;
}

export type DataLayer = {
    articles: Record<string, EnrichedArticle>;
    projects: Record<string, EnrichedProject>;
    tags: Record<string, string[]>
};
export type RawCache = {
    articles: ArticleRow[]
    projects: ProjectRow[]
    refs: RefRow[]
}

