# Deployment Guide

Your Next.js website is ready for deployment! Here are several options:

## Option 1: Vercel (Recommended for Next.js)

1. **Create a Vercel account:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Deploy via Vercel Dashboard:**
   - Push your code to GitHub/GitLab/Bitbucket
   - Connect your repository to Vercel
   - Vercel will automatically detect Next.js and deploy

3. **Deploy via CLI:**
   ```bash
   npx vercel login
   npx vercel --prod
   ```

## Option 2: Netlify

1. **Create a Netlify account:**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Deploy via Netlify Dashboard:**
   - Push your code to GitHub/GitLab/Bitbucket
   - Connect your repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `out`

3. **Deploy via CLI:**
   ```bash
   npm install -g netlify-cli
   netlify login
   ./deploy-netlify.sh
   ```

## Option 3: GitHub Pages

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to Pages section
   - Select "GitHub Actions" as source
   - The workflow will automatically deploy on push

## Option 4: Manual Deployment

You can also manually upload the `out` folder to any static hosting service:

- **Firebase Hosting**
- **AWS S3 + CloudFront**
- **Cloudflare Pages**
- **Surge.sh**

## Current Build Status

✅ Your website builds successfully  
✅ Static files generated in `out/` directory  
✅ ESLint errors fixed  
✅ Ready for deployment  

## Quick Test

To test your build locally:
```bash
npx serve out
```

Then visit `http://localhost:3000` to see your deployed website. 