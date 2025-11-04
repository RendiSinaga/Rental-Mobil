// tailwind.config.js
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            animation: {
                "fade-up": "fadeUp 0.8s ease-out forwards",
                "fade-delay-1": "fadeUp 0.8s ease-out 0.3s forwards",
                "fade-delay-2": "fadeUp 0.8s ease-out 0.6s forwards",
                "fade-delay-3": "fadeUp 0.8s ease-out 0.9s forwards",
            },
            keyframes: {
                fadeUp: {
                    "0%": { opacity: 0, transform: "translateY(30px)" },
                    "100%": { opacity: 1, transform: "translateY(0)" },
                },
            },
        },
    },
    plugins: [],
};
  