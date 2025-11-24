import * as dlTypes from '@/lib/types';
import { createClient } from '@/utils/supabase/server';
import { process_to_cache } from '@/lib/datalayer/transform_data';

export default async function TEST() {
    const supabase = await createClient();
    const { data: Projects } = await supabase.from('Projects').select();
    const { data: Articles } = await supabase.from('Articles').select();
    const { data: Refs } = await supabase.from('Articles_Projects_Refs').select()
    const raw_cache: dlTypes.RawCache = {
        articles: Articles as dlTypes.ArticleRow[],
        projects: Projects as dlTypes.ProjectRow[],
        refs: Refs as dlTypes.RefRow[]
    } 
    const datalayer : dlTypes.DataLayer = await process_to_cache(raw_cache)
    return <pre>{JSON.stringify(datalayer, null, 2)}</pre>;
}
