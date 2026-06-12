import tailwindScrollbar from 'tailwind-scrollbar';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landing-page': "url('/landingPage.webp')",
      },
      colors: {
        muted: '#97979b',
        silver: '#CBCBCD',
        success: {
          50: '#ECFDF3',
          700: '#027A48',
        },
        blue: {
          100: '#D0EFF1',
          800: '#120B1C',
        },
        green: {
          50: '#D0EFF1',
          100: '#F2F4FD',
          300: '#D1F906',
          600: '#97D38C',
          700: '#4D9275',
          800: '#209124',
        },
        gray: {
          50: '#F1F1F1',
          100: '#F2F4F7',
          200: '#FAF7F5',
          300: '#E8E8E8',
          400: '#ABABAB',
          500: '#828282',
          600: '#696969',
          700: '#102028',
          800: '#141320',
          900: '#120B1C',
        },
        red: {
          50: '#FEF3F2',
          100: '#FEE4E2',
          300: '#FDA29B',
          400: '#FE736E',
          500: '#F04438',
          700: '#B42318',
        },
      },
      fontSize: {
        h1: ['50px', { fontWeight: '700', lineHeight: '64px' }],
        h2: ['36px', { fontWeight: '700', lineHeight: '44px' }],
        h3: ['36px', { fontWeight: '500', lineHeight: '44px' }],
        h4: ['24px', { fontWeight: '700', lineHeight: '44px' }],
        h5: ['20px', { fontWeight: '600', lineHeight: '30px' }],
        h6: ['12px', { fontWeight: '500', lineHeight: '18px' }],
        h7: ['12px', { fontWeight: '600', lineHeight: '18px' }],
        p1: ['15px', { fontWeight: '400', lineHeight: '24px' }],
        p2: ['15px', { fontWeight: '500', lineHeight: '24px' }],
        p3: ['20px', { fontWeight: '400', lineHeight: '24px' }],
        p4: ['12px', { fontWeight: '400', lineHeight: '30px' }],
      },
    },
    variants: {
      extend: {
        borderColor: ['focus'], // Enable borderColor on focus state
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        bebas: ['var(--font-bebas)'],
      },
    },
    plugins: [tailwindScrollbar],
  },
};
export default config;