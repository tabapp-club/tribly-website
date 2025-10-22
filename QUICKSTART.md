# 🚀 Quick Start Guide

Get the Tribly website up and running in 5 minutes!

## ⚡ Super Quick Start

```bash
cd /Users/aditya/Documents/tribly-website
npm install
npm run dev
```

Then open: **http://localhost:3000**

That's it! 🎉

---

## 📋 What You'll See

✅ **Fully functional website** with all sections:
- Navigation bar with glassmorphism
- Hero section with animations
- Retention features
- Engagement tools
- Customer data hub
- Automation & Analytics cards
- Industries we serve
- Customer testimonials
- How it works section
- Comprehensive footer

---

## 🎨 Current State

### ✅ Complete
- All components built
- Responsive design
- Animations working
- SEO optimized
- Production-ready code

### 📝 Optional Customizations

1. **Fonts** (Currently using system fonts)
   - Add custom fonts to `/public/fonts/`
   - Update `app/layout.tsx` (see SETUP.md)

2. **Images** (Currently using placeholder URLs)
   - Add images to `/public/images/`
   - Replace URLs in components

3. **Content** (Using Figma content)
   - Edit components to update text
   - Modify data in arrays/objects

---

## 🎯 Next Steps

### For Development

1. **Customize Content**
   ```bash
   # Edit components in /components/
   code components/Hero.tsx
   ```

2. **Add Images**
   ```bash
   # Add to /public/images/
   # Then update component imports
   ```

3. **Configure Environment**
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your values
   ```

### For Production

1. **Build**
   ```bash
   npm run build
   ```

2. **Test Production Build**
   ```bash
   npm start
   ```

3. **Deploy** (Recommended: Vercel)
   ```bash
   # Push to GitHub
   git init
   git add .
   git commit -m "Initial commit"
   git push

   # Deploy on Vercel
   # Visit vercel.com and import your repo
   ```

---

## 📚 Documentation

| File | What it covers |
|------|----------------|
| `README.md` | Overview & quick start |
| `SETUP.md` | Detailed setup guide |
| `DESIGN_SYSTEM.md` | Colors, fonts, spacing |
| `COMPONENT_API.md` | Component usage |
| `DEPLOYMENT.md` | Deploy to production |
| `PROJECT_SUMMARY.md` | Complete project overview |

---

## 🔧 Common Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Run production build
npm run lint         # Check code quality

# Installation
npm install          # Install dependencies
npm ci              # Clean install (CI/CD)
```

---

## 🐛 Troubleshooting

### Port already in use?
```bash
# Use different port
npm run dev -- -p 3001
```

### Module not found?
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Build errors?
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

---

## 💡 Pro Tips

1. **Hot Reload**: Changes auto-refresh in dev mode
2. **TypeScript**: Get instant type checking
3. **Tailwind**: Use IntelliSense for class names
4. **Framer Motion**: Animations work automatically

---

## 📱 Test Responsive Design

1. Open DevTools (F12)
2. Click device toggle icon
3. Test different screen sizes

Or visit:
- Desktop: http://localhost:3000
- Mobile: http://192.168.x.x:3000 (your local IP)

---

## 🎉 You're All Set!

The website is ready to use. Here's what you can do:

1. ✅ **Use as-is** - Deploy immediately
2. 🎨 **Customize** - Change colors, fonts, content
3. 🔌 **Integrate** - Add backend, CMS, analytics
4. 📱 **Extend** - Add more pages and features

---

## 💬 Need Help?

Check the documentation files:
- Problems? → See `TROUBLESHOOTING` section in SETUP.md
- Want to customize? → See DESIGN_SYSTEM.md
- Ready to deploy? → See DEPLOYMENT.md
- Component questions? → See COMPONENT_API.md

---

**Happy coding! 🚀**

Built with Next.js 14 + TypeScript + Tailwind CSS + Framer Motion

