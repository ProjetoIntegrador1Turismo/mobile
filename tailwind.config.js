/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
    colors: {
      'tl-bg': '#171717',
      'tab-bg': '#151515',
      'tl-purple': '#9400da',
      'tl-red': '#f50437',
      'tl-red-2': '#bf0028',
      'tl-purple-2': '#7d00b8',
    },
  },
  plugins: [],
};
