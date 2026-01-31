// tailwind.config.js
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{html,js}",
        "./**/*.html"
    ],
    theme: {
        extend: {
            fontFamily: {
                'display': ['Sora', 'sans-serif'],
                'body': ['Plus Jakarta Sans', 'sans-serif'],
            },
            colors: {
                'primary': '#0a0e27',
                'gold': '#fbbf24',
                'accent': '#f59e0b',
            },
            animation: {
                "fade-up": "fadeUp 0.8s ease-out forwards",
                "fade-down": "fadeDown 0.8s ease-out forwards",
                "fade-right": "fadeRight 0.8s ease-out forwards",
                "fade-delay-1": "fadeUp 0.8s ease-out 0.2s forwards",
                "fade-delay-2": "fadeUp 0.8s ease-out 0.4s forwards",
                "fade-delay-3": "fadeUp 0.8s ease-out 0.6s forwards",
                "fade-delay-4": "fadeUp 0.8s ease-out 0.8s forwards",
            },
            keyframes: {
                fadeUp: {
                    "0%": { opacity: "0", transform: "translateY(30px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                fadeDown: {
                    "0%": { opacity: "0", transform: "translateY(-30px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                fadeRight: {
                    "0%": { opacity: "0", transform: "translateX(-30px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
            },
            backgroundSize: {
                '300%': '300%',
            }
        },
    },
    plugins: [],
};