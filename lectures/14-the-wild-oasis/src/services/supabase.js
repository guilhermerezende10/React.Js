import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://yrqidvavobuimqbmxphy.supabase.co";
const supabaseKey =
  "sb_publishable_OGxdf-LrSYmg6GIw_Tpuvw_Q8D0yklZ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
