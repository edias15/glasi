const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['ABeeZee', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                'primary': '#0070f3',
                'secondary': '#1f1f1f',
                'success': '#28a745',
                'info': '#17a2b8',
                'warning': '#ffc107',
                'danger': '#dc3545',
                'light': '#f8f9fa',
                'dark': '#343a40',
                'white': '#fafafa',
                'black': '#43393a',
            }
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
