// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  mode: "jit",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  plugins: [
    require("@tailwindcss/typography"),
    plugin(({ addVariant }) => {
      addVariant("group-hover", [".group:hover &", ".group.hover &"]);
      addVariant("hover", ["&:hover", "&.hover"]);
      addVariant("active", ["&:active", "&.active"]);
    }),
  ],

  theme: {
    extend: {
      opacity: {
        muted: 0.75,
        "muted-extra": 0.15,
      },

      colors: {
        "muted-white": "hsla(0, 0%, 100%, 0.4)",
        "muted-white-extra": "hsla(0, 0%, 100%, 0.15)",

        brand: {
          50: "#e2ff8f",
          100: "#ddff7a",
          200: "#d2f56c",
          300: "#cbf25a",
          400: "#bdf51b",
          500: "#b5f00a",
          600: "#A7E000",
          700: "#9bc914",
          800: "#8fbf02",
          900: "#80ab02",
        },

        vue: {
          50: "#ebfef8",
          100: "#cefdeb",
          200: "#a1f9dc",
          300: "#65f0cc",
          400: "#28dfb5",
          500: "#03d0a8",
          600: "#00a183",
          700: "#00816d",
          800: "#006657",
          900: "#005449",
        },

        discord: {
          50: "#eef3ff",
          100: "#e0e9ff",
          200: "#c6d6ff",
          300: "#a4b9fd",
          400: "#8093f9",
          500: "#5866f2",
          600: "#4446e7",
          700: "#3736cc",
          800: "#2f30a4",
          900: "#2d3082",
        },

        zinc: {
          600: "#326E77",
          700: "#326E77",
          800: "#0D434B",
          900: "#002E35",
        },

      },

      typography: {
        DEFAULT: {
          css: {
            img: {
              marginTop: 0,
              marginBottom: 0,
            },
          },
        },
      },
    },
  },
};
