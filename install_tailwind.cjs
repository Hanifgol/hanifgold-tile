const { execSync } = require('child_process');
const path = require('path');

const targetDir = path.resolve(__dirname, '..', 'hanif-fixed');
console.log(`Installing dependencies in ${targetDir}`);

try {
    execSync('npm install -D tailwindcss postcss autoprefixer && npm install clsx tailwind-merge', {
        cwd: targetDir,
        stdio: 'inherit'
    });
    console.log('Tailwind dependencies installed.');

    execSync('npx tailwindcss init -p', {
        cwd: targetDir,
        stdio: 'inherit'
    });
    console.log('Tailwind initialized.');
} catch (error) {
    console.error('Error installing dependencies:', error.message);
    process.exit(1);
}
