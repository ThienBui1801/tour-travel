module.exports = {
  content: [
    "**/*.html"
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins']
      }
    },

    screens: {
      'lg': {
        'min': '1280px',
      },

      'lp': {
        'min': '1024px',
        'max': '1279px'
      },
      // Tablet > 1024px

      'tablet': {
        'min': '740px',
        'max': '1023px'
      },
      // Tablet

      'mobile': {
        'max': '739px'
      },
      // Mobile
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'base', // only generate global styles
      strategy: 'class', // only generate classes
    }),
  ],
}