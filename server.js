const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// Function to find the build directory with better debugging
function findBuildDir() {
  console.log('🔍 Looking for build directory...');
  console.log('Current working directory:', process.cwd());
  
  const possiblePaths = [
    path.join(__dirname, 'dist/agrismart-web'),
    path.join(__dirname, 'dist'),
    path.join(__dirname, 'build'),
    path.join(__dirname, 'public')
  ];
  
  for (const dirPath of possiblePaths) {
    console.log(`🔍 Checking: ${dirPath}`);
    
    if (fs.existsSync(dirPath)) {
      console.log(`✓ Directory exists: ${dirPath}`);
      
      // List contents of the directory
      try {
        const contents = fs.readdirSync(dirPath);
        console.log(`Contents: ${contents.join(', ')}`);
        
        // Check for index.html
        if (fs.existsSync(path.join(dirPath, 'index.html'))) {
          console.log(`✓ Found index.html in: ${dirPath}`);
          return dirPath;
        } else {
          console.log(`✗ No index.html in: ${dirPath}`);
        }
      } catch (err) {
        console.log(`✗ Error reading directory ${dirPath}:`, err.message);
      }
    } else {
      console.log(`✗ Directory does not exist: ${dirPath}`);
    }
  }
  
  // If we get here, let's see what's actually in dist/
  const distPath = path.join(__dirname, 'dist');
  if (fs.existsSync(distPath)) {
    console.log('📁 Contents of dist directory:');
    try {
      const distContents = fs.readdirSync(distPath, { withFileTypes: true });
      distContents.forEach(item => {
        const itemPath = path.join(distPath, item.name);
        console.log(`  ${item.isDirectory() ? '📁' : '📄'} ${item.name}`);
        
        if (item.isDirectory()) {
          try {
            const subContents = fs.readdirSync(itemPath);
            console.log(`    Contents: ${subContents.slice(0, 5).join(', ')}${subContents.length > 5 ? '...' : ''}`);
            
            // Check if this subdirectory has index.html
            if (fs.existsSync(path.join(itemPath, 'index.html'))) {
              console.log(`    ✓ Found index.html in ${itemPath}`);
              return itemPath;
            }
          } catch (err) {
            console.log(`    Error reading subdirectory: ${err.message}`);
          }
        }
      });
    } catch (err) {
      console.log(`Error reading dist directory: ${err.message}`);
    }
  }
  
  throw new Error('Build directory with index.html not found');
}

let distDir;
try {
  distDir = findBuildDir();
  console.log('🎉 Successfully found build directory:', distDir);
} catch (error) {
  console.error('💥 Error finding build directory:', error.message);
  
  // Final debug info
  console.log('\n📋 Debug Information:');
  console.log('__dirname:', __dirname);
  console.log('process.cwd():', process.cwd());
  console.log('Available directories in root:', 
    fs.readdirSync(__dirname).filter(item => 
      fs.statSync(path.join(__dirname, item)).isDirectory()
    ).join(', ')
  );
  
  process.exit(1);
}

// Security headers and static file serving
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});

// Serve static files from the dist directory
app.use(express.static(distDir, {
  maxAge: '1y',
  etag: false
}));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    distDir: distDir 
  });
});

// Handle Angular routing - serve index.html for all other routes
app.get('*', (req, res) => {
  const indexPath = path.join(distDir, 'index.html');
  console.log(`📄 Serving index.html for route: ${req.path}`);
  res.sendFile(indexPath);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
  console.log(`📁 Serving files from: ${distDir}`);
  console.log(`🌐 Health check available at: http://localhost:${port}/health`);
});