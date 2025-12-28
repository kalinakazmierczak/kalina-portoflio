# Component Documentation

## Overview

This portfolio uses a modular component architecture with React and Framer Motion. Each component is designed to be:
- **Reusable**: Can be used in other projects
- **Performant**: Optimized animations and rendering
- **Accessible**: WCAG compliant
- **Customizable**: Easy to modify and extend

---

## Navigation Component

**File**: `/src/components/Navigation.jsx`

### Purpose
Sticky header navigation that fades in/out on scroll with smooth animations.

### Features
- Sticky positioning
- Scroll-triggered fade-in effect
- Active section highlighting
- Mobile hamburger menu
- Smooth link animations

### Customization
```jsx
const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
```

**Add new links**: Simply add to the `navLinks` array and create corresponding section IDs.

### Key Props
- None (uses internal state for mobile menu)

### Animation Details
- Scroll detection on `window.scrollY > 50`
- Smooth navigation with `scrollIntoView()`
- Staggered mobile menu animation

---

## Hero Component

**File**: `/src/components/Hero.jsx`

### Purpose
Eye-catching landing section with animated background and CTAs.

### Features
- Gradient animated background blobs
- Fade-in + slide-up entrance animation
- Gradient text effect on name
- Scroll indicator with bounce animation
- Dual CTA buttons

### Customization

**Change name**:
```jsx
<span className="bg-gradient-to-r from-vibrantAccent via-purple-500 to-pink-500 bg-clip-text text-transparent">
  Your Name Here
</span>
```

**Update title**:
```jsx
<p className="text-xl md:text-2xl text-charcoal/80 mb-8">
  Your Title | Your Specialty | Your Focus
</p>
```

**Modify tagline**:
```jsx
<p className="text-lg md:text-xl text-charcoal/60 mb-12">
  Your unique value proposition
</p>
```

### Animation Timing
- Container stagger: 200ms between children
- Item fade-in: 600-800ms
- Blob animation: 15-18s continuous

---

## About Component

**File**: `/src/components/About.jsx`

### Purpose
Professional introduction, skills display, and personal branding.

### Features
- Grid layout (responsive)
- Profile image with animated border
- Availability status indicator
- Skill badges with hover effects
- Stats display

### Customization

**Update bio**:
Edit the three `<p>` elements in the component.

**Add/Remove skills**:
```jsx
const skills = [
  'React', 'TypeScript', 'Tailwind CSS',  // Your skills
  'Node.js', 'Next.js', 'Vite',
  // Add/remove as needed
];
```

**Change profile image**:
```jsx
<div className="text-6xl">👨‍💻</div>  // Change emoji
// OR replace with img tag
<img src="/profile.jpg" alt="Profile" />
```

**Update stats**:
```jsx
<div className="p-4 rounded-xl bg-lightGray">
  <p className="text-2xl font-bold text-vibrantAccent">2+</p>  // Change number
  <p className="text-sm text-charcoal/60">Years Experience</p>
</div>
```

---

## Projects Component

**File**: `/src/components/Projects.jsx`

### Purpose
Display featured projects in a responsive grid layout.

### Features
- Grid/Bento layout
- Project cards with hover effects
- Tech stack tags
- Action buttons (View, Code)
- Responsive design

### Customization

**Add projects**:
```jsx
const projects = [
  {
    id: 1,
    title: 'Project Title',
    description: 'What the project does',
    tags: ['React', 'Node.js'],
    category: 'fullstack',        // fullstack, frontend, mobile, tools
    image: '🎨',                  // Emoji or image path
    link: 'https://project-url.com',
    github: 'https://github.com/username/repo',
  },
];
```

**Change grid layout**:
```jsx
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
// Change lg:grid-cols-3 to lg:grid-cols-2 or lg:grid-cols-4
```

**Modify project card size**:
Edit the `auto-rows-max` or add `lg:col-span-2` for featured projects.

---

## Contact Component

**File**: `/src/components/Contact.jsx`

### Purpose
Contact form and social media links.

### Features
- Functional contact form
- Form validation
- Success/error messages
- Social links with icons
- Availability indicator

### Customization

**Update social links**:
```jsx
const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/yourname',
    color: 'hover:text-gray-800',
  },
  // Add more...
];
```

**Change email**:
```jsx
<a href="mailto:your.email@example.com">
  your.email@example.com
</a>
```

**Connect to email service**:

1. **Formspree** (simple):
   ```jsx
   <form action="https://formspree.io/f/YOUR_ID" method="POST">
   ```

2. **Netlify Forms** (hosted on Netlify):
   ```jsx
   <form method="POST" netlify>
   ```

3. **EmailJS** (client-side):
   ```javascript
   import emailjs from '@emailjs/browser';
   
   emailjs.send(SERVICE_ID, TEMPLATE_ID, formData);
   ```

---

## Framer Motion Animation Patterns

### 1. Container with Staggered Children
```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

<motion.div variants={containerVariants} initial="hidden" animate="visible">
  {/* Children will animate with stagger effect */}
</motion.div>
```

### 2. Hover Effects
```jsx
<motion.div
  whileHover={{ scale: 1.05, y: -8 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.3 }}
>
  {/* Content */}
</motion.div>
```

### 3. Scroll-Triggered Animation
```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-100px' }}
  transition={{ duration: 0.6 }}
>
  {/* Animates when scrolled into view */}
</motion.div>
```

### 4. Continuous Loop
```jsx
<motion.div
  animate={{
    x: [0, 50, -30, 0],
    y: [0, -40, 20, 0],
  }}
  transition={{
    duration: 15,
    repeat: Infinity,
    ease: 'easeInOut',
  }}
>
  {/* Continuous animation */}
</motion.div>
```

---

## Tailwind CSS Utilities

### Custom Colors
```jsx
// All available custom colors
bg-softLavender     // #E9D5FF
bg-softMint         // #D1FAE5
bg-softPeach        // #FECACA
bg-softSky          // #BAE6FD
text-vibrantAccent  // #8B5CF6
text-charcoal       // #2D3748
text-darkCharcoal   // #1A202C
```

### Custom Animations
```jsx
animate-fade-in     // Fade in animation
animate-slide-up    // Slide up animation
animate-pulse-slow  // Slow pulsing
animate-glow        // Glow effect
```

### Responsive Breakpoints
```jsx
// Tailwind default breakpoints
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px

// Usage
md:text-2xl         // Text 2xl on medium screens and up
lg:col-span-2       // Span 2 columns on large screens
```

---

## Performance Tips

### 1. Image Optimization
```jsx
// Use next-gen formats
<picture>
  <source srcSet="image.webp" type="image/webp" />
  <img src="image.jpg" alt="Description" />
</picture>
```

### 2. Lazy Load Components
```jsx
import { lazy, Suspense } from 'react';

const ProjectDetails = lazy(() => import('./ProjectDetails'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectDetails />
    </Suspense>
  );
}
```

### 3. Memoize Components
```jsx
import { memo } from 'react';

const ProjectCard = memo(function ProjectCard({ project }) {
  return (/* ... */);
});
```

### 4. Optimize Animations
```jsx
// ✅ Good: Uses GPU acceleration
<motion.div style={{ transform: 'translateX(100px)' }} />

// ❌ Avoid: Causes repaints
<motion.div style={{ left: '100px' }} />
```

---

## Accessibility Checklist

- [ ] All text has sufficient contrast (WCAG AA minimum)
- [ ] Interactive elements are keyboard accessible
- [ ] Focus indicators are visible
- [ ] Images have alt text
- [ ] Form labels are associated with inputs
- [ ] ARIA labels used for icon-only buttons
- [ ] Animations respect `prefers-reduced-motion`
- [ ] Color is not the only way to convey information

---

## Common Customizations

### Change Primary Color
1. Update `vibrantAccent` in `tailwind.config.js`
2. Update gradient colors in components
3. Test contrast ratios for accessibility

### Add New Section
1. Create component in `/src/components/`
2. Import in `App.jsx`
3. Add navigation link
4. Ensure section has matching `id` attribute

### Modify Font
1. Add font import in `globals.css`
2. Update `fontFamily` in `tailwind.config.js`
3. Update `font-display` or `font-sans` classes in components

### Change Layout
1. Modify grid columns: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
2. Adjust spacing: `py-20 md:py-32`
3. Modify padding: `px-6 md:px-8`

---

## Debugging

### Animation Not Working?
1. Check if `whileInView` needs `viewport={{ once: true }}`
2. Verify animation variants are passed correctly
3. Check browser developer tools for performance issues

### Styling Not Applied?
1. Verify Tailwind classes are spelled correctly
2. Check if custom colors are defined in `tailwind.config.js`
3. Clear browser cache and rebuild

### Slow Performance?
1. Use Lighthouse in Chrome DevTools
2. Check Network tab for large assets
3. Profile with Performance tab
4. Use `will-change` sparingly on many elements

---

## Resources

- [React Docs](https://react.dev)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Web.dev Performance Guide](https://web.dev/performance/)
