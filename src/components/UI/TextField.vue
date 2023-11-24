<script setup lang="ts">
import { computed } from 'vue'
interface Props {
	modelValue: string
	placeholder?: string
	type?: string
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
	<input
		class="w-full rounded-lg outline-none border border-[#dbdfdf] text-secondary text-sm py-3 px-4 font-light placeholder:font-light placeholder:text-secondary"
		:type="type || 'text'"
		v-model="value"
		:placeholder="placeholder"
	/>
</template>

<style scoped></style>
