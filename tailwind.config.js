/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "ww-green": {
          50: "#f7faf7",
          100: "#edf2ef",
          200: "#d6e3d9",
          300: "#b3cbb7",
          400: "#87af91",
          500: "#62946d",
          600: "#4a7754",
          700: "#385e42",
          800: "#2b4834",
          900: "#213729",
        },
        "ww-blue": {
          50: "#f0f4f8",
          100: "#e2e8f0",
          200: "#cdd5e2",
          300: "#b3becd",
          400: "#93a2b5",
          500: "#74879d",
          600: "#5b6e85",
          700: "#46566d",
          800: "#354256",
          900: "#293342",
        },
        "ww-orange": {
          50: "#fdf6f2",
          100: "#faece7",
          200: "#eaddd6",
          300: "#d4c2b9",
          400: "#bb9f93",
          500: "#a27d6d",
          600: "#896354",
          700: "#704e40",
          800: "#573b30",
          900: "#432c24",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        bounce: "bounce 1s infinite",
        ping: "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
