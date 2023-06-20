/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-color': 'var(--primary-color)',
        'white-boni': 'var(--white-boni)',
        'black-boni': 'var(--black-boni)'
      }
    }
  },
  plugins: []
};
