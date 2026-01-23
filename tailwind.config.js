export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'prime-dark': '#1A1A1A', // Very dark gray
        'second-dark': '#292929', // Dark gray
        'third-dark': '#333333', // Medium gray
        'prime': '#4D4D4D', // Lighter gray
        'second': '#B3B3B3', // Light gray
        'third': '#E6E6E6', // Very light gray
        'light-gray': '#F2F2F2', // Near white
        'bgprime': '#fafafa', // White
        'panel-dark': '#171717', // Panel overlay
        'panel-light': '#F5F3EF', // Warm light panel
        'accent': '#C2A06A', // Warm accent line
        'frame': '#2B2B2B' // Hairline frame
      },
      fontFamily: {
        'prata': ['Poppins', 'serif', 'Georgia', 'Times New Roman'],
        'lato': ['Glacial Indifference', 'serif', 'Georgia', 'Times New Roman'],
      },
      borderRadius: {
        'surface': '16px',
      },
      boxShadow: {
        'soft-panel': '0 20px 50px rgba(0, 0, 0, 0.35)',
      },
      zIndex: {
        'panel': '5',
      },
    },
  },
  plugins: [],
}
