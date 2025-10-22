# Tribly Website Setup Guide

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
tribly-website/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Homepage with all sections
│   └── globals.css         # Global styles and utilities
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── RetentionSection.tsx
│   ├── EngagementSection.tsx
│   ├── CustomerDataSection.tsx
│   ├── AutomationAnalytics.tsx
│   ├── Industries.tsx
│   ├── Testimonials.tsx
│   ├── HowItWorks.tsx
│   └── Footer.tsx
├── public/
│   └── fonts/              # Custom fonts (add your font files here)
├── tailwind.config.ts      # Tailwind configuration
└── next.config.mjs         # Next.js configuration
```

## Custom Fonts Setup (Optional)

### Option 1: Use Custom Fonts

1. Download **Clash Grotesk** and **Manrope** fonts in WOFF2 format
2. Place them in `/public/fonts/` directory:
   - ClashGrotesk-Regular.woff2
   - ClashGrotesk-Medium.woff2
   - ClashGrotesk-Semibold.woff2
   - ClashGrotesk-Bold.woff2
   - Manrope-Regular.woff2
   - Manrope-Medium.woff2
   - Manrope-Bold.woff2

3. Update `/app/layout.tsx` to load the fonts:

```typescript
const clashGrotesk = localFont({
  src: [
    {
      path: "../public/fonts/ClashGrotesk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    // ... add other weights
  ],
  variable: "--font-clash",
  display: "swap",
});
```

### Option 2: Use System Fonts (Current Default)

The project is currently configured to use system fonts as fallbacks. This provides:
- ✅ Faster loading times
- ✅ No licensing concerns
- ✅ Good cross-platform compatibility

## Figma Integration

The design is based on Figma specs with:
- Exact spacing and sizing from Figma
- Color variables from design tokens
- Component structure matching Figma layers

### Design Tokens

```css
Primary: #9747ff
Primary Dark: #862ef8
Accent Green: #5abb80
Accent Purple: #e2cbff
Accent Blue: #023e8a
```

## Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are responsive and follow mobile-first approach.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

Build the project and deploy the `.next` folder:

```bash
npm run build
```

## Features Implemented

- ✅ Pixel-perfect Figma implementation
- ✅ Fully responsive design
- ✅ Framer Motion animations
- ✅ SEO optimized (meta tags, semantic HTML)
- ✅ Accessibility best practices
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Performance optimized

## Future Enhancements

### Backend Integration

The website is ready for backend integration:

1. Create API routes in `/app/api/`
2. Add form submission handlers
3. Connect to analytics services
4. Implement authentication

### Environment Variables

Copy `.env.local.example` to `.env.local` and add your values:

```bash
cp .env.local.example .env.local
```

## Troubleshooting

### Issue: Fonts not loading

**Solution**: Either add custom font files to `/public/fonts/` or continue using system fonts.

### Issue: Images not displaying

**Solution**: Replace localhost image URLs with actual image assets in `/public/images/`.

### Issue: Build errors

**Solution**: 
```bash
rm -rf .next node_modules
npm install
npm run build
```

## Support

For questions or issues:
- Check Next.js documentation: https://nextjs.org/docs
- Check Tailwind CSS documentation: https://tailwindcss.com/docs
- Check Framer Motion documentation: https://www.framer.com/motion/

## License

© 2025 Tribly. All rights reserved.

