import { createClient } from "@supabase/supabase-js";

const supabase_url = import.meta.env.VITE_SUPABASE_URL as string;
const supabase_anon_url = import.meta.env.VITE_SUPABASE_ANON_URL as string;

const supabase = createClient(supabase_url, supabase_anon_url);

export default supabase;
