/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#F4F7FE',
          100: '#E9EDF7',
        },
        blue: {
          50: '#a3aed0',
          100: '#8f9bba',
          300: '#707eae',
          800: '#2b3674',
        },
        purple: {
          300: '#7a85ec',
          700: '#4318ff',
        },
        orange: {
          500: '#ec7a7a',
        },
        red: {
          800: '#cd0505',
        },
        green: {
          100: '#65d4ac',
          300: '#05cd99',
        },
      },
      borderRadius: {
        default: '30px',
        '3xl': '20px',
      },
      boxShadow: {
        default: '14px 17px 40px 4px #7090B014',
      },
    },
  },
  plugins: [],
};
