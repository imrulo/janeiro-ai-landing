# 🚀 Janeiro.ai Landing Page - Deployment Checklist

## Pre-Deployment Verification

### ✅ Code Quality
- [ ] **Linting**: No ESLint errors (`npm run lint`)
- [ ] **TypeScript**: No type errors (`npm run build`)
- [ ] **Build Success**: Production build completes without errors
- [ ] **Dependencies**: All packages up to date and secure

### ✅ Functionality Testing
- [ ] **CTAs Working**: WhatsApp and email links functional
- [ ] **Responsive Design**: Test on mobile, tablet, desktop
- [ ] **Cross-Browser**: Chrome, Firefox, Safari, Edge
- [ ] **Accessibility**: Screen reader compatibility
- [ ] **404 Page**: Custom 404 page displays correctly

### ✅ SEO & Performance
- [ ] **Schema Markup**: Validate with Google Rich Results Test
- [ ] **Meta Tags**: All meta tags properly configured
- [ ] **Images**: All images loading and optimized
- [ ] **Lighthouse Score**: Performance >90, Accessibility >95, SEO >95
- [ ] **Core Web Vitals**: LCP <2.5s, FID <100ms, CLS <0.1

### ✅ Security
- [ ] **HTTPS**: SSL certificate valid
- [ ] **Security Headers**: All security headers implemented
- [ ] **External Links**: All external links use proper rel attributes
- [ ] **Content Security Policy**: CSP properly configured

## Vercel Deployment Steps

### 1. Environment Setup
```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Login to Vercel
vercel login
```

### 2. Project Configuration
```bash
# Navigate to project directory
cd /Users/imrulo.eth/janeiro-ai-landing

# Initialize Vercel project (if first time)
vercel

# Configure environment variables (if needed)
vercel env add
```

### 3. Build & Deploy
```bash
# Test build locally
npm run build

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### 4. Post-Deployment Verification
- [ ] **Domain Access**: Site loads correctly at production URL
- [ ] **SSL Certificate**: HTTPS working properly
- [ ] **Performance**: Run Lighthouse audit on live site
- [ ] **Mobile**: Test on actual mobile devices
- [ ] **Analytics**: Verify tracking codes working (if implemented)

## Manual Deployment (Alternative)

### 1. Build for Production
```bash
npm run build
npm run start
```

### 2. Export Static Files (if needed)
```bash
# Add to package.json if using static export
"export": "next build && next export"
```

### 3. Upload to Hosting Provider
- Upload `out` folder contents to hosting provider
- Configure redirects for SPA routing
- Set up SSL certificate
- Configure caching headers

## Performance Optimization Checklist

### ✅ Image Optimization
- [ ] All images use Next.js Image component
- [ ] Proper alt text for accessibility
- [ ] Images optimized for different screen sizes
- [ ] Lazy loading implemented

### ✅ Caching Strategy
- [ ] Static assets cached for 1 year
- [ ] HTML pages cached appropriately
- [ ] CDN configured (if using)
- [ ] Cache headers properly set

### ✅ Bundle Optimization
- [ ] Tree shaking enabled
- [ ] Unused CSS removed
- [ ] JavaScript bundles optimized
- [ ] Font loading optimized

## Monitoring & Analytics

### ✅ Performance Monitoring
- [ ] Google PageSpeed Insights
- [ ] Core Web Vitals monitoring
- [ ] Real User Monitoring (RUM)
- [ ] Error tracking setup

### ✅ SEO Monitoring
- [ ] Google Search Console setup
- [ ] Schema markup validation
- [ ] Sitemap submission
- [ ] Robots.txt verification

### ✅ Conversion Tracking
- [ ] CTA click tracking
- [ ] Contact form submissions
- [ ] WhatsApp link clicks
- [ ] Email link clicks

## Security Checklist

### ✅ Headers & Security
- [ ] X-Frame-Options: DENY
- [ ] X-Content-Type-Options: nosniff
- [ ] Referrer-Policy: origin-when-cross-origin
- [ ] Permissions-Policy configured
- [ ] CSP headers set

### ✅ External Dependencies
- [ ] All external links use rel="noopener noreferrer"
- [ ] External images from trusted sources
- [ ] No inline scripts (security best practice)
- [ ] External resources properly validated

## Backup & Recovery

### ✅ Backup Strategy
- [ ] Code repository backed up
- [ ] Environment variables documented
- [ ] Database backups (if applicable)
- [ ] Static assets backed up

### ✅ Rollback Plan
- [ ] Previous version accessible
- [ ] Quick rollback procedure documented
- [ ] Monitoring alerts configured
- [ ] Emergency contact information

## Post-Launch Tasks

### ✅ Immediate (Day 1)
- [ ] Monitor error logs
- [ ] Check performance metrics
- [ ] Verify all CTAs working
- [ ] Test on multiple devices

### ✅ Short-term (Week 1)
- [ ] Set up analytics tracking
- [ ] Monitor conversion rates
- [ ] A/B test CTA variations
- [ ] Gather user feedback

### ✅ Medium-term (Month 1)
- [ ] Analyze performance data
- [ ] Optimize based on metrics
- [ ] Implement improvements
- [ ] Scale monitoring

## Emergency Procedures

### 🚨 If Site Goes Down
1. Check Vercel dashboard for errors
2. Review deployment logs
3. Rollback to previous version if needed
4. Contact support if necessary

### 🚨 If Performance Issues
1. Run Lighthouse audit
2. Check Core Web Vitals
3. Review bundle size
4. Optimize images and assets

### 🚨 If Security Issues
1. Review security headers
2. Check for vulnerabilities
3. Update dependencies
4. Implement additional security measures

---

## Quick Commands Reference

```bash
# Development
npm run dev

# Build
npm run build

# Start production
npm run start

# Lint
npm run lint

# Deploy to Vercel
vercel --prod

# Check build
npm run build && npm run start
```

---

**Note**: This checklist ensures a smooth deployment and optimal performance for the Janeiro.ai domain landing page. All items should be verified before going live.
