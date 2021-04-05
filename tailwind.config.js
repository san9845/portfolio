module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'wiggle': 'wiggle 1s ease-in infinite',
      },
      keyframes: {
        'wiggle': {
          '0%': {transform: 'translate(0%, -100%)', opacity: 0 },
          '100%': { transform: 'translate(0%, 20%)', opacity: 1},
        }
       }
    },
    container: {
      center: true,
    },
    boxShadow: {
      DEFAULT: '4px 4px 0 #f9fafa'
    },
    fontFamily: {
      'display': ['Inter', 'sans-serif'],
      'logo': ['Caveat', 'cursive']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
