/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "-gray-primary": "#262626",
        "-text-primary": "#212121",
      },
    },
  },
  plugins: [],
};
