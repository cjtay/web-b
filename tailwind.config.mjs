/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.astro",
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.md",
    "./src/**/*.mdx",
  ],
  theme: {
    extend: {},
  },
  plugins: [
	require('@tailwindcss/forms'),
  ],
};
