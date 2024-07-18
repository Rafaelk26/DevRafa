module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        'readex': ['Readex Pro', 'sans-serif'],
        'readex-bold': ['Readex Pro Bold', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'inter-regular': ['Inter Regular', 'sans-serif'],
        'inter-semibold': ['Inter Semibold', 'sans-serif'],
        'inter-bold': ['Inter Bold', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
