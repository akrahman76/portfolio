// export default {
//   content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ['Inter', 'sans-serif'],
//       },
//       colors: {
//         babyblue: '#d6eaf8', // soft blue tone
//       },
//     },
//   },
//   plugins: [],
// }
module.exports = {
  content: ['./src/**/*.{html,astro,js,ts}',
    './public/**/*.html',], // Adjust this path based on where your files are located
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        babyblue: '#d6eaf8', // soft blue tone
      },
    },
  },
  plugins: [],
};
