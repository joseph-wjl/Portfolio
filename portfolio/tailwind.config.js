/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zentry: ["zentry", "sans-serif"],
        general: ["general", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        "robert-medium": ["robert-medium", "sans-serif"],
        "robert-regular": ["robert-regular", "sans-serif"],
        inter: ['Inter', 'sans-serif'],
        noto: ['Noto Sans', 'sans-serif'],
      },
      colors: {
        blue: {
          50: "#DFDFF0",
          75: "#dfdff2",
          100: "#F0F2FA",
          200: "#010101",
          300: "#4FB7DD",
        },
        violet: {
          300: "#5724ff",
          400: "#3b04ce",
          500: "#411bbf",
        },
        yellow: {
          100: "#8e983f",
          300: "#edff66",
          400: "#ccff24",
        },
        grey: {
          100: "#7a748f",
          900: "#1d1d1d",
          950: "#141414",
          1000: "#0d0d0d",
        }
      },
    },
  },
  plugins: [],
};
