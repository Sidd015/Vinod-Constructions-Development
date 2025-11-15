# GitHub Pages Deployment Checklist

Complete this checklist before deploying your Vinod Constructions website to GitHub Pages.

## Pre-Deployment Steps

### 1. EmailJS Configuration
- [ ] Sign up at [emailjs.com](https://emailjs.com) if you haven't already
- [ ] Create an email service (Gmail, Outlook, etc.)
- [ ] Create an email template
- [ ] Get your credentials:
  - [ ] `SERVICE_ID` (e.g., `service_xxxxx`)
  - [ ] `TEMPLATE_ID` (e.g., `template_xxxxx`)
  - [ ] `PUBLIC_KEY` (e.g., `xxxxx`)

### 2. Update EmailJS in Code
Edit these two files and replace the placeholders:

**File: `src/components/Contact.jsx`**
```javascript
// Find these lines and replace with your actual IDs:
emailjs.init('YOUR_PUBLIC_KEY');
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {...})
```

**File: `src/components/QuoteModal.jsx`**
```javascript
// Find these lines and replace with your actual IDs:
emailjs.init('YOUR_PUBLIC_KEY');
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {...})
```

### 3. GitHub Repository Setup
- [ ] Create a GitHub account (if you don't have one)
- [ ] Create a new repository named: `vinod-constructions-website`
- [ ] Initialize local git:
```powershell
cd "D:/RNIT Projects/Naipunyam/Files/WS2"
git init
git remote add origin https://github.com/YOUR_USERNAME/vinod-constructions-website.git
git branch -M main
```

### 4. Update vite.config.js
Edit `vite.config.js` and update the `base` path:
```javascript
base: '/vinod-constructions-website/',  // Replace with your repo name
```

### 5. Update deploy.js
Edit `deploy.js` and replace:
- Line with `repo: 'https://github.com/YOUR_USERNAME/...` → use your GitHub username

## Deployment Methods

### Method 1: GitHub Pages (Automatic with GitHub Actions) ✅ Recommended

1. Push your code to GitHub:
```powershell
cd "D:/RNIT Projects/Naipunyam/Files/WS2"
git add .
git commit -m "Initial commit: Vinod Constructions website"
git push -u origin main
```

2. GitHub Actions will automatically:
   - Install dependencies
   - Build the project (`npm run build`)
   - Deploy to `gh-pages` branch
   - Your site will be live at: `https://YOUR_USERNAME.github.io/vinod-constructions-website/`

3. Verify:
   - Go to your GitHub repo → Settings → Pages
   - Confirm source is set to "Deploy from a branch" → `gh-pages` branch
   - Wait 2-5 minutes for the build to complete

### Method 2: Manual Deployment with gh-pages

1. Create and configure your GitHub repository (steps 1-4 above)

2. Deploy:
```powershell
npm run deploy
```

3. Your site will be live at: `https://YOUR_USERNAME.github.io/vinod-constructions-website/`

### Method 3: Vercel (Alternative - Even Easier)

1. Install Vercel CLI:
```powershell
npm install -g vercel
```

2. Deploy:
```powershell
vercel
```

3. Follow the prompts. Your site will be live instantly.

## Post-Deployment Verification

- [ ] Visit your GitHub Pages URL: `https://YOUR_USERNAME.github.io/vinod-constructions-website/`
- [ ] Test all navigation links (Home, About, Services, etc.)
- [ ] Test smooth scrolling to sections (Services, Projects, Contact)
- [ ] Verify images load correctly
- [ ] Test "Get a Quote" button (opens modal)
- [ ] Test contact form submission
  - [ ] Check that email is received
  - [ ] Verify all fields are captured correctly
- [ ] Test on mobile devices (responsive design)
- [ ] Check console for any errors (F12 → Console tab)

## Troubleshooting

### Issue: "Page not found" or 404 errors
**Solution:** Verify that `base: '/vinod-constructions-website/'` in `vite.config.js` matches your repository name.

### Issue: CSS/images not loading
**Solution:** 
- Clear browser cache (Ctrl+Shift+Delete)
- Check that all asset paths use `/assets/...`
- Verify files exist in `public/assets/` folder

### Issue: Links don't work (e.g., Services link doesn't scroll)
**Solution:**
- Refresh the page (hard refresh: Ctrl+Shift+R)
- Check browser console for JavaScript errors
- Ensure the section IDs exist in components (e.g., `id="services"`)

### Issue: Contact form doesn't send emails
**Solution:**
1. Verify EmailJS credentials are correct in Contact.jsx
2. Check EmailJS dashboard to see if emails are being sent
3. Check your email spam folder
4. Verify email template exists in EmailJS account
5. Test the template with sample data on EmailJS website

### Issue: Deployment fails on GitHub Actions
**Solution:**
- Go to your GitHub repo → Actions tab
- Click on the failed workflow
- Check the error logs
- Common issues:
  - Missing `@vitejs/plugin-react` package → run `npm install --save-dev @vitejs/plugin-react`
  - Incorrect `base` path in `vite.config.js`
  - Node.js version compatibility → use Node 18+

## Next Steps (Optional Enhancements)

- [ ] Add custom domain (GitHub Settings → Custom domain)
- [ ] Set up SSL certificate (automatic with GitHub Pages)
- [ ] Add analytics (Google Analytics, Vercel Analytics)
- [ ] Create blog section
- [ ] Add team member photos
- [ ] Add testimonials section
- [ ] Implement 404 page redirect
- [ ] Add sitemap.xml for SEO
- [ ] Add robots.txt for crawlers

## Important Notes

- ✅ Your site is now live and publicly accessible
- ✅ Every push to the `main` branch will automatically update your live site (with GitHub Actions)
- ✅ Changes typically go live within 2-5 minutes
- ⚠️ Keep EmailJS credentials private (never commit `.env` files to public repos)
- ⚠️ GitHub Pages is free for public repositories

## Support & Resources

- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [GitHub Pages Docs](https://pages.github.com/)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

**Deployment Date:** ___________
**Live URL:** ___________
**Repository:** ___________
