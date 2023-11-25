<script setup lang="ts">
import Button from '@/components/UI/Button.vue'
interface TabI {
	title: string
	description: string
	services: string[]
	url: string
}
interface Props {
	tab: TabI
}

defineProps<Props>()
</script>
<template>
	<div class="xl:w-[640px] h-[432px]">
		<h2 class="h2 mb-5 text-center xl:text-left">{{ tab.title }}</h2>
		<p class="mb-8 font-light text-center xl:text-left">
			{{ tab.description }}
		</p>
		<ul
			class="flex flex-col xl:flex-row items-center xl:justify-between max-w-[555px] mb-12 mx-auto xl:mx-0"
		>
			<li
				class="text-accent xl:border-r border-[#dcdcdc] xl:pr-6 last:border-none"
				v-for="service in tab.services"
				:key="service"
			>
				{{ service }}
			</li>
		</ul>
		<Button class="mx-auto xl:mx-0">Learn more</Button>
	</div>
</template>

<style scoped></style>
