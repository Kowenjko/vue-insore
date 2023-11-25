<script setup lang="ts">
import { ref } from 'vue'
interface TabI {
	title: string
	description: string
	services: string[]
	url: string
}

interface Props {
	tabs: TabI[]
}

const props = defineProps<Props>()
const selectedTab = ref<TabI>(props.tabs[0])

const clickOnTab = (tabName: TabI) => (selectedTab.value = tabName)
</script>
<template>
	<ul
		class="xl:w-[310px] space-y-4 xl:space-y-10 font-medium uppercase text-center xl:text-left text-base text-[#9ab4b7] xl:pt-3 xl:text-lg mb-12 xl:mb-0"
	>
		<li
			class="cursor-pointer hover:text-accent transition-all"
			v-for="tab in tabs"
			:key="tab.title"
			:class="{ 'text-accent': tab.title === selectedTab.title }"
			@click="clickOnTab(tab)"
		>
			{{ tab.title }}
		</li>
	</ul>
	<div class="xl:w-[640px]" v-if="selectedTab.title">
		<slot :selectedTab="selectedTab" />
	</div>
</template>

<style scoped></style>
