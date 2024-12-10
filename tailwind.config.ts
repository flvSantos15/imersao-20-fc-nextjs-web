import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        default: '#242526',
        main: '#ffcd00',
        error: '#f35759',
        success: '#366912',
        contrast: '#ffffff'
      }
    }
  },
  plugins: []
} satisfies Config
