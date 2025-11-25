import { SupabaseClient, PostgrestError } from "@supabase/supabase-js"
import { ArticleRow, ProjectRow} from "../types"

export async function extract_ids(column: string, db: SupabaseClient): Promise<number[]>{
    let ids: { id: number }[] = []
    try{
        const { data, error } = await db.from(column).select("id")
        ids = data ?? []
        if(!ids.length){
            throw new Error("Empty return from database")
        }
        if(error){
            throw new PostgrestError(error)
        }
    }catch(err){
        console.error(`Caught error on column ${column}: ${err}`)
    }
    
    
    const id_arr: number[] = ids.map(obj => obj.id)
    
    return id_arr
}

export async function get_item(column: string, item: number): Promise<ArticleRow | ProjectRow>{

    let data: ArticleRow[] | ProjectRow[] | null = null
    try{
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/${column}?id=eq.${item}`,
            {
                headers: {
                    apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`,
                },
                next: {tags: [`${column == "Articles" ? "a" : "p"}${item}`]},
            } 
        )
        if(!res.ok){
            throw new Error(`GETITEM ERROR: ${res.status}`)
        }
        data = await res.json()
        
    }catch(err){
        console.error(err)
        throw err
    }
    return data![0] as ArticleRow | ProjectRow
}