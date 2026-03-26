// tailwind.config.js

// import type { Config } from 'tailwindcss';
// import defaultTheme from 'tailwindcss/defaultTheme';

// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         roboto: ['"Roboto"', ...defaultTheme.fontFamily.sans],
//         // Add more custom fonts as needed
//       },
//     },
//   },
//   plugins: [],
// } satisfies Config;


//src/tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#6B5BFF",
                secondary: "#2FC7A1",
                accent: "#FF6B6B",
                dark: "#1F2937",
                light: "#F3F4F6",
                tetiary: "#FFFFFF"
            },

            fontFamily: {
                roboto: ['"Roboto"', ...defaultTheme.fontFamily.sans],
                outfit: ['"Outfit"', ...defaultTheme.fontFamily.sans],
            }
        },
    },
    plugins: [],
};





