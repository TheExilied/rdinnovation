/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './node_modules/flowbite/**/*.js'],
	theme: {
		linearBorderGradients: {
		  directions: { // defaults to these values
			't': 'to top',
			'tr': 'to top right',
			'r': 'to right',
			'br': 'to bottom right',
			'b': 'to bottom',
			'bl': 'to bottom left',
			'l': 'to left',
			'tl': 'to top left',
		  },
		  colors: { // defaults to {}
			'red': '#f00',
			'red-blue': ['#f00', '#00f'],
			'blue-green': ['#FFD700', '#FF69B4'],
			'red-green-blue': ['#f00', '#0f0', '#00f'],
			'black-white-with-stops': ['#000', '#000 45%', '#fff 55%', '#fff'],
		  },
		  background: {
			'gray-50': '#F9FAFB',
			'gray-900':'#111827',
			'fondo':'#13151a',
		  },
		  borders: { // defaults to these values (optional)
			'1': '1px',
			'2': '2px',
			'4': '4px',
		  },
		},
	
	  },
	  plugins: [
		require('tailwindcss-border-gradient-radius'),
		require('flowbite/plugin'),
	  ],
	    "tags": [
    "swiper"
  ]
}
