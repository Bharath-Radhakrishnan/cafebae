// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};

// package.json-scripts---------
// "scripts": {
//   "build:tailwindcss": "postcss src/index.css -o src/assets/css/tailwind.css",
//   "watch:tailwindcss": "postcss src/index.css -o src/assets/css/tailwind.css -w",
// "start": "npm run build:tailwindcss && craco start",
// "build": "npm run build:tailwindcss && craco build",
//   "eject": "react-scripts eject"
// },
