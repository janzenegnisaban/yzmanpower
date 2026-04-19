const SUPABASE_URL = 'https://hyunopfhrvdsdjvvoxbj.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5dW5vcGZocnZkc2RqdnZveGJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI4NjAwNTgsImV4cCI6MjA4ODQzNjA1OH0.fAM8Wf7Zhi4lj51vQodurwZqUMBlnXlZCoNAyuHUXzY';
const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { flowType: 'implicit' }
});
