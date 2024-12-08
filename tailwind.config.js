module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}" // Adjust paths based on your project structure
  ],
  theme: {
    extend: {
      backgroundPosition: {
        "x-0": "0% center"
      },
      animation: {
        "fade-in": "fade-in 1.5s ease-in forwards"
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        }
      },
      colors: {
        charcoal: "#1B1F3B", // Primary dark background
        "soft-white": "#F8F5F1", // Neutral text color
        "muted-teal": "#5C6370", // Accent teal
        "bright-yellow": "#FFA500", // Highlight yellow
        "rich-blue": "#0077B6" // Modern action blue
      },
      boxShadow: {
        lg:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
      },
      fontFamily: {
        pusab: ["Pusab", "sans-serif"], // Add custom font family
        sans: ["Inter", "Helvetica", "Arial", "sans-serif"] // Use modern sans-serif
      }
    }
  },
  plugins: []
};
