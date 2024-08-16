import { light } from '@wormhole-foundation/wormhole-connect';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      screens: {
        //breakpoint for max width of 1200px
        'max-lg': { max: '1200px' },
        //breakpoint for max width of 768px
        'max-sm': { max: '768px' },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        darkBlue: '#020312',
        lightBlue: '#394c87',
      },
    },
  },
  plugins: [],
};
