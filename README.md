# Janeiro.ai - Premium Domain Landing Page

A sophisticated, conversion-optimized landing page designed to sell the premium domain **Janeiro.ai**. Built with Next.js 14, TypeScript, and Tailwind CSS for maximum performance and user experience.

## 🚀 Features

- **Premium Design**: Sophisticated, high-conversion UI with luxury aesthetics
- **Mobile-First**: Fully responsive design optimized for all devices
- **Performance Optimized**: Lighthouse score >90 with fast loading times
- **SEO Ready**: Complete meta tags, sitemap, and robots.txt
- **Accessibility**: WCAG compliant with proper contrast ratios
- **Animations**: Smooth, subtle animations using Framer Motion
- **Conversion Focused**: Strategic CTA placement and trust signals

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **SEO**: Next-SEO
- **Deployment**: Vercel (optimized)

## 📁 Project Structure

```
janeiro-ai-landing/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles and Tailwind config
│   │   ├── layout.tsx           # Root layout with SEO meta tags
│   │   ├── page.tsx             # Main landing page
│   │   ├── not-found.tsx        # Custom 404 page
│   │   ├── robots.ts            # SEO robots configuration
│   │   └── sitemap.ts           # SEO sitemap generation
│   └── components/              # Reusable components (if needed)
├── public/
│   ├── manifest.json            # PWA manifest
│   └── favicon files            # Various favicon sizes
├── tailwind.config.ts           # Tailwind configuration
├── next.config.js               # Next.js configuration
└── package.json                 # Dependencies and scripts
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd janeiro-ai-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build & Deployment

### Local Build

```bash
npm run build
npm run start
```

### Vercel Deployment (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy to Vercel**
   ```bash
   vercel --prod
   ```

3. **Automatic deployments**
   - Connect your GitHub repository to Vercel
   - Enable automatic deployments on push to main branch

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Export static files** (if needed)
   ```bash
   npm run export
   ```

3. **Deploy to any static hosting service**
   - Upload the `out` folder to your hosting provider
   - Configure redirects for SPA routing

## 🎨 Customization

### Domain Name
To change the domain name, update the `DOMAIN` constant in `src/app/page.tsx`:

```typescript
const DOMAIN = 'YourDomain.ai';
```

### Contact Information
Update the contact links in `src/app/page.tsx`:

```typescript
// WhatsApp link
href="https://wa.link/your-whatsapp-link"

// Email link  
href="mailto:your-email@domain.com"
```

### Styling
- Modify `src/app/globals.css` for global styles
- Update `tailwind.config.ts` for theme customization
- Adjust color schemes in the component files

### Content
- Update all text content in `src/app/page.tsx`
- Modify meta tags in `src/app/layout.tsx`
- Adjust images by updating the Unsplash URLs

## 📊 Performance Optimization

- **Image Optimization**: Using Next.js Image component with optimized loading
- **Code Splitting**: Automatic code splitting with Next.js
- **Bundle Analysis**: Run `npm run build` to see bundle size
- **Lighthouse**: Test performance with Chrome DevTools

## 🔍 SEO Features

- **Meta Tags**: Complete Open Graph and Twitter Card support
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions
- **Structured Data**: Ready for schema markup implementation
- **Performance**: Optimized for Core Web Vitals

## 📱 PWA Support

- **Manifest**: Complete PWA manifest for app-like experience
- **Icons**: Multiple favicon sizes for different devices
- **Theme**: Dark theme optimized for premium feel

## 🛡️ Security

- **HTTPS**: Configured for secure connections
- **CSP**: Content Security Policy ready
- **Dependencies**: Regularly updated dependencies

## 📈 Analytics Integration

To add analytics, update `src/app/layout.tsx`:

```typescript
// Google Analytics
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created for domain sale purposes. All rights reserved.

## 📞 Support

For questions about this landing page or the domain sale:

- **Email**: imrulo.eth@proton.me
- **WhatsApp**: [Contact via WhatsApp](https://wa.link/6difl3)

---

**Made with ❤️ by imrulo.eth**

*This is a domain landing page for sale purposes only. No active services are implied. Domain availability is subject to change.*