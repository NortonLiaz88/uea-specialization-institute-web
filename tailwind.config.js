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
      activity: '#23527C',
      transparent: 'transparent',
      current: 'currentColor',
      background: 'rgba(247, 247, 247, 0.8)',
      blue: colors.blue,
      blueGray: colors.blueGray,
      shape: '#E5E5E5',

      ...colors
    },
    extend: {
      spacing: {
        128: '46rem'
      },
      minHeight: {
        '1/2': '50%'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')],
  variants: {
    extend: {
      opacity: ['disabled']
    }
  }
})
