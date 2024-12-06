/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        ttuPattern: "url('/src/assets/doctors/adds3.jpg')",
      },

    },
  },
  plugins: [],
};
