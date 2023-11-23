<script setup lang="ts">
import { computed } from 'vue'
import { RiSearchLine } from 'vue-remix-icons'

interface Props {
	modelValue: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
	'update:modelValue': [value: string]
}>()

const value = computed({
	get() {
		return props.modelValue
	},
	set(value) {
		emit('update:modelValue', value)
	},
})
</script>

<template>
	<label for="search-input">
		<RiSearchLine class="fill-accent w-4" />
	</label>
	<input
		type="text"
		placeholder="Search.."
		v-model="value"
		class="outline-none rounded-none w-[100px] border-white focus:w-[180px] h-10 focus:border-b-2 focus:border-b-accent placeholder:italic transition-all"
		id="search-input"
	/>
</template>
