/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customTeal: '#004235',
        customTeal2: '#0e6b3d',
        customTeal3: '#004040',
        customgray: '#9ea0a7',
        customgray2: '#51565a',
        customgray3:'#40403e'
      },
      boxShadow: {
        neumorphic: "8px 8px 16px rgba(0, 0, 0, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.05)",
        neumorphicHover: "12px 12px 24px rgba(0, 0, 0, 0.3), -12px -12px 24px rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-stroke': {
          'color': '#0e6b3d',
          '-webkit-text-stroke': '0.5px white',
        },
      });
    },
  ],
}

