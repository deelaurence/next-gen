module.exports = {
  content: ["./index.html","./src/components/*.{js,jsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screen: {
      sm: "480px",
      bmd: "600px",
      md: "768px",
      lg: "900px",
      xl: "1440px",
    },
    extend: {
      colors: {
        orange: "#dc710e",
        white: "#ffffff",
        opaque: "rgba(257,257,257,0.3)",
        black: "#131415",
      },
      backgroundImage:{
        'gradient-radial':'radial-gradient(var(--tw-gradient-stops))'
      },
    },
  },
  plugins: [],
};
