import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        default: '#242526'
      }
    }
  },
  plugins: []
} satisfies Config
