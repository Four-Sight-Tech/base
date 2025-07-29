# FourSight - Deployment Guide

This guide explains how to deploy FourSight as a static website to GitHub Pages.

## Static Site Deployment

FourSight has been configured to work as a static website without a backend. The contact form and newsletter signup will work with form handling services or can be connected to serverless functions.

### Building for Static Deployment

1. **Build the static site:**
   ```bash
   chmod +x build-static.sh
   ./build-static.sh
   ```

2. **Preview locally:**
   ```bash
   npx vite preview --config vite.config.static.ts
   ```

### GitHub Pages Deployment

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial FourSight website"
   git branch -M main
   git remote add origin https://github.com/yourusername/foursight.git
   git push -u origin main
   ```

2. **Configure GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "GitHub Actions"
   - The included workflow will automatically deploy on every push to main

3. **Update base URL:**
   - Edit `vite.config.static.ts`
   - Change `base: '/foursight/'` to match your repository name
   - If using a custom domain, set `base: '/'`

### Alternative Deployment Options

- **Netlify:** Drag and drop the `dist` folder
- **Vercel:** Connect your GitHub repository
- **Surge.sh:** `npm install -g surge && surge dist`

### Form Functionality

For the contact form and newsletter to work, you'll need to:

1. **Use a form service like:**
   - Netlify Forms (if deploying to Netlify)
   - Formspree
   - EmailJS
   - GetForm

2. **Update form actions in:**
   - `client/src/components/contact-section.tsx`
   - `client/src/components/footer.tsx`

### Customization

- **Logo:** Update the SVG in navigation and footer components
- **Colors:** Modify CSS variables in `client/src/index.css`
- **Content:** Edit component files in `client/src/components/`
- **Base URL:** Update in `vite.config.static.ts` for your domain

The website is fully responsive and includes:
- Custom FourSight branding and logo
- About Us section
- Contact form
- Pricing section
- Newsletter signup
- Mobile-responsive navigation
- Dark mode support (if implemented)