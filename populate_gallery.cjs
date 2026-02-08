const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://zdvdmbsderjlnxennzgo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkdmRtYnNkZXJqbG54ZW5uemdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA1NTE0MDUsImV4cCI6MjA4NjEyNzQwNX0.lK3OXJ_G7VDqGK0ed_MfPU1XucvzPFDgS8KXylfIiVw';
const supabase = createClient(supabaseUrl, supabaseKey);

async function populateGallery() {
    const projects = [
        {
            title: 'Luxury Living Room Marble Finish',
            category: 'Floor',
            description: 'Full marble floor installation and high-gloss diamond polishing for a premium Lekki residence.',
            imageBefore: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=60&w=800',
            imageAfter: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=1200',
            duration: '7 Days',
            materials: '60x120 Royal White Marble',
            createdAt: Date.now()
        },
        {
            title: 'Modern Kitchen Backsplash',
            category: 'Kitchen',
            description: 'Geometric subway tile installation with contrast grouting for a contemporary feel.',
            imageBefore: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=60&w=800',
            imageAfter: 'https://images.unsplash.com/photo-1556911220-e15595b6a381?auto=format&fit=crop&q=80&w=1200',
            duration: '2 Days',
            materials: 'Handmade Ceramic Tiles',
            createdAt: Date.now() + 1000
        },
        {
            title: 'Master Bathroom Transformation',
            category: 'Bathroom',
            description: 'Complete overhaul from old ceramic to modern stone-finish porcelain with hidden drainage.',
            imageBefore: 'https://images.unsplash.com/photo-1584622781564-1d9876a13d00?auto=format&fit=crop&q=60&w=800',
            imageAfter: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=1200',
            duration: '5 Days',
            materials: 'Anti-slip Porcelain, Epoxy Grout',
            createdAt: Date.now() + 2000
        }
    ];

    const { data, error } = await supabase.from('gallery_projects').insert(projects);

    if (error) {
        console.error('Error inserting gallery projects:', error.message);
    } else {
        console.log('Successfully inserted 3 gallery transformation projects!');
    }
}

populateGallery();
