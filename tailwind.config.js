/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit-300': 'repeat(auto-fit, minmax(300px, 1fr))'
      },
      gridAutoRows: {
        '1fr': 'minmax(0, 1fr)'
      }
    }
  },
  plugins: []
};
