import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
	plugins: [react()],
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: './unitTestConfiguration.ts',
		coverage: {
			provider: 'v8',
			include: ['src/**'],
			exclude: [
				'src/__tests__/e2e/**',
				'src/routes/**',
				'src/mocks/**',
				'src/App.tsx',
				'src/main.tsx',
				'src/vite-env.d.ts',
			],
		},
		include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
	},
})
