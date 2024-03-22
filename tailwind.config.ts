export default {
    content: [
        "./index.html",
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "slate-gray": {
                    "100": "#484949",
                    "600": "#1c1d1c",
                },
                "burly-wood": "#d5b37e",
                "gains-boro": "#e3e3e3",
                "cod-gray": "#171617",
                "dark-gray-slate": "#1b391d",
                "dodger-blue": "#2780eb",
                "midnight-blue": "#211f4f",
                "royal-blue": "#225eff",
                "medium-sea-green": "#17c259",
                "crimson": "#e21543",
                "maron": "#51081e"
            }
        },
    },
    plugins: [],
}