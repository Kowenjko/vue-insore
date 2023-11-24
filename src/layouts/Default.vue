<script setup lang="ts">
import { inject } from 'vue'

import Header from '@/components/Header.vue'
const globalEvent = inject<any>('event')

const clicked = (event: MouseEvent) => globalEvent.emit('clicked', event)
</script>

<template>
	<Header />
	<main class="" @click="clicked">
		<router-view />
		<div class="h-[4000px]"></div>
	</main>
</template>

<style lang="scss" scoped></style>
