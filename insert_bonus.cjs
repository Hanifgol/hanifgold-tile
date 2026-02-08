const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://zdvdmbsderjlnxennzgo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkdmRtYnNkZXJqbG54ZW5uemdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA1NTE0MDUsImV4cCI6MjA4NjEyNzQwNX0.lK3OXJ_G7VDqGK0ed_MfPU1XucvzPFDgS8KXylfIiVw';
const supabase = createClient(supabaseUrl, supabaseKey);

async function insertBonusPost() {
    const post = {
        title: 'Top 5 Floor Tile Patterns to Elevate Your Home Design',
        slug: 'top-5-floor-tile-patterns',
        excerpt: 'Explore the most popular tiling patterns—from Herringbone to Chevron—and find the perfect match for your space.',
        content: `
# Top 5 Floor Tile Patterns for Modern Homes

Choosing the right tile is only half the battle. The way you lay them can completely change the vibe of a room. Here are the top 5 patterns we are installing for our clients right now:

## 1. Herringbone
A classic that never goes out of style. It adds a sense of movement and luxury, especially in hallways and large living rooms.

## 2. Straight Set (Grid)
Perfect for a clean, minimalist look. It works best with large format tiles and matching grout to create a seamless floor.

## 3. Offset (Running Bond)
The go-to for many Nigerian homes. It is simple, hides wall imperfections well, and provides a very stable surface.

## 4. Chevron
Similar to herringbone but the tiles are cut at an angle to meet in a perfect point. It is more expensive but looks incredibly premium.

## 5. Diagonal (Diamond)
Laying tiles at a 45-degree angle makes small rooms feel much larger.

---
*Not sure which pattern fits your space? Our team provides expert design consultation during every site inspection!*
    `,
        image: 'https://images.unsplash.com/photo-1541123437229-c56916960417?auto=format&fit=crop&q=80&w=1200',
        category: 'Design',
        author: 'Hanif',
        date: new Date().toLocaleDateString(),
        createdAt: Date.now()
    };

    const { data, error } = await supabase.from('blog_posts').insert([post]);

    if (error) {
        console.error('Error inserting post:', error.message);
    } else {
        console.log('Successfully inserted bonus blog article!');
    }
}

insertBonusPost();
