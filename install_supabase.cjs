const { execSync } = require('child_process');
const path = require('path');

const targetDir = path.resolve(__dirname, '..', 'hanif-fixed');
console.log(`Installing supabase-js in ${targetDir}`);

try {
    execSync('npm install @supabase/supabase-js', {
        cwd: targetDir,
        stdio: 'inherit'
    });
    console.log('Supabase client installed.');
} catch (error) {
    console.error('Error installing dependencies:', error.message);
    process.exit(1);
}
