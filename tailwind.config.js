const colors = require("tailwindcss/colors");

module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            title: ["Cantarell", "sans-serif"],

            subtitle: ["Catamaran", "sans-serif"],

            body: ["Changa", "sans-serif"],
        },
        screens: {
            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }
        },
        colors: {
            light_blue: "#BEEEF7",
            pale_blue: "#6FC2D0",
            blue: "#373A6D",
            orange: "#FF8246",
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            white: colors.white,
            gray: colors.trueGray,
            indigo: colors.indigo,
            red: colors.rose,
            yellow: colors.amber,
        },
        extend: {
            backgroundImage: {},
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
