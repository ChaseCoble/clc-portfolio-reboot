import { createClient } from "@/utils/supabase/server"
import { RefRow } from "../types";
import { extract_ids } from "./retrievals";

export const datalayer = async () => {
    const supabase = await createClient()
    const proj_ids: number[] = await extract_ids("Projects", supabase);
    const art_ids: number[] = await extract_ids("Articles", supabase);
    let refs: RefRow[] = []
    try{
        const { data, error } = await supabase.from("Articles_Projects_Refs").select("*")
        if(error || !data.length){
            const err = error ? error : new Error("Empty return on refs")
            throw err 
        }
    }catch(err){
        console.error(`Error on ref pull: ${err}`)
    }

}