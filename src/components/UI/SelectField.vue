<script setup lang="ts">
import { ref, inject, watch } from 'vue'
import { RiArrowDownSLine, RiArrowUpSLine } from 'vue-remix-icons'

interface OptionsI {
	label: string
	value: string
}

interface Props {
	options: OptionsI[]
	selected: OptionsI
	placeholder: string
}

const props = defineProps<Props>()
const emitter = inject<any>('event')
const emit = defineEmits<{
	'update:selected': [value: OptionsI]
}>()

const isOpen = ref(false)
const defaultSelect = ref<OptionsI>()

const closeDropdown = () => (isOpen.value = false)

emitter.on('clicked', closeDropdown)

defineExpose({ closeDropdown })
watch(defaultSelect, (value: any) => emit('update:selected', value))
</script>
<template>
	<div class="relative w-full">
		<button
			@click.stop="isOpen = !isOpen"
			type="button"
			class="border border-[#dbdfdf] text-secondary rounded-lg text-sm w-full relative"
		>
			<div class="py-3 px-4 flex items-center">
				<span v-if="defaultSelect">{{ defaultSelect.label }}</span>
				<span class="text-secondary font-light" v-else>{{
					props.placeholder
				}}</span>
				<RiArrowDownSLine
					v-if="!isOpen"
					class="w-6 absolute fill-secondary right-4"
				/>
				<RiArrowUpSLine v-else class="w-6 absolute fill-secondary right-4" />
			</div>
		</button>
		<ul
			class="dropdown bg-white shadow-custom1 border rounded-lg w-full absolute mt-1 p-3 space-y-1 transition-all z-20"
			:class="[isOpen ? ' visible opacity-100' : ' invisible opacity-0']"
		>
			<li
				class="dropdown-option py-1 px-2 rounded-lg hover:bg-accent-tertiary hover:text-white cursor-pointer transition-all"
				v-for="option in props.options"
				:key="option.value"
				@click="defaultSelect = option"
			>
				{{ option.label }}
			</li>
		</ul>
	</div>
</template>

<style scoped></style>
