const { join } = require('path');
const plugin = require('tailwindcss/plugin');

const scrollBarHide = plugin(function ({ addUtilities }) {
  addUtilities({
    '.scrollbar-hide': {
      /* Firefox */
      'scrollbar-width': 'none',

      /* Safari and Chrome */
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
  });
});

module.exports = {
  presets: [require('../../../libs/ui/bratislava/tailwind.config')],
  content: [
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'components/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'Public Sans',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
        ],
      },
      textColor: {
        default: 'var(--font-color)',
        primary: 'var(--primary-color)',
        'primary-muted': 'var(--primary-muted-color)',
        secondary: 'var(--secondary-color)',
        accent: 'var(--primary-color)',
      },
      colors: {
        'primary-muted': 'var(--primary-muted-color)',
        black: 'black',
        'semilight-gray': 'var(--semilight-gray-color)',
        'dark-gray-color': 'var(--dark-gray-color)',
      },
      fontSize: {
        sm: ['14px', '17px'],
        base: ['18px', '21px'],
        lg: ['22px', '26px'],
        xl: ['26px', '32px'],
      },
    },
  },
};
