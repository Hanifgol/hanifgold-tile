const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://zdvdmbsderjlnxennzgo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkdmRtYnNkZXJqbG54ZW5uemdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA1NTE0MDUsImV4cCI6MjA4NjEyNzQwNX0.lK3OXJ_G7VDqGK0ed_MfPU1XucvzPFDgS8KXylfIiVw';
const supabase = createClient(supabaseUrl, supabaseKey);

async function insertFirstPost() {
    const post = {
        title: 'The Art of Professional Tiling: Why Quality Matters for Your Lagos Home',
        slug: 'the-art-of-professional-tiling',
        excerpt: 'Discover why professional tiling is more than just laying bricks—it is about durability, aesthetics, and adding value to your property.',
        content: `
# The Art of Professional Tiling: Why Quality Matters

When it comes to interior finishing, few things have as much impact as your flooring. Whether it is a luxury villa in Ikoyi or a modern office in Ikeja, the quality of your tile installation sets the tone for the entire space.

## Why Professional Installation is Key

Many homeowners lean towards DIY or low-cost labor, but professional tiling (what we call the **Gold Standard**) offers:

1. **Perfect Alignment**: No uneven edges or "lippage" that causes trips.
2. **Durability**: Correct adhesive selection ensures tiles stay put for decades.
3. **Waterproofing**: Essential for bathrooms and kitchens to prevent structural damage.
4. **Precision Cutting**: Clean edges around corners and obstacles.

## Our Gold Standard Process

At HanifGold, we do not just lay tiles; we craft surfaces. Our process involves meticulous floor leveling, premium adhesive selection, and precision grouting that resists stains.

Whether you are looking for **Marble Polishing**, **Porcelain Installation**, or **Complete Bathroom Renovation**, we bring the same level of artisan craftsmanship to every project.

---
*Ready to transform your home? Book an inspection today!*
    `,
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200',
        category: 'Guides',
        author: 'Hanif',
        date: new Date().toLocaleDateString(),
        createdAt: Date.now()
    };

    const { data, error } = await supabase.from('blog_posts').insert([post]);

    if (error) {
        console.error('Error inserting post:', error.message);
    } else {
        console.log('Successfully inserted initial blog post!');
    }
}

insertFirstPost();
