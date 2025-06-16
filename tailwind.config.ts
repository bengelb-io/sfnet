// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      keyframes: {
        grow: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }, // or '200px' for fixed
        },
      },
      animation: {
        grow: 'grow 0.5s ease-out forwards',
      },
    },
  },
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue'
  ],
  plugins: [],
}
export default config
