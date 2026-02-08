const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://zdvdmbsderjlnxennzgo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkdmRtYnNkZXJqbG54ZW5uemdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA1NTE0MDUsImV4cCI6MjA4NjEyNzQwNX0.lK3OXJ_G7VDqGK0ed_MfPU1XucvzPFDgS8KXylfIiVw';
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkData() {
    const { data: posts, error: postError } = await supabase.from('blog_posts').select('*');
    if (postError) {
        console.error('Error fetching posts:', postError.message);
    } else {
        console.log(`Found ${posts?.length || 0} blog posts:`);
        posts?.forEach(p => console.log(`- ${p.title} (${p.slug})`));
    }
}

checkData();
