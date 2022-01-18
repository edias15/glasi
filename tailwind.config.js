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
    daisyui: {
        themes: [
        {
            'siglacontabilidade': {             /* your theme name */
               'primary' : '#0070F3',           /* Primary color */
               'primary-focus' : '#4F90DC',     /* Primary color - focused */
               'primary-content' : '#ffffff',   /* Foreground content color to use on primary color */

               'secondary' : '#B07946',         /* Secondary color */
               'secondary-focus' : '#EAC27F',   /* Secondary color - focused */
               'secondary-content' : '#43393A', /* Foreground content color to use on secondary color */

               'accent' : '#37cdbe',            /* Accent color */
               'accent-focus' : '#2aa79b',      /* Accent color - focused */
               'accent-content' : '#ffffff',    /* Foreground content color to use on accent color */

               'neutral' : '#3d4451',           /* Neutral color */
               'neutral-focus' : '#2a2e37',     /* Neutral color - focused */
               'neutral-content' : '#ffffff',   /* Foreground content color to use on neutral color */

               'base-100' : '#ffffff',          /* Base color of page, used for blank backgrounds */
               'base-200' : '#f9fafb',          /* Base color, a little darker */
               'base-300' : '#D3D3D3',          /* Base color, even more darker */
               'base-content' : '#1f2937',      /* Foreground content color to use on base color */

               'info' : '#2094f3',              /* Info */
               'success' : '#009485',           /* Success */
               'warning' : '#ff9900',           /* Warning */
               'error' : '#ff5724',             /* Error */
            },
        },
        ],
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('daisyui'),
    ],
    daisyui: {
        styled: true,
        themes: true,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
    },
};
