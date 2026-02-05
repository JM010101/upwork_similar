# Premium Product Showcase Website

A modern, professional website built with Next.js, TypeScript, and Tailwind CSS, featuring smooth animations, premium design, and responsive layout. Inspired by award-winning website designs with scroll-triggered animations, fullscreen navigation, and elegant UI components.

## Features

- 🎨 **Modern Design System** - Custom color palette (Orange #FA5C40, Teal #29525E) with consistent typography
- ✨ **Smooth Animations** - Scroll-triggered animations using Framer Motion
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🎯 **Fullscreen Navigation** - Elegant fullscreen menu with smooth transitions
- 🖼️ **Product Showcase** - Beautiful product cards with hover effects
- 📝 **Contact Forms** - Validated contact forms with React Hook Form
- ⚡ **Performance Optimized** - Image optimization, lazy loading, and code splitting
- 🔍 **SEO Ready** - Comprehensive metadata and Open Graph tags

## Tech Stack

- **Framework**: Next.js 16+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
similar/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   ├── products/           # Products page
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   └── api/contact/        # Contact form API route
├── components/
│   ├── navigation/         # Header and fullscreen menu
│   ├── sections/           # Page sections (Hero, Products, etc.)
│   └── ui/                 # Reusable UI components
├── lib/
│   ├── animations.ts       # Framer Motion animation variants
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## Customization

### Colors

Edit `app/globals.css` to customize the color palette:

```css
--primary-orange: #FA5C40;
--secondary-teal: #29525E;
```

### Content

- **Products**: Edit `components/sections/ProductShowcase.tsx`
- **Features**: Edit `components/sections/Features.tsx`
- **Hero**: Edit `components/sections/Hero.tsx`
- **About**: Edit `components/sections/About.tsx`

### Contact Form

The contact form API route is located at `app/api/contact/route.ts`. To integrate with an email service:

1. Install an email service (e.g., Resend, SendGrid)
2. Update the POST handler in `app/api/contact/route.ts`
3. Add environment variables for API keys

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This project can be deployed on:

- **Vercel** (recommended) - [Deploy Now](https://vercel.com/new)
- **Netlify** - Connect your repository
- **Any Node.js hosting** - Build and deploy

## License

This project is open source and available for use in your projects.

## Credits

Design inspired by modern, award-winning website designs. Built with Next.js and Tailwind CSS.
