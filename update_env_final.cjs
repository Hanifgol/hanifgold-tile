const fs = require('fs');
const path = require('path');

const targetDir = path.resolve(__dirname, '..', 'hanif-fixed');
const envPath = path.join(targetDir, '.env');

const content = `VITE_SUPABASE_URL=https://zdvdmbsderjlnxennzgo.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpkdmRtYnNkZXJqbG54ZW5uemdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA1NTE0MDUsImV4cCI6MjA4NjEyNzQwNX0.lK3OXJ_G7VDqGK0ed_MfPU1XucvzPFDgS8KXylfIiVw
`;

try {
    fs.writeFileSync(envPath, content);
    console.log(`Updated .env with real credentials inside ${targetDir}`);
} catch (error) {
    console.error('Error updating .env:', error.message);
}
