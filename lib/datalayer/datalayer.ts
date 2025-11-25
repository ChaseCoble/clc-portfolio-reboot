import { createClient } from "@/utils/supabase/server"
import { DataLayer, EnrichedArticle, EnrichedProject, RefRow } from "../types";
import { extract_ids } from "./retrievals";
import { enrich } from "./enrich_data";
import { dateformat } from "../config";
import { ref_link } from "./helper_functions";

export default async function datalayer(): Promise<DataLayer>{
    const supabase = await createClient()
    const projectMap: Record<string, EnrichedProject> = {}
    const articleMap: Record<string, EnrichedArticle> = {}
    const tagMap: Record<string, string[]> = {}
    const dateformatter: Intl.DateTimeFormat = new Intl.DateTimeFormat("en-us", dateformat)
    const proj_ids: number[] = await extract_ids("Projects", supabase);
    const art_ids: number[] = await extract_ids("Articles", supabase);
    let refs: RefRow[] = []
    try{
        const { data, error } = await supabase.from("Articles_Projects_Refs").select("*")
        if(error || !data.length){
            const err = error ? error : new Error("Empty return on refs")
            throw err 
        }
        refs = data;
    }catch(err){
        console.error(`Error on ref pull: ${err}`)
    }
    //Maps populated
    await Promise.all(
        [Promise.all(proj_ids.map(async (id)=>{await enrich(id, dateformatter, projectMap, "Projects")})),
        Promise.all(art_ids.map(async (id)=>{await enrich(id, dateformatter, articleMap, "Articles")}))]
    )
    ref_link(articleMap, projectMap, tagMap, refs)
    const dl: DataLayer = {
        articles: articleMap,
        projects: projectMap,
        tags: tagMap
    }
    return dl
}

