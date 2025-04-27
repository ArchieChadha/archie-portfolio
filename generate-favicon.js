const { createCanvas, registerFont } = require('canvas');
const fs = require('fs');

// Function to create a favicon
function createFavicon(size, filename) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // Background
  ctx.fillStyle = '#0a192f'; // Navy background
  ctx.fillRect(0, 0, size, size);

  // Text settings
  ctx.fillStyle = '#64ffda'; // Teal text
  ctx.font = `bold ${size * 0.5}px 'NTR', sans-serif`; // Using NTR font to match website
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Add text with letter spacing
  const text = 'AC';
  const letterSpacing = size * 0.05; // 5% of icon size
  const totalWidth = ctx.measureText(text).width + (text.length - 1) * letterSpacing;
  let x = (size - totalWidth) / 2;
  
  // Draw each letter with spacing
  for (let i = 0; i < text.length; i++) {
    ctx.fillText(text[i], x + ctx.measureText(text[i]).width / 2, size / 2);
    x += ctx.measureText(text[i]).width + letterSpacing;
  }

  // Save to file
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(`public/${filename}`, buffer);
}

// Create different sizes
createFavicon(32, 'favicon-32x32.png');
createFavicon(16, 'favicon-16x16.png');
createFavicon(180, 'apple-touch-icon.png');

console.log('Favicons generated successfully!'); 