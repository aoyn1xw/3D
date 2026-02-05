# 3D Spline Integration

A Next.js project with Spline 3D scene integration using shadcn/ui, Tailwind CSS, and TypeScript. https://ayon1xw.me/3D

## 🚀 Quick Start

### 1. Initialize the Project

```bash
# Initialize Next.js with TypeScript and Tailwind
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# Initialize shadcn/ui
npx shadcn@latest init
```

### 2. Install Required Dependencies

```bash
npm install @splinetool/runtime @splinetool/react-spline framer-motion
```

### 3. Add Tailwind Animation

Add this to your `tailwind.config.ts` to enable the spotlight animation:

```ts
export default {
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: '0',
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: '1',
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
}
```

### 4. Add Loader Styles (Optional)

Add custom loader styles to your global CSS if you want a custom loading animation:

```css
.loader {
  width: 48px;
  height: 48px;
  border: 5px solid #FFF;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

## 📁 Project Structure

```
/workspaces/3D/
├── components/
│   ├── ui/
│   │   ├── splite.tsx              # Main Spline scene component
│   │   ├── spotlight.tsx           # Aceternity spotlight effect
│   │   ├── spotlight-interactive.tsx # Interactive spotlight (ibelick)
│   │   └── card.tsx                # shadcn Card component
│   └── demos/
│       └── demo.tsx                # Demo implementation
```

## 🎯 Components

### SplineScene

The main component for rendering Spline 3D scenes with lazy loading and suspense.

```tsx
import { SplineScene } from "@/components/ui/splite";

<SplineScene 
  scene="https://prod.spline.design/YOUR_SCENE_URL/scene.splinecode"
  className="w-full h-full"
/>
```

### Spotlight (Aceternity)

Static animated spotlight effect using SVG with gradient.

```tsx
import { Spotlight } from "@/components/ui/spotlight"

<Spotlight
  className="-top-40 left-0 md:left-60 md:-top-20"
  fill="white"
/>
```

### SpotlightInteractive (ibelick)

Interactive spotlight that follows mouse movement using framer-motion.

```tsx
import { SpotlightInteractive } from "@/components/ui/spotlight-interactive"

<SpotlightInteractive
  size={200}
  springOptions={{ bounce: 0 }}
/>
```

## 🎨 Usage Example

Check out [demo.tsx](components/demos/demo.tsx) for a complete example combining all components.

To use the demo in your app:

```tsx
import { SplineSceneBasic } from "@/components/demos/demo"

export default function Page() {
  return (
    <div className="min-h-screen p-8">
      <SplineSceneBasic />
    </div>
  )
}
```

## 📦 Dependencies

- **@splinetool/runtime** - Spline runtime library
- **@splinetool/react-spline** - React wrapper for Spline
- **framer-motion** - Animation library for interactive spotlight
- **shadcn/ui** - UI component library
- **Tailwind CSS** - Utility-first CSS framework

## ⚙️ Why /components/ui?

The `/components/ui` folder is the standard convention for shadcn/ui projects:

1. **Consistency** - All shadcn components install to this directory
2. **Organization** - Separates reusable UI primitives from feature components
3. **Import Aliases** - Works seamlessly with `@/components/ui/*` imports
4. **Community Standard** - Expected structure for shadcn/ui projects

## 🔧 Configuration Files

After setup, ensure these files exist:

- `components.json` - shadcn/ui configuration
- `lib/utils.ts` - Utility functions (includes `cn()` helper)
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

## 📝 Notes

- The SplineScene component uses lazy loading to improve initial page load
- Both spotlight variants are included - choose based on your needs:
  - Use `Spotlight` for static animated effects
  - Use `SpotlightInteractive` for mouse-tracking effects
- The demo uses the Aceternity spotlight variant
- Ensure your Spline scene URL is accessible and properly formatted

## 🚀 Next Steps

1. Replace the demo Spline scene URL with your own
2. Customize the card styling and content
3. Add your own animations and interactions
4. Deploy to Vercel or your preferred platform

## 🌐 GitHub Pages Deployment

This project is configured to automatically deploy to GitHub Pages on every push to the `main` branch.

### Setup GitHub Pages:

1. Go to your repository Settings → Pages
2. Under "Source", select **GitHub Actions**
3. Push your code to the `main` branch
4. The workflow will automatically build and deploy your site

Your site will be available at: `https://aoyn1xw.github.io/3D/`

### Local Testing with Base Path:

To test the production build locally with the correct base path:

```bash
npm run build
npx serve@latest out
```

Then visit `http://localhost:3000/3D`

### Configuration:

The project uses:
- **Static Export** (`output: 'export'` in next.config.js)
- **Base Path** (`basePath: '/3D'` for GitHub Pages)
- **Unoptimized Images** (required for static export)
- **GitHub Actions** (`.github/workflows/nextjs.yml`)

### Manual Deployment:

You can also trigger deployment manually from the Actions tab in your repository.
