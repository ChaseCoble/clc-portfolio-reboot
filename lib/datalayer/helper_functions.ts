import { ArticleBriefDet, EnrichedArticle, EnrichedProject, ProjectBriefDet, RefRow } from "../types"

export function ref_link(
    articleMap: Record<string, EnrichedArticle>, 
    projectMap: Record<string, EnrichedProject>, 
    tagMap: Record<string, string[]>, 
    refs: RefRow[]): void {
        const link = refs.map((ref)=>{
            const proj_id = `p${ref.project_id}`
            const article_id = `a${ref.article_id}`
            if (!tagMap[proj_id]) {
                tagMap[proj_id] = []
            }
            if (!tagMap[article_id]) {
              tagMap[article_id] = []
            }
            if (!tagMap[proj_id].includes(article_id)) {
              tagMap[proj_id].push(article_id)
            }
            if (!tagMap[article_id].includes(proj_id)) {
              tagMap[article_id].push(proj_id)
            }
            const project: EnrichedProject = projectMap[proj_id]
            const article: EnrichedArticle = articleMap[article_id]
            const article_brief: ArticleBriefDet = brief(article)
            const project_brief: ProjectBriefDet = brief(project)
            project.articles_referenced[article_id] = article_brief
            article.projects_referenced[proj_id] = project_brief
        })
    }

export function brief(obj: EnrichedArticle | EnrichedProject): ArticleBriefDet | ProjectBriefDet{
    const{title, updated_at_raw, brief} = obj
    const brief_det: ArticleBriefDet | ProjectBriefDet = {
        brief,
        title,
        updated_at_raw,
    }
    return brief_det
}
