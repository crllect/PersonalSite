import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	site: 'https://crllect.dev',
	integrations: [preact({ compat: true })],
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				react: 'preact/compat',
				'react-dom': 'preact/compat',
				'react/jsx-runtime': 'preact/jsx-runtime'
			}
		},
		ssr: {
			noExternal: ['framer-motion']
		}
	}
});
