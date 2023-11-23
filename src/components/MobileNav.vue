<script setup lang="ts">
import { ref } from 'vue'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'vue-remix-icons'
import Logo from '@/components/UI/Logo.vue'
import Navigators from '@/components/UI/Navigators.vue'
import SearchField from '@/components/UI/SearchField.vue'

const isOpen = ref(false)
const searchText = ref('')
</script>

<template>
	<nav class="nav" :class="[isOpen ? 'left-0' : '-left-[300px]']">
		<button @click="isOpen = !isOpen" class="button">
			<RiArrowLeftSLine v-if="isOpen" class="fill-white h-5" />
			<RiArrowRightSLine v-else class="fill-white h-5" />
		</button>

		<div class="px-12 flex flex-col gap-y-12 h-full">
			<Logo />
			<Navigators />
			<form class="relative flex gap-x-2 items-center">
				<SearchField v-model="searchText" />
			</form>
		</div>
	</nav>
</template>

<style lang="scss" scoped>
.nav {
	@apply bg-white fixed w-[300px] top-0 h-screen lg:hidden  shadow-2xl  transition-all duration-500 z-20;
	.button {
		@apply bg-primary w-8 h-8 relative -right-full top-8 flex justify-center items-center rounded-tr-lg rounded-br-lg cursor-pointer transition-all;
	}
}
</style>
