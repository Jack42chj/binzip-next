import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                main: "url('/webp/bg.webp')",
            },
            gridTemplateColumns: {
                custom: "repeat(auto-fit, minmax(162px, 1fr))",
            },
        },
        fontFamily: {
            Pretendard: ["Pretendard"],
        },
        colors: {
            white: "#ffffff",
            primary: "#191A2C",
            secondary: "#29293c",
            crimson: "#ff005c",
            default: "#a0a0a0",
            grey: "#354757",
            skeleton: "#696969",
            sub: "#c7c7c7",
        },
    },
    plugins: [],
};
export default config;
