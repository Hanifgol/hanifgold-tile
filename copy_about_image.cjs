const fs = require('fs');
const path = require('path');

const artifactDir = 'C:\\Users\\user\\.gemini\\antigravity\\brain\\309f1ab2-7cfe-40d2-a738-1dbbc840e517';
const targetDir = path.join(__dirname, '..', 'hanif-fixed', 'assets', 'images');

const src = 'media__1770547096934.jpg';
const dest = 'about-story.jpg';

console.log(`Copying ${src} to ${dest} in ${targetDir}`);

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

try {
    fs.copyFileSync(path.join(artifactDir, src), path.join(targetDir, dest));
    console.log('Success');
} catch (error) {
    console.error('Error copying file:', error);
    process.exit(1);
}
