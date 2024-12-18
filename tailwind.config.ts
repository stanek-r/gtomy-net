import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/gtomy-lib/index.js'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    logs: false,
    themes: ['corporate', 'business'],
    darkTheme: 'business',
  },
} satisfies Config;
