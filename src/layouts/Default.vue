<script setup lang="ts">
import Header from '@/components/Header.vue'
</script>

<template>
	<Header />
	<main class="">
		<router-view />
		<div class="h-[4000px]"></div>
	</main>
</template>

<style lang="scss" scoped></style>
