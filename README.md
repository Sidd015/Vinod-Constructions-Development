# Vinod Constructions and Development — Website

This is a professional Vite + React + Tailwind CSS website for Vinod Constructions and Development. It includes: Home, Services, Approval Steps, Projects, Contact, and a Get Quote modal.

## Quick Start

1. Install dependencies:
```powershell
npm install
```

2. Run dev server:
```powershell
npm run dev
```

3. Build for production:
```powershell
npm run build
```

4. Preview production build:
```powershell
npm run preview
```

## Configuration Before Deployment

### 1. Update EmailJS Credentials
This project uses EmailJS for contact forms. Update the placeholders in:
- `src/components/Contact.jsx`
- `src/components/QuoteModal.jsx`

Replace `SERVICE_ID`, `TEMPLATE_ID`, and `USER_ID` with your EmailJS credentials from [emailjs.com](https://emailjs.com)

### 2. Update GitHub Pages Config
Edit `vite.config.js` and update the `base` path:
```javascript
base: '/YOUR_REPO_NAME/',
```

### 3. Update Deploy Script
Edit `deploy.js` and replace:
- `YOUR_USERNAME` with your GitHub username
- Update the repo URL to match your repository

## Deployment Options

### Option 1: GitHub Pages (Recommended)

#### Setup:
1. Create a GitHub repository: `YOUR_USERNAME/vinod-constructions-website`
2. Initialize git locally:
```powershell
git init
git remote add origin https://github.com/YOUR_USERNAME/vinod-constructions-website.git
git branch -M main
```

3. Install gh-pages package:
```powershell
npm install --save-dev gh-pages
```

4. Deploy:
```powershell
npm run deploy
```

Your site will be live at: `https://YOUR_USERNAME.github.io/vinod-constructions-website/`

#### Option 1b: Automatic Deployment with GitHub Actions
Push your code to the main branch. The workflow in `.github/workflows/deploy.yml` will automatically build and deploy your site.

### Option 2: Vercel (Easiest)
1. Push your repo to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Vite and deploy
5. Site will be live at your Vercel URL

### Option 3: Netlify
1. Push your repo to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect your GitHub repository
4. Set build command: `npm run build`
5. Set publish directory: `dist`
6. Deploy

## Customization

### Update Company Information
- Edit `src/pages/Home.jsx` for hero content
- Edit `src/components/Services.jsx` for services list
- Edit `src/components/Contact.jsx` for contact details and office locations
- Edit `src/components/Footer.jsx` for footer content

### Update Colors
Edit `src/index.css` CSS variables:
```css
:root{
  --primary: #0f4c81;      /* Primary blue */
  --gold: #c9a74a;         /* Gold accent */
  --accent: #05668d;       /* Accent color */
}
```

### Update Images
Replace images in `public/assets/`:
- `project-blueprint.jpg` → Project image 1
- `project-livingroom.jpg` → Project image 2
- `project-office.jpg` → Project image 3

## Project Structure
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── Steps.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── QuoteModal.jsx
├── pages/
│   ├── Home.jsx
│   └── About.jsx
├── App.jsx
├── main.jsx
└── index.css
public/
├── assets/
│   ├── project-*.jpg
│   └── Documents_Checklist.pdf
```

## SEO & Meta Tags
Meta tags are configured in `index.html`. Update:
- Title
- Description
- Meta keywords (consider adding)

For better SEO, consider adding structured data (JSON-LD) in `index.html`.

## Troubleshooting

### Links not working after deployment?
Check that `vite.config.js` has the correct `base` path matching your repository name.

### Assets not loading?
Ensure all asset paths in components use `/assets/...` (relative to public folder).

### EmailJS not sending?
1. Verify EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, EMAIL_USER_ID in Contact.jsx
2. Check that your email template matches the data being sent
3. Test on [emailjs.com](https://emailjs.com) dashboard

## Technologies Used
- **Frontend Framework:** React 18
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Routing:** React Router DOM
- **Email:** EmailJS
- **Deployment:** GitHub Pages / Vercel / Netlify

## License
This project is private and proprietary to Vinod Constructions and Development.

## Support
For issues or questions, contact the development team.
