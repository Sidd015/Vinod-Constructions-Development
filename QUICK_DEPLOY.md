# 🚀 Quick Start: Deploy to GitHub Pages in 5 Minutes

## Step 1: Prepare EmailJS (2 minutes)

1. Go to [emailjs.com](https://emailjs.com) and sign up
2. Create an email service (connect your Gmail or Outlook)
3. Create an email template
4. Get your credentials:
   - SERVICE_ID (looks like: `service_xxxxx`)
   - TEMPLATE_ID (looks like: `template_xxxxx`)
   - PUBLIC_KEY (looks like: `xxxxx`)

## Step 2: Update Code (1 minute)

Open `src/components/Contact.jsx` around line 30 and find:
```javascript
emailjs.init('YOUR_PUBLIC_KEY_HERE');
```

Replace with your actual PUBLIC_KEY from EmailJS.

Also update the `emailjs.send()` call with your SERVICE_ID and TEMPLATE_ID.

Repeat for `src/components/QuoteModal.jsx`.

## Step 3: Create GitHub Repository (1 minute)

1. Go to [github.com](https://github.com) and log in (sign up if needed)
2. Click the **+** icon in top right → **New repository**
3. Name it: `vinod-constructions-website`
4. Choose **Public** (important for GitHub Pages)
5. Click **Create repository**

## Step 4: Deploy (1 minute)

Open PowerShell in the project folder:

```powershell
cd "D:/RNIT Projects/Naipunyam/Files/WS2"

# Initialize git and link to your GitHub repo
git init
git remote add origin https://github.com/YOUR_USERNAME/vinod-constructions-website.git
git branch -M main

# Add all files and push
git add .
git commit -m "Initial commit: Vinod Constructions website"
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 5: Verify Deployment (Automatic)

1. Wait 2-5 minutes for GitHub Actions to build and deploy
2. Go to: `https://YOUR_USERNAME.github.io/vinod-constructions-website/`
3. Your site is now LIVE! 🎉

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Page not found" (404) | Hard refresh: Ctrl+Shift+R |
| Images not showing | Check `public/assets/` folder exists |
| Links don't work | Verify `vite.config.js` has correct repo name in `base` |
| Contact form doesn't send | Check EmailJS credentials are correct |
| Build failed | Check GitHub Actions → Actions tab for error logs |

## Next Steps

- Test all features on your live site
- Share the URL with clients
- Update phone numbers/addresses in Contact.jsx
- Add Google Analytics (optional)
- Set up custom domain (optional)

---

**Need help?** See `DEPLOYMENT_CHECKLIST.md` for detailed instructions.
