#!/bin/bash

# Build script for static deployment to GitHub Pages
echo "Building FourSight static site..."

# Build the client for static deployment
npx vite build --config vite.config.static.ts

echo "Static build completed! Files are in ./dist/"
echo "To deploy to GitHub Pages:"
echo "1. Push this repository to GitHub"
echo "2. Enable GitHub Pages in repository settings"
echo "3. Set source to GitHub Actions"
echo "4. Use the provided .github/workflows/deploy.yml"