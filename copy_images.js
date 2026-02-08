const fs = require('fs');
const path = require('path');

const artifactDir = 'C:\\Users\\user\\.gemini\\antigravity\\brain\\309f1ab2-7cfe-40d2-a738-1dbbc840e517';
const targetDir = path.join(__dirname, '..', 'hanif-fixed', 'assets', 'images');

const mappings = [
    { src: 'media__1770547114452.jpg', dest: 'hero-bg.jpg' },
    { src: 'media__1770547117657.jpg', dest: 'service-floor.jpg' },
    { src: 'media__1770547092534.jpg', dest: 'service-wall.jpg' },
    { src: 'media__1770547126294.jpg', dest: 'service-bathroom.jpg' }
];

console.log(`Target Directory: ${targetDir}`);

if (!fs.existsSync(targetDir)) {
    console.log('Creating target directory...');
    fs.mkdirSync(targetDir, { recursive: true });
}

mappings.forEach(m => {
    const srcPath = path.join(artifactDir, m.src);
    const destPath = path.join(targetDir, m.dest);
    try {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied ${m.src} to ${m.dest}`);
    } catch (e) {
        console.error(`Error copying ${m.src}:`, e.message);
    }
});
