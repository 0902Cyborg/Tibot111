import { createClient } from "@supabase/supabase-js";

// Default values for development - replace with actual values in production
const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL || "https://example.supabase.co";
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4YW1wbGUiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTYxMzA5ODU0MCwiZXhwIjoxOTI4Njc0NTQwfQ.fake-key-for-development";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
