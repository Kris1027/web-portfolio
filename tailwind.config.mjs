import textShadow from 'tailwindcss-textshadow';

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {},
        screens: {
            sm: '540px',
            md: '768px',
            lg: '1024px',
        },
    },
    plugins: [textShadow],
};
