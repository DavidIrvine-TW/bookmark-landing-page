/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'softblue' : 'hsl(231, 69%, 60%)',
        'softred' : 'hsl(0, 94%, 66%)',
        'grayblue' : 'hsl(229, 8%, 60%)',
        'darkblue' : 'hsl(229, 31%, 21%)',
        'offwhite' : 'hsla(0, 0%, 97%, 1)'
        
      },
      screens: {
        mobile: '375px',
        tablet: '768px',
        desktop: '1200px',
      },
      fontFamily : {
        'rubik' : ['Rubik', 'sans-serif']
      },
      fontSize: {
        'pri-head-dk': ['3rem', {
          lineHeight: '3.25rem',
          letterSpacing: '-0.15px',
          fontWeight: '500',
        }],
        'sec-head-dk': ['2rem', {
          lineHeight: '3.25rem',
          letterSpacing: '-0.15px',
          fontWeight: '500',
        }],
        'body-dk': ['1.125rem', {
          lineHeight: '1.75rem',
          letterSpacing: '0em',
          fontWeight: '400',
        }],

        'body-mb': ['0.9375rem', {
          lineHeight: '1.5625rem',
          letterSpacing: '0px',
          fontWeight: '400',
        }],
        'pri-head-mb': ['1.875rem', {
          lineHeight: '2.5rem',
          letterSpacing: '-0.09px',
          fontWeight: '500',
        }],
        'sec-head-mb': ['1.5rem', {
          lineHeight: '2.5rem',
          letterSpacing: '-0.08px',
          fontWeight: '500',
        }],   
      },
      fontWeight: {
        bold : '500',
        reg : '400',
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
      }
      
    },
  },
  plugins: [],
}

