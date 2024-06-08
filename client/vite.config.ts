import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@components': path.resolve(__dirname, './src/components'),
		},
	},
	plugins: [react()],
	define: {
		'process.env.GAVNO': JSON.stringify(process.env.GAVNO),
	},
});
