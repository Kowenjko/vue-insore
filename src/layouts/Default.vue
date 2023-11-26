<script setup lang="ts">
import { inject } from 'vue'

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

const globalEvent = inject<any>('event')

const clicked = (event: MouseEvent) => globalEvent.emit('clicked', event)
</script>

<template>
	<Header />
	<main class="" @click="clicked">
		<router-view />
	</main>
	<Footer />
</template>

<style lang="scss" scoped></style>
