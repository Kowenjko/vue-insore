<script setup lang="ts">
interface RoutesI {
	title: string
	url: string
}

const routes: RoutesI[] = [
	{
		title: 'Home',
		url: '/',
	},
	{
		title: 'Doctors',
		url: '/',
	},
	{
		title: 'Department',
		url: '/',
	},
	{
		title: 'Services',
		url: '/',
	},
	{
		title: 'Blog',
		url: '/',
	},
	{
		title: 'Contact',
		url: '/',
	},
]
</script>

<template>
	<ul>
		<li v-for="link in routes" :key="link.title">
			<router-link
				class="text-secondary hover:text-accent transition-all"
				:to="link.url"
			>
				{{ link.title }}
			</router-link>
		</li>
	</ul>
</template>

<style scoped></style>
