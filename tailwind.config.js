const withTM = require('next-transpile-modules')(['@material-tailwind/react'])
const colors = require('tailwindcss/colors')

module.exports = withTM({
  content: [
    './dist/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './*.html',
    'node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    'node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: colors.blue,
      blueGray: colors.blueGray,
      ...colors
    }
  },
  plugins: [require('@tailwindcss/forms')],
  variants: {
    extend: {
      opacity: ['disabled']
    }
  }
})
