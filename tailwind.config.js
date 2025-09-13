/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rozha: ['"Rozha One"', 'serif'],
        bigshot: ['"Bigshot One"', 'sans-serif'],
        purplePurse: ['"Purple Purse"', 'cursive'],
        playfair: ['"Playfair Display"', 'serif'],
        kumbh: ['"Kumbh Sans"', 'sans-serif'],
        specialElite: ['"Special Elite"', 'cursive'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        gradientMove: 'gradientMove 3s linear infinite',
      },
    },
  },
  plugins: [],
}
