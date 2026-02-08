const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://zdvdmbsderjlnxennzgo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkdmRtYnNkZXJqbG54ZW5uemdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA1NTE0MDUsImV4cCI6MjA4NjEyNzQwNX0.lK3OXJ_G7VDqGK0ed_MfPU1XucvzPFDgS8KXylfIiVw';
const supabase = createClient(supabaseUrl, supabaseKey);

async function diagnose() {
    try {
        console.log('Testing connection...');
        const { data: testData, error: testError } = await supabase.from('blog_posts').select('*').limit(1);
        if (testError) {
            console.error('Connection test failed:', testError.message);
        } else {
            console.log('Connection successful. Found blog posts:', testData.length);
        }

        console.log('Attempting to fetch gallery columns...');
        const { data: galleryData, error: galleryError } = await supabase.from('gallery_projects').select('*').limit(1);
        if (galleryError) {
            console.error('Gallery fetch failed:', galleryError.message);
        } else if (galleryData && galleryData.length > 0) {
            console.log('Gallery columns:', Object.keys(galleryData[0]).join(', '));
        } else if (galleryData) {
            console.log('Gallery table is empty. Trying to insert sample row...');
            const { error: insError } = await supabase.from('gallery_projects').insert({ title: 'Test Project', category: 'Floor', image_after: 'test' });
            if (insError) console.error('Minimal insert failed:', insError.message);
            else console.log('Minimal insert worked!');
        }
    } catch (e) {
        console.error('Unexpected error:', e);
    }
}

diagnose();
