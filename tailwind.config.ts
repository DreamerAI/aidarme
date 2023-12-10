import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pageblock/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  variants: {
    extend: {
      translate: ['hover', 'focus'],
    },
  },
  theme: {
    extend: {

      letterSpacing: {
        'paragraph': '-0.85px', 
      },

      lineHeight: {
        'paragraph': '1.35',
      },

      spacing: {
        aboutmeImg: "clamp(10rem, 20vw, 30rem)",
      },

      fontSize: {
        headline: "clamp(5rem, 20vw, 35rem)",
        aboutme: "clamp(1.2rem, 2vw, 1.5rem)",

      },

      colors: {
        "main-white": "#FFFFFF",
        "main-dark": "#23272a",
        "text-gray": "#929292",
      },

      animation: {
        slideIn: 'slideIn 0.5s ease-in-out forwards ',
        slideOut: 'slideOut 0.5s ease-in-out forwards 1.5s',
        logoSlide: 'logoSlide 0.5s ease-in forwards 0.5s',
        mobileNav: 'slideIn4 4s ease-in-out forwards',
        scaleUpCenter: 'scaleUpCenter 0.25s linear 0s 1 normal forwards running',
        cardsHover: 'cardsHover 0.25s linear 0s 1 normal forwards running',
      },

      keyframes: {

        cardsHover: {
          "0%": {
            transform: 'scale(1)',
          },
          "100%": {
            transform: 'scale(1.05)',
            
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }
        },

        scaleUpCenter: {
          "0%": {
                  opacity: '0',
                  transform: 'scale(0.5) translate3d(0%, -100%, 0)',
      
          },
          "100%": {
                    opacity: '1',
                    transform: 'scale(1) translate3d(0%, 0%, 0)',
          }
        },

        slideIn: {
          '0%': { transform: 'translateX(-100px)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100px)' },
        },
        logoSlide: {
          '0%': { transform: 'translateY(0)', opacity: "1" },
          '100%': { transform: 'translateY(-100%)', opacity: "0" },
        },  
        mobileNav: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
}
export default config
