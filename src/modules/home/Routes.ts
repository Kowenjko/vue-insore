import Index from './pages/Index.vue'
import DefaultLayout from '@/layouts/Default.vue'

export default [
	{
		path: '/',
		component: DefaultLayout,
		children: [
			{
				path: '',
				component: Index,
			},
		],
	},
]
