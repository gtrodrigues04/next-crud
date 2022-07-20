/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /^(?!(?:scroll|bottom)$)m\w?-/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl'],
    },
    {
      pattern: /bg-/
    },
    {
      pattern: /to-/
    },
    {
      pattern: /from-/
    }

  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
