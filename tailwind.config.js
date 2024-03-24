/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        flyFromTop: {
          '0%': {transform: 'translateY(-100%)'},
          '100%': {tranform: 'translateY(0%)'}
        },
        fadeIn: {
          '0%': {opacity: 0},
          '100%': {opacity: 1}, 
        }, 
        flyFromBottom: {
          '0%': {transform: 'translateY(10%)'},
          '100%': {tranform: 'translateY(0%)'}
        }
      },
      animation: {
        flyFromtTop: 'flyFromTop',
        fadeIn: 'fadeIn',
        flyFromBottom: 'flyFromBottom'
      }
    },
  },
  plugins: [],
}

