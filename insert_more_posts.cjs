const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://zdvdmbsderjlnxennzgo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkdmRtYnNkZXJqbG54ZW5uemdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA1NTE0MDUsImV4cCI6MjA4NjEyNzQwNX0.lK3OXJ_G7VDqGK0ed_MfPU1XucvzPFDgS8KXylfIiVw';
const supabase = createClient(supabaseUrl, supabaseKey);

async function insertMorePosts() {
    const posts = [
        {
            title: 'Modern Bathroom Renovation Trends: Transforming Your Private Sanctuary',
            slug: 'modern-bathroom-renovation-trends',
            excerpt: 'From walk-in showers to smart mirrors, discover the top trends making bathrooms the most luxurious room in the house.',
            content: `
# Modern Bathroom Renovation Trends

Your bathroom is no longer just a functional room; it is a sanctuary for relaxation. In Lagos and beyond, homeowners are shifting towards "Spa-style" bathrooms.

## 1. Large Format Porcelain Tiles
Gone are the days of tiny tiles with endless grout lines. Large format tiles (60x120cm or even 120x240cm) create a seamless, high-end look that is easier to clean and visually expands the space.

## 2. Walk-in Showers with Frameless Glass
A "Wet Room" feel is highly desirable. Removing the bulky shower tub and replacing it with a sleek walk-in shower and rain-head fixture adds instant luxury.

## 3. Natural Textures
Bringing the outdoors in with stone-look porcelain or marble highlights creates a calming environment. High-quality **Marble Polishing** can make your existing stone look like new.

## 4. Smart Lighting
Integrated LED strips behind mirrors or under cabinets provide "hidden" lighting that enhances the mood during your evening soak.

---
*Considering a bathroom upgrade? HanifGold specialized in premium tiling and plumbing for luxury renovations.*
      `,
            image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=1200',
            category: 'Design',
            author: 'Hanif',
            date: new Date().toLocaleDateString(),
            createdAt: Date.now()
        },
        {
            title: 'The Ultimate Guide to Marble Floor Maintenance and Polishing',
            slug: 'marble-floor-maintenance-guide',
            excerpt: 'Protect your investment. Learn how to keep your marble floors shining like glass with these professional maintenance tips.',
            content: `
# The Ultimate Guide to Marble Maintenance

Marble is a timeless investment that adds significant value to your property. However, it is a natural stone that requires specific care to maintain its "mirror finish."

## The Do's and Don'ts of Marble Care

### DO: Use pH-Neutral Cleaners
Standard household cleaners are often acidic and can "etch" or dull the surface of your marble. Always use cleaners specifically designed for natural stone.

### DON'T: Drag Furniture
Small stones trapped under furniture legs can act like sandpaper. Use felt pads to protect your investment.

### DO: Seal Your Stone
Marble is porous. A professional sealant prevents spills from soaking in and causing permanent stains.

## When to Call the Professionals?
If your floors have lost their luster, scratches are becoming visible, or there is significant dullness in high-traffic areas, it is time for a **Professional Marble Polishing**.

Our process involves:
- Diamond Grinding to remove deep scratches.
- Honing to smooth the surface.
- High-grit polishing for a glass-like reflection.

---
*Is your marble looking dull? Contact HanifGold today for a professional restoration quote.*
      `,
            image: 'https://images.unsplash.com/photo-1620626011761-9963d7521576?auto=format&fit=crop&q=80&w=1200',
            category: 'Maintenance',
            author: 'Hanif',
            date: new Date().toLocaleDateString(),
            createdAt: Date.now() + 1000 // Ensure unique timestamp
        }
    ];

    const { data, error } = await supabase.from('blog_posts').insert(posts);

    if (error) {
        console.error('Error inserting posts:', error.message);
    } else {
        console.log('Successfully inserted 2 new blog articles!');
    }
}

insertMorePosts();
