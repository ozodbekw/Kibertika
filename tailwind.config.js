/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      inter: ["Inter", "system-ui"],
    },
    backgroundImage: {
      hero: "url('/images/png/hero.png')",

      "hero-pattern": "url('/images/png/hero-bg-color.png')",
      "footer-texture": "url('/img/footer-texture.png')",
    },
  },
  plugins: [],
};
