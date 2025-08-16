const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// Function to find the build directory
function findBuildDir() {
  const possiblePaths = [
    path.join(__dirname, 'dist/agrismart-web'),
    path.join(__dirname, 'dist'),
    path.join(__dirname, 'build'),
    path.join(__dirname, 'public')
  ];
  
  for (const dirPath of possiblePaths) {
    if (fs.existsSync(dirPath) && fs.existsSync(path.join(dirPath, 'index.html'))) {
      return dirPath;
    }
  }
  
  throw new Error('Build directory not found. Available directories: ' + 
    fs.readdirSync(__dirname).filter(item => 
      fs.statSync(path.join(__dirname, item)).isDirectory()
    ).join(', '));
}

let distDir;
try {
  distDir = findBuildDir();
  console.log('✓ Found build directory:', distDir);
} catch (error) {
  console.error('✗ Error finding build directory:', error.message);
  console.log('Current directory contents:', fs.readdirSync(__dirname));
  process.exit(1);
}

// Serve static files
app.use(express.static(distDir));

// Handle Angular routing
app.get('*', (req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✓ Server running on port ${port}`);
  console.log(`✓ Serving from: ${distDir}`);
});