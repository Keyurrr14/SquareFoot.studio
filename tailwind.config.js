/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mounties: ['MountiesRegular'],
        manrope: ['Manrope'],
        marbley: ['MarbleyRegular'],
        southam: ['SouthamDemo']
      },
      colors: {
        'beige': '#F3F2EB',
        'brown': '#83735B',
        'light-brown' : '#A9977D'
      },
    },
  },
  plugins: [],
}

