/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: '#1A4731',
        gold: '#C9972B',
        sage: '#6B9E77',
        cream: '#FAF6EF',
        ivory: '#FFF8F0',
        espresso: '#0F1F15',
        charcoal: '#1C1917',
        warmgray: '#78716C',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
