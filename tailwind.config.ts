import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "cc-navy": "#0A1628",
        "cc-gold": "#B8872A",
      },
      fontFamily: {
        heading: ["var(--font-cinzel)", "Georgia", "serif"],
      },
      backgroundImage: {
        "cc-gradient":
          "linear-gradient(180deg, #e8edf5 0%, #c8d4e6 28%, #a8b8d4 62%, #8fa3c4 100%)",
        "cc-watches-gradient":
          "linear-gradient(180deg, #e8edf5 0%, #c8d4e6 28%, #a8b8d4 62%, #8fa3c4 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
