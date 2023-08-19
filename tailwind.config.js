/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.html",
    "./node_modules/flowbite-react/**/*.js",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alpha: ["Poppins", "sans-serif"],
        beta: ["Inter", "sans-serif"],
      },
      colors: {
        // Brown Dark Red - 700
        alpha: {
          50: "#fdf3f3",
          100: "#fce4e5",
          200: "#fbcdcf",
          300: "#f6abae",
          400: "#ef7a7f",
          500: "#e44f56",
          600: "#d03239",
          700: "#ac262c",
          800: "#912328",
          900: "#782428",
          950: "#410e10",
        },
        // Purple - 900
        beta: {
          50: "#fff1fe",
          100: "#ffe2fe",
          200: "#ffc3fc",
          300: "#ff95f6",
          400: "#ff56f1",
          500: "#ff17f0",
          600: "#fa00ff",
          700: "#d500d8",
          800: "#b000b0",
          900: "#990195",
          950: "#620060",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
