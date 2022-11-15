/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      visibility: ["group-hover"],
      transitionProperty: {
        multiple: "width , height "
      },
      fontFamily: {
        myfont:["Signika","sans-serif"],
        //lobster:["Lobster", sans-serif],
        // signika:["Signika",sans-serif],
      },
    },
  },
  plugins: [],
}
