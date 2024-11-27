/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mounties: ["MountiesRegular"],
        manrope: ["Manrope"],
        marbley: ["MarbleyRegular"],
        southam: ["SouthamDemo"],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        marquee2: "marquee2 40s linear infinite",
        marqueeVertical: "marqueeVertical 30s linear infinite",
        marqueeVertical2: "marqueeVertical2 40s linear infinite",
        marqueeVerticalReverse: "marqueeVerticalReverse 25s linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        marqueeVertical: {
          from: { transform: "translateY(0%)" },
          to: { transform: "translateY(-100%)" },
        },
        marqueeVertical2: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        marqueeVerticalReverse: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      colors: {
        beige: "#F3F2EB",
        brown: "#83735B",
        "light-brown": "#A9977D",
      },
    },
  },
  plugins: [],
};
