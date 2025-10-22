# Deployment Guide

## Pre-Deployment Checklist

- [ ] All environment variables configured
- [ ] Custom fonts added (or using system fonts)
- [ ] Images optimized and added to `/public/images/`
- [ ] Meta tags and SEO configured
- [ ] Analytics tracking added (optional)
- [ ] Tested on multiple devices and browsers
- [ ] Build succeeds without errors
- [ ] Lighthouse score > 90

## Deployment Options

### 1. Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications:

#### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Connect your GitHub account
   - Select the repository
   - Click "Deploy"

3. **Configure Environment Variables** (if needed)
   - Go to Project Settings → Environment Variables
   - Add any required variables

4. **Custom Domain** (optional)
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records

**Automatic Deployments**: Every push to `main` will trigger a new deployment.

---

### 2. Netlify

#### Steps:

1. **Build Configuration**
   
   Create `netlify.toml`:
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

2. **Deploy**
   ```bash
   npm install -g netlify-cli
   netlify init
   netlify deploy --prod
   ```

---

### 3. AWS Amplify

#### Steps:

1. **Install AWS Amplify CLI**
   ```bash
   npm install -g @aws-amplify/cli
   amplify configure
   ```

2. **Initialize Amplify**
   ```bash
   amplify init
   amplify add hosting
   amplify publish
   ```

---

### 4. Self-Hosted (VPS/Cloud)

#### Requirements:
- Node.js 18.17+
- PM2 or similar process manager
- Nginx (for reverse proxy)

#### Steps:

1. **Build the Application**
   ```bash
   npm run build
   ```

2. **Install PM2**
   ```bash
   npm install -g pm2
   ```

3. **Start the Application**
   ```bash
   pm2 start npm --name "tribly-website" -- start
   pm2 save
   pm2 startup
   ```

4. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

5. **Enable SSL with Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

---

### 5. Docker

#### Dockerfile

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

#### Deploy with Docker

```bash
# Build
docker build -t tribly-website .

# Run
docker run -p 3000:3000 tribly-website
```

#### Docker Compose

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

```bash
docker-compose up -d
```

---

## Performance Optimization

### 1. Image Optimization

- Use Next.js `Image` component
- Serve images in modern formats (WebP, AVIF)
- Implement lazy loading
- Use appropriate image sizes

### 2. Code Splitting

Next.js automatically code-splits. To optimize further:

```typescript
// Dynamic imports for heavy components
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false
});
```

### 3. Caching Strategy

```typescript
// next.config.mjs
export default {
  async headers() {
    return [
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};
```

### 4. Bundle Size Analysis

```bash
npm install @next/bundle-analyzer
```

```typescript
// next.config.mjs
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer({
  // your config
});
```

Run analysis:
```bash
ANALYZE=true npm run build
```

---

## Monitoring

### Analytics

Add Google Analytics:

```typescript
// app/layout.tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Error Tracking

Consider integrating:
- Sentry
- LogRocket
- Rollbar

---

## CI/CD Pipeline

### GitHub Actions Example

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - run: npm test
      - name: Deploy
        # Add your deployment step here
```

---

## Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Memory Issues

Increase Node.js memory limit:
```bash
NODE_OPTIONS="--max_old_space_size=4096" npm run build
```

### Environment Variables Not Working

Ensure variables are prefixed with `NEXT_PUBLIC_` for client-side access.

---

## Post-Deployment

- [ ] Verify all pages load correctly
- [ ] Test all interactive features
- [ ] Check mobile responsiveness
- [ ] Verify forms and CTAs work
- [ ] Test on different browsers
- [ ] Run Lighthouse audit
- [ ] Set up monitoring and alerts
- [ ] Configure CDN (if not using Vercel)
- [ ] Set up SSL certificate
- [ ] Configure domain and DNS

---

## Support

For deployment issues:
- Next.js Deployment Docs: https://nextjs.org/docs/deployment
- Vercel Support: https://vercel.com/support
- Community Forum: https://github.com/vercel/next.js/discussions

