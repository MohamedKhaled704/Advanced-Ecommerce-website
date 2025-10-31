/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      screens: {
        xs: '510px' ,
      },
      container: {   
        center: true,
        padding: '1rem',
        screens: {
          xs: '100%',
          sm: '100%',
          md: '768px',
          lg: '1024px',
          xl: '1240px',
        },
      },
    },
  },
  plugins: [],
};

