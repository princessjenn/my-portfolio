/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,txs}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#77b0ff",

          secondary: "#e26f58",

          accent: "#c918cc",

          neutral: "#2d232e",

          "base-100": "#423b45",

          info: "#2461e5",

          success: "#196c59",

          warning: "#99700b",

          error: "#f13b66",
          
        },
      },
    
    ],
  },
  plugins: [
    require("daisyui")
  ],
};
