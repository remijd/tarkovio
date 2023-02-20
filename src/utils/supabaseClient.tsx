import { Database } from "@/shared/types/database";
import { createClient } from "@supabase/supabase-js";
if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error("Missing ENV: NEXT_PUBLIC_SUPABASE_URL");
}
if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error("Missing ENV.NEXT_PUBLIC_SUPABASE_ANON_KEY");
}
export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);
