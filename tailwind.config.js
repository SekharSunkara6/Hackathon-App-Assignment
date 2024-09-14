module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        custom: "0px 6px 12px 0px #DDE6ED",
        shadow: "0px 5px 15px rgba(0, 0, 0, 0.35)",
      },
    },
  },
  plugins: [],
};
