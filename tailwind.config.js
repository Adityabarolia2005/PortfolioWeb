import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        'heroCard-m': '763px', 
        'smallBreakPoint' : '607px'
      },
    },
  },
  plugins: [],
}
