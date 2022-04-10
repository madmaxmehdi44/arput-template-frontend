const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {

        mainBg: "#040506",
        searchBg: "#100F14",
        textColor: "#b1b1b1",
        collectionBg: "rgba(0,0,0,0.6)",
       
        // light: 'var(--light)',
        // dark: 'var(--dark)',
        // darker: 'var(--darker)',
        // primary: {
        //   DEFAULT: 'var(--color-primary)',
        //   50: 'var(--color-primary-50)',
        //   100: 'var(--color-primary-100)',
        //   light: 'var(--color-primary-light)',
        //   lighter: 'var(--color-primary-lighter)',
        //   dark: 'var(--color-primary-dark)',
        //   darker: 'var(--color-primary-darker)',
        // },
        secondary: {
          DEFAULT: colors.fuchsia[600],
          50: colors.fuchsia[50],
          100: colors.fuchsia[100],
          light: colors.fuchsia[500],
          lighter: colors.fuchsia[400],
          dark: colors.fuchsia[700],
          darker: colors.fuchsia[800],
        },
        success: {
          DEFAULT: colors.green[600],
          50: colors.green[50],
          100: colors.green[100],
          light: colors.green[500],
          lighter: colors.green[400],
          dark: colors.green[700],
          darker: colors.green[800],
        },
        warning: {
          DEFAULT: colors.orange[600],
          50: colors.orange[50],
          100: colors.orange[100],
          light: colors.orange[500],
          lighter: colors.orange[400],
          dark: colors.orange[700],
          darker: colors.orange[800],
        },
        danger: {
          DEFAULT: colors.red[600],
          50: colors.red[50],
          100: colors.red[100],
          light: colors.red[500],
          lighter: colors.red[400],
          dark: colors.red[700],
          darker: colors.red[800],
        },
        info: {
          DEFAULT: colors.cyan[600],
          50: colors.cyan[50],
          100: colors.cyan[100],
          light: colors.cyan[500],
          lighter: colors.cyan[400],
          dark: colors.cyan[700],
          darker: colors.cyan[800],
        },
      },

      screens: {
        vsm: "280px",
        sm: "319px",
        smd:"592px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked', 'disabled'],
      opacity: ['dark'],
      overflow: ['hover'],
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("@tailwindcss/aspect-ratio"),
    require("daisyui"),
  ],
};
