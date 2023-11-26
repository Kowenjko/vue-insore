<script setup lang="ts">
import { useScrollReveal } from '@/composables/useScrollReveal.ts'
const { vScrollReveal } = useScrollReveal()
</script>
<template>
	<section class="my-12 xl:my-32">
		<div
			class="container mx-auto flex flex-col xl:flex-row items-center gap-y-12 xl:justify-between"
			v-scroll-reveal.reset
		>
			<div v-for="index in 5" :key="index">
				<img :src="`/img/brands/brand-${index}.svg`" alt="brand" />
			</div>
		</div>
	</section>
</template>

<style scoped></style>
