/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
        fontFamily: {
          Archivo: ["Archivo", "sans-serif"]
        },

        backgroundImage: {
          'register-banner' : "url('/images/register-banner.jpg')"
        }
    },
  },
  plugins: [],
}

