<script setup lang="ts">
import { createScrollRevealDirective } from 'vue-scroll-reveal'
const vScrollReveal = createScrollRevealDirective({
	origin: 'bottom',
	distance: '100px',
	delay: 300,
	interval: 50,
})
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
