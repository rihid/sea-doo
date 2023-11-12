import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      firstColor: 'hsl(190, 64%, 22%)',
      firstColorSecond: 'hsl(190, 64%, 22%)',
      firstColorAlt: 'hsl(190, 64%, 15%)',
      titleColor: 'hsl(190, 64%, 18%)',
      textColor: 'hsl(190, 24%, 35%)',
      textColorLight: 'hsl(190, 8%, 60%)',
      inputColor: 'hsl(190, 24%, 97%)',
      bodyColor: 'hsl(190, 100%, 99%)',
      whiteColor:' #FFF'
    },
  },
  plugins: [],
}
export default config
