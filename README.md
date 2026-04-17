# HLS Global Assignment App

A modern, responsive website for HLS Global Group built with Next.js 16, React 19, and Tailwind CSS.

## Overview

This is a professional corporate website featuring:
- **Header** - Sticky navigation with responsive mobile menu
- **Hero Section** - Eye-catching landing section
- **Ticker** - Scrolling updates or announcements
- **About** - Information about HLS Global Group
- **Insights** - Latest news and insights
- **Footer** - Company branding and copyright information

## Tech Stack

- **Framework**: [Next.js 16.2.4](https://nextjs.org)
- **React**: 19.2.4
- **Language**: TypeScript 5
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Linting**: ESLint 9

## Getting Started

### Prerequisites
- Node.js 18+ (recommended)
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

3. Deployment Link [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint checks

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Global Tailwind styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main homepage
├── components/
│   ├── Header.tsx        # Navigation header
│   ├── Hero.tsx          # Hero section
│   ├── Ticker.tsx        # Ticker component
│   ├── About.tsx         # About section
│   └── Insights.tsx      # Insights section
```

## Development

The site auto-reloads as you edit files. Start with modifying [src/app/page.tsx](src/app/page.tsx) to update the homepage.

## Building for Production

```bash
npm run build
npm start
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Guide](https://tailwindcss.com/docs)
- [React 19 Docs](https://react.dev)

## License

All rights reserved © HLS Global Group
