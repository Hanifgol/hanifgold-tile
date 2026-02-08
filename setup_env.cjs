const fs = require('fs');
const path = require('path');

const targetDir = path.resolve(__dirname, '..', 'hanif-fixed');
const envPath = path.join(targetDir, '.env');

const content = `VITE_SUPABASE_URL=YOUR_SUPABASE_URL
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
`;

try {
    fs.writeFileSync(envPath, content);
    console.log(`Created .env at ${envPath}`);
} catch (error) {
    console.error('Error creating .env:', error.message);
}
