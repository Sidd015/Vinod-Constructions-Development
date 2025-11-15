module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f4c81',
        gold: '#c9a74a',
        accent: '#05668d'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Merriweather', 'serif']
      },
      container: {
        center: true,
        padding: '1rem'
      }
    }
  },
  plugins: []
}
