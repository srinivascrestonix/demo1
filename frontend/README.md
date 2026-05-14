# Modern Personal Portfolio

A sleek, responsive personal portfolio website built with React, Vite, and Tailwind CSS. Featuring smooth scrolling with Lenis and scroll animations with GSAP.

## Features

- **Dark Theme**: Modern and professional dark aesthetic with gradient backgrounds.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop screens.
- **Smooth Scrolling**: Powered by [Lenis](https://github.com/darkroomengineering/lenis) for a premium feel.
- **Scroll Animations**: Dynamic fade-up and staggered reveal animations using [GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/).
- **Reusable Components**: Modular architecture for easy maintenance and scalability.
- **SEO Optimized**: Semantic HTML and meta tags for better search engine visibility.

## Tech Stack

- **Frontend**: React.js + Vite
- **Styling**: Tailwind CSS
- **Animations**: GSAP, Lenis
- **Icons**: Lucide React

## Project Structure

```text
src/
├── assets/      # Static assets (images, icons)
├── components/  # Reusable UI components
├── data/        # Content data (portfolio.js)
├── pages/       # Page-level components
├── App.jsx      # Main application logic & animations
└── index.css    # Global styles & Tailwind directives
```

## Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## Deployment

This project is ready to be deployed on **Vercel**. Simply connect your GitHub repository to Vercel, and it will automatically detect the Vite configuration.

---

Built with ❤️ by [John Doe]
