# INFINITY AENGINES × FASHION FACTOR

This is a Next.js project recreating the exact hero section from the Figma design for the "Ultimate Innovation Show" event.

## Features

- **Exact Figma Recreation**: Built using precise measurements and styling from the original Figma design
- **Next.js 14**: Modern React framework with App Router
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **TypeScript**: Type-safe development
- **Responsive Design**: Optimized for various screen sizes
- **Custom Fonts**: Configured for Euclid Circular A, Euclid Square, Noto Sans, and Inter fonts

## Design Elements

The hero section includes:
- **Top Navigation**: Logo combination (INFINITY AENGINES × FASHION FACTOR) and event info box
- **Main Heading**: Large typography with "THE ULTIMATE INNOVATION SHOW" text
- **Call-to-Action Buttons**: "Buy tickets" (primary) and "Get sponsor" (outlined)
- **Statistics**: Live stream viewers (250,000+) and participants (2,500+) with icons
- **Background**: Gradient with subtle geometric pattern overlay

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd infity-fashion-factor
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Font Setup

The project is configured to use custom fonts that match the Figma design:

- **Euclid Circular A**: Main heading font
- **Euclid Square**: Button text font  
- **Noto Sans**: Statistics numbers
- **Inter**: Statistics labels

To use the actual custom fonts, place the font files in the `public/fonts/` directory:
- `EuclidCircularA-Regular.woff2`
- `EuclidCircularA-Bold.woff2`
- `EuclidSquare-Regular.woff2`

## Project Structure

```
├── app/
│   ├── components/
│   │   └── HeroSection.tsx    # Main hero section component
│   ├── globals.css            # Global styles and font imports
│   ├── layout.tsx             # Root layout component
│   └── page.tsx               # Home page
├── public/
│   └── fonts/                 # Custom font files (to be added)
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
└── next.config.js             # Next.js configuration
```

## Customization

### Colors
The color palette is defined in `tailwind.config.js`:
- `primary-blue`: #2D3896 (button background)
- `info-blue`: #0054FD (info elements)
- `light-cream`: #FEFDF8 (borders)
- `text-gray`: #878787 (secondary text)

### Typography
Font sizes and line heights are configured to match the Figma design exactly:
- `hero-main`: 98.37px (main heading)
- `hero-sub`: 29.62px (sub heading)
- `stat-number`: 24px (statistics numbers)
- `stat-label`: 18px (statistics labels)

## Build

To create a production build:

```bash
npm run build
npm start
```

## Technologies Used

- [Next.js 14](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [PostCSS](https://postcss.org/) - CSS processing
- [Autoprefixer](https://github.com/postcss/autoprefixer) - CSS vendor prefixes

## License

This project is created for demonstration purposes based on the provided Figma design. 