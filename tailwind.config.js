/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  corePlugins: {
    preflight: false
  },
  theme: {
    extend: {
      colors: {
        background: '#f6f4ec',
        paragraphs: '#6d705e',
        heading: '#02434B',
        accent: '#cb7a29',
        subtitle: '#cd912c',
        preload: '#ede9db'
      },
      fontFamily: {
        display: ['Marcellus', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
        script: ['"Homemade Apple"', 'cursive']
      }
    }
  },
  plugins: []
}
