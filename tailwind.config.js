/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#F4F7FE',
        },
        blue: {
          50: '#a3aed0',
          100: '#8f9bba',
          300: '#707eae',
          700: '#7a85ec',
          800: '#2b3674',
        },
        purple: {
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
        default: '1.875rem',
      },
      boxShadow: {
        default: '14px 17px 40px 4px #7090B014',
      },
    },
  },
  plugins: [],
};
