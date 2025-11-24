import { PostgrestError, SupabaseClient } from "@supabase/supabase-js";

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