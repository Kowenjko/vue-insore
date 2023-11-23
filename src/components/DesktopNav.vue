<script setup lang="ts">
import { ref } from 'vue'

import Navigators from '@/components/UI/Navigators.vue'
import SearchField from '@/components/UI/SearchField.vue'

const searchText = ref('')
</script>

<template>
	<nav
		class="bg-white absolute w-full left-0 -bottom-[86px] shadow-custom1 h-16 rounded-xl hidden lg:flex lg:items-center lg:justify-between lg:px-12"
	>
		<Navigators class="flex justify-center items-center gap-x-10" />
		<form class="relative flex gap-x-2 items-center">
			<SearchField v-model="searchText" />
		</form>
	</nav>
</template>

<style lang="scss" scoped></style>
