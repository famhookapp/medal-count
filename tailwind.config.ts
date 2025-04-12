import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{css}',
    './src/**/*.{js,ts,jsx,tsx,css}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
export default config