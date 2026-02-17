// src/lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

// Environment variables (from .env.local)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Supabase environment variables are missing. Check VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env.local'
  );
}

// Create Supabase client with production-ready auth settings
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,          // Keeps user logged in across refresh
    autoRefreshToken: true,        // Refreshes JWT automatically
    detectSessionInUrl: true,      // Required for OAuth flows
    flowType: 'pkce',              // Secure auth flow
  },
  global: {
    headers: {
      'x-client-info': 'payflow-autopilot-web',
    },
  },
});
