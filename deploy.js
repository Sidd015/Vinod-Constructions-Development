#!/usr/bin/env node

/**
 * GitHub Pages Deployment Script
 * Deploys the built site to gh-pages branch
 * 
 * Prerequisites:
 * 1. Initialize git repo: git init
 * 2. Add remote: git remote add origin https://github.com/YOUR_USERNAME/vinod-constructions-website.git
 * 3. Create gh-pages branch: git branch gh-pages
 * 4. Install gh-pages: npm install --save-dev gh-pages
 * 5. Run: npm run deploy
 */

const ghpages = require('gh-pages');
const path = require('path');

const options = {
  branch: 'gh-pages',
  repo: 'https://github.com/YOUR_USERNAME/vinod-constructions-website.git',
  user: {
    name: 'GitHub Actions',
    email: 'actions@github.com'
  },
  dotfiles: true
};

ghpages.publish(path.join(__dirname, 'dist'), options, (err) => {
  if (err) {
    console.error('❌ Deployment failed:', err);
    process.exit(1);
  } else {
    console.log('✅ Site deployed successfully to GitHub Pages!');
    console.log('📍 Your site will be available at: https://YOUR_USERNAME.github.io/vinod-constructions-website/');
  }
});
