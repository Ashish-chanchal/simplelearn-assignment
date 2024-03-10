/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    listStyleType: {
      none: 'none',
     disc: 'disc',
     decimal: 'decimal',
     square: 'square',
     roman: 'upper-roman',
    },
    fontFamily :{ 
      sansRoundedBold:['sansRoundedBold'],
      sansRoundedMedium:['sansRoundedMedium'],
      sansRoundedSemiBold:['sansRoundedSemiBold'],
    } 
  },
  plugins: [],
}

