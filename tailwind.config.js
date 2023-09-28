/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        "cool-50": "#fcfcfc",
        "cool-100": "#eeeeee",
        "cool-200": "#a1a1a1",
      },
			typography(theme) {
				return {
					DEFAULT: {
						css: {
							'code::before': {
								content: 'none'
							},
							'code::after': {
								content: 'none'
							},
							"blockquote p::before": {
								content: 'none'
							},
							blockquote: {
								"font-style": "normal",
								"font-weight": "400"
							},
						}
					}
				}
			}
    },

  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

