/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        darkPrimaryColor: '#455A64',
        lightPrimaryColor: '#CFD8DC',
        primaryColor: '#607D8B',
        textIconsColor: '#FFFFFF',
        accentColor: '#9E9E9E',
        prymaryTextColor: '#212121',
        secundaryTextColor: '#757575'
      },

      boxShadow: {
        panelShadow: 'rgba(17,12,46,0.15) 0px 48px 100px 0px'
      }
    }
  },
  plugins: []
}
