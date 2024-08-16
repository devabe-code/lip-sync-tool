const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    nextui({
      themes: {
        "matte-dark": {
          extend: "dark", // inherit default values from dark theme
          colors: {
            background: "#0F172A", // matte black
            foreground: "#A8A8A8", // matte silver
            primary: {
              50: "#1E3A8A",
              100: "#1E3A8A",
              200: "#1E3A8A",
              300: "#1E3A8A",
              400: "#1E3A8A",
              500: "#1E3A8A", // matte blue
              600: "#1E3A8A",
              700: "#1E3A8A",
              800: "#1E3A8A",
              900: "#1E3A8A",
              DEFAULT: "#1E3A8A", // matte blue default
              foreground: "#ffffff",
            },
            focus: "#1E3A8A",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
      },
    }),
  ],
};
