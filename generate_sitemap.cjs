const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://zdvdmbsderjlnxennzgo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkdmRtYnNkZXJqbG54ZW5uemdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA1NTE0MDUsImV4cCI6MjA4NjEyNzQwNX0.lK3OXJ_G7VDqGK0ed_MfPU1XucvzPFDgS8KXylfIiVw';
const supabase = createClient(supabaseUrl, supabaseKey);

async function generateSitemap() {
    const baseUrl = 'https://hanifgold.com';
    const staticPages = ['', '/about', '/services', '/gallery', '/pricing', '/blog', '/contact', '/book'];

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    // Static URLs
    staticPages.forEach(p => {
        xml += `
  <url>
    <loc>${baseUrl}${p}</loc>
    <changefreq>monthly</changefreq>
  </url>`;
    });

    // Dynamic Blog URLs
    try {
        const { data: posts } = await supabase.from('blog_posts').select('slug');
        if (posts) {
            posts.forEach(post => {
                xml += `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <changefreq>weekly</changefreq>
  </url>`;
            });
        }
    } catch (err) {
        console.error('Error fetching blog posts for sitemap:', err);
    }

    xml += '\n</urlset>';

    const targetPath = path.resolve('c:/Users/user/Downloads/hanif-fixed/public/sitemap.xml');
    fs.writeFileSync(targetPath, xml);
    console.log(`Generated sitemap at ${targetPath}`);
}

generateSitemap();
