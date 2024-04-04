import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
<<<<<<< HEAD
import vue from '@vitejs/plugin-vue';
=======
>>>>>>> e88a8b3a452f3fe8cd32ab07f67d43e549b7f80f

export default defineConfig({
    plugins: [
        laravel({
<<<<<<< HEAD
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
        },
    },
=======
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
>>>>>>> e88a8b3a452f3fe8cd32ab07f67d43e549b7f80f
});
