///Precondition: 
//  RawCache populated from supabase
///Postcondition:
/// Datalayer object containing
/// 3 serializable Maps (records) for caching:
///     projectMap for UX reference of projects
///     articleMap for UX reference of articles
///     tagMap for dependency referencing for cache invalidation and regeneration

import type * as dlTypes from "../types"
import { convert_md } from "./markdown_processing";
import { get_item } from "./retrievals";



export async function enrich(
	article: number,
	date_formatter: Intl.DateTimeFormat,
	articleMap: Record<string, dlTypes.EnrichedArticle>,
	column: string
): Promise<dlTypes.EnrichedArticle>;

export async function enrich(
	project: number,
	date_formatter: Intl.DateTimeFormat,
	projectMap: Record<string, dlTypes.EnrichedProject>,
	column:string

): Promise<dlTypes.EnrichedProject>;


export async function enrich(
	item: number,
	date_formatter: Intl.DateTimeFormat,
	map: Record<string, dlTypes.EnrichedArticle | dlTypes.EnrichedProject>,
	column: string
): Promise<dlTypes.EnrichedArticle | dlTypes.EnrichedProject> {
	const item_pulled: dlTypes.ProjectRow | dlTypes.ArticleRow = await get_item(column, item)
	const { id, content_md, created_at, updated_at, assets, ...rest } = item_pulled;
	const content_html = await convert_md(content_md, assets);
	const created_at_readable = date_formatter.format(new Date(item_pulled.created_at));
	const updated_at_readable = date_formatter.format(new Date(item_pulled.updated_at));	
	if (column == "Articles") {
		const enriched_article: dlTypes.EnrichedArticle = {
	    ...rest as Omit<dlTypes.ArticleRow, "content_md" | "assets" | "created_at" | "updated_at">,
	    id: "a"+id,
	    content_html,
	    created_at: created_at_readable,
	    updated_at_raw:updated_at,
	    created_at_raw: created_at,
	    updated_at: updated_at_readable,
	    projects_referenced: {}
	  };

		(map as Record<string, dlTypes.EnrichedArticle>)["a"+id] = enriched_article;
		return enriched_article;
	} else {
	const enriched_project: dlTypes.EnrichedProject = {
	    ...rest as Omit<dlTypes.ProjectRow, "content_md" | "assets" | "created_at" | "updated_at">,
	    id: "p"+id,
	    content_html,
	    created_at: created_at_readable,
	    updated_at: updated_at_readable,
	    created_at_raw: created_at,
	    updated_at_raw: updated_at,
	    articles_referenced: {}
	  };
		(map as Record<string, dlTypes.EnrichedProject>)["p"+id] = enriched_project;
		return enriched_project;
  }
}


