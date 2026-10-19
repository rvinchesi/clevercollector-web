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
          "radial-gradient(ellipse 85% 75% at 50% 40%, #eef7fd 0%, #d9ebf8 30%, #b8d4ef 58%, #6a9cc8 82%, #4a7fb3 100%)",
        "cc-watches-gradient":
          "radial-gradient(ellipse 85% 75% at 50% 40%, #eef7fd 0%, #d9ebf8 30%, #b8d4ef 58%, #6a9cc8 82%, #4a7fb3 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
