const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://zdvdmbsderjlnxennzgo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkdmRtYnNkZXJqbG54ZW5uemdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA1NTE0MDUsImV4cCI6MjA4NjEyNzQwNX0.lK3OXJ_G7VDqGK0ed_MfPU1XucvzPFDgS8KXylfIiVw';
const supabase = createClient(supabaseUrl, supabaseKey);

async function listAllColumns() {
    console.log('Fetching sample blog post...');
    const { data: blog, error: bErr } = await supabase.from('blog_posts').select('*').limit(1);
    if (bErr) console.error('Blog fetch err:', bErr.message);
    else if (blog && blog.length > 0) console.log('Blog columns:', Object.keys(blog[0]).join(', '));

    console.log('Fetching sample gallery project...');
    const { data: gallery, error: gErr } = await supabase.from('gallery_projects').select('*').limit(1);
    if (gErr) console.error('Gallery fetch err:', gErr.message);
    else if (gallery && gallery.length > 0) console.log('Gallery columns:', Object.keys(gallery[0]).join(', '));
    else {
        // If empty, we can try to find them via information_schema if we have permissions, 
        // but usually we don't via anon key. 
        // Instead, I'll try to insert a dummy and see what fails.
        console.log('Gallery is empty. Trying to insert with various naming styles...');
        const { error: e1 } = await supabase.from('gallery_projects').insert({ title: 'T', category: 'Floor', imageAfter: 'I' });
        if (e1) console.log('imageAfter failed:', e1.message);
        else console.log('imageAfter worked!');

        const { error: e2 } = await supabase.from('gallery_projects').insert({ title: 'T', category: 'Floor', image_after: 'I' });
        if (e2) console.log('image_after failed:', e2.message);
        else console.log('image_after worked!');
    }
}

listAllColumns();
