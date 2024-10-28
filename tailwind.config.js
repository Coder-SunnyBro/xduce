/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['ui-serif', 'Georgia', 'serif'],
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      display: ['Oswald', 'sans-serif'],
      body: ['"Open Sans"', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}