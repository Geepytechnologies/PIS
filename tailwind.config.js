/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#00B780",
        green1: "#00A86D",
        info: "#2F80ED",
        error: "#BA1A1A",
      },
      fontFamily: {
        pop: ["Poppins_400Regular"],
        popmedium: ["Poppins_500Medium"],
        popsemi: ["Poppins_600SemiBold"],
        popbold: ["Poppins_700Bold"],
        spacemono: ["SpaceMono"],
        poly: ["Poly_400Regular"],
      },
    },
  },
  plugins: [],
};
