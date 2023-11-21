import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/modules/home/Routes'
import ErrorPage from '@/components/404.vue'

export const router = createRouter({
	history: createWebHistory(),
	routes: [
		...Home,
		{
			path: '/:catchAll(.*)',
			component: ErrorPage,
		},
	],
})
