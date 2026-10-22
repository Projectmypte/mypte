// ====== ضع بيانات مشروعك من Supabase: Project Settings > API ======
const SUPABASE_URL = 'https://mntfmijixqkceuycjscj.supabase.co';        // مثال: https://abcd1234.supabase.co
const SUPABASE_ANON_KEY = 'sb_publishable_V5LYZzBgNFuZKZmGEZo1JQ_LHNC3TiB';
// ==================================================================
 
// بنستخدم Supabase كقاعدة بيانات بس (من غير Supabase Auth)
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false }
});
 
const TOKEN_KEY = 'mypte_token';
const getToken   = () => localStorage.getItem(TOKEN_KEY);
const setToken   = t  => localStorage.setItem(TOKEN_KEY, t);
const clearToken = () => localStorage.removeItem(TOKEN_KEY);
 
