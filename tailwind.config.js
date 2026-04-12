/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm beige palette with coral & turquoise pops
        'cream': '#FAF7F4',
        'dark': '#2C2825',
        'dark-text': '#2C2825',
        'secondary': '#5A5450',
        'light-gray': '#EDE7E0',
        'border-light': '#E3DCD4',
        'coral': '#E07460',
        'turquoise': '#3AAFA9',
        'turquoise-dark': '#2B7A78',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        // Typography scale for editorial hierarchy
        'hero': 'clamp(2.5rem, 8vw, 5rem)', // 48px - 80px (hero intro)
        'hero-name': 'clamp(2rem, 6vw, 3rem)', // 32px - 48px (your name)
        'section-label': '0.875rem', // 14px ALL CAPS labels
        'project-title': 'clamp(1.5rem, 4vw, 2rem)', // 24px - 32px
        'body': '1.0625rem', // 17px body text
        'sm': '0.875rem', // 14px small text
      },
      spacing: {
        'section': 'clamp(4rem, 10vw, 8rem)', // 64px - 128px section padding
        'project-gap': 'clamp(5rem, 12vw, 10rem)', // 80px - 160px between projects
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'underline-slide': 'underlineSlide 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        underlineSlide: {
          '0%': { width: '0%', left: '0' },
          '100%': { width: '100%', left: '0' },
        },
      },
      letterSpacing: {
        'caps': '0.1em', // For ALL CAPS labels
        'caps-wide': '0.15em', // For wider ALL CAPS spacing
      },
      lineHeight: {
        'editorial': '1.7', // For body text (generous)
        'tight': '1.2', // For headings
      },
      borderRadius: {
        'none': '0px',
        'sm': '4px',
      },
    },
  },
  plugins: [],
}
