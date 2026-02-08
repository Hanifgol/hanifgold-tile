const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://zdvdmbsderjlnxennzgo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkdmRtYnNkZXJqbG54ZW5uemdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA1NTE0MDUsImV4cCI6MjA4NjEyNzQwNX0.lK3OXJ_G7VDqGK0ed_MfPU1XucvzPFDgS8KXylfIiVw';
const supabase = createClient(supabaseUrl, supabaseKey);

async function finalPopulation() {
    console.log('Inserting Gallery Projects...');
    const gallery = [
        {
            title: 'Luxury Living Room Marble Finish',
            category: 'Floor',
            imageBefore: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=60&w=800',
            imageAfter: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=1200',
            duration: '7 Days',
            materials: '60x120 Royal White Marble',
            createdAt: Date.now()
        },
        {
            title: 'Modern Kitchen Backsplash',
            category: 'Kitchen',
            imageBefore: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=60&w=800',
            imageAfter: 'https://images.unsplash.com/photo-1556911220-e15595b6a381?auto=format&fit=crop&q=80&w=1200',
            duration: '2 Days',
            materials: 'Handmade Ceramic Tiles',
            createdAt: Date.now() + 1000
        },
        {
            title: 'Master Bathroom Transformation',
            category: 'Bathroom',
            imageBefore: 'https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=60&w=800',
            imageAfter: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=1200',
            duration: '5 Days',
            materials: 'Anti-slip Porcelain, Epoxy Grout',
            createdAt: Date.now() + 2000
        }
    ];

    await supabase.from('gallery_projects').insert(gallery);
    console.log('Gallery OK.');

    console.log('Inserting missing Blog Posts...');
    const blogPosts = [
        {
            title: 'Modern Bathroom Renovation Trends: Transforming Your Private Sanctuary',
            slug: 'modern-bathroom-renovation-trends',
            excerpt: 'From walk-in showers to smart mirrors, discover the top trends making bathrooms the most luxurious room in the house.',
            content: `# Modern Bathroom Renovation Trends ...`, // Truncated for script clarity
            image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=1200',
            category: 'Design',
            author: 'Hanif',
            date: new Date().toLocaleDateString(),
            createdAt: Date.now() + 3000
        },
        {
            title: 'The Ultimate Guide to Marble Floor Maintenance and Polishing',
            slug: 'marble-floor-maintenance-guide',
            excerpt: 'Protect your investment. Learn how to keep your marble floors shining like glass with these professional maintenance tips.',
            content: `# The Ultimate Guide to Marble Maintenance ...`, // Truncated for script clarity
            image: 'https://images.unsplash.com/photo-1620626011761-9963d7521576?auto=format&fit=crop&q=80&w=1200',
            category: 'Maintenance',
            author: 'Hanif',
            date: new Date().toLocaleDateString(),
            createdAt: Date.now() + 4000
        },
        {
            title: 'Top 5 Floor Tile Patterns to Elevate Your Home Design',
            slug: 'top-5-floor-tile-patterns',
            excerpt: 'Explore the most popular tiling patterns—from Herringbone to Chevron—and find the perfect match for your space.',
            content: `# Top 5 Floor Tile Patterns ...`, // Truncated for script clarity
            image: 'https://images.unsplash.com/photo-1541123437229-c56916960417?auto=format&fit=crop&q=80&w=1200',
            category: 'Design',
            author: 'Hanif',
            date: new Date().toLocaleDateString(),
            createdAt: Date.now() + 5000
        }
    ];

    await supabase.from('blog_posts').insert(blogPosts);
    console.log('Blog OK.');
}

finalPopulation();
