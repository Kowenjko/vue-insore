<script setup lang="ts">
import { ref } from 'vue'
import { RiAddFill, RiSubtractFill } from 'vue-remix-icons'
import { useScrollReveal } from '@/composables/useScrollReveal.ts'
const { vScrollReveal } = useScrollReveal()

interface FaqsI {
	title: string
	description: string
	active: boolean
}

interface Props {
	accordions: FaqsI[]
}

const props = defineProps<Props>()
const items = ref(props.accordions)
</script>
<template>
	<div class="max-w-5xl mx-auto">
		<div
			v-scroll-reveal.reset
			@click="item.active = !item.active"
			class="px-8 pt-7 pb-4 border-b select-none cursor-pointer"
			v-for="item in items"
			:key="item.title"
		>
			<button class="flex items-center justify-between w-full mb-2">
				<h4 class="h4">{{ item.title }}</h4>
				<RiSubtractFill v-if="item.active" class="w-6 fill-accent" />
				<RiAddFill v-else class="w-6 fill-accent" />
			</button>
			<div :class="[item.active ? 'h-full' : 'h-0 overflow-hidden']">
				<p class="font-light">
					{{ item.description }}
				</p>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
