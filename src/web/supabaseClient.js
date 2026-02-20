import { createClient } from '@supabase/supabase-js';

// Bunları Supabase panelinde Settings > API kısmından bulabilirsin
const supabaseUrl = 'https://pwnregysytlkrypqwanz.supabase.co';
const supabaseAnonKey = 'sb_publishable_5c-D9RQxMpBhp7QnF-Pu0A_fhfNvqIx'; 

export const supabase = createClient(supabaseUrl, supabaseAnonKey);