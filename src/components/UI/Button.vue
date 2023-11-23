<script setup lang="ts">
type variantT = 'accent' | 'white' | 'outline'
type SizeT = 'sm' | 'lg'

interface Props {
	size?: SizeT
	variant?: variantT
	disabled?: boolean
}

withDefaults(defineProps<Props>(), {
	size: 'sm',
	variant: 'accent',
	disabled: false,
})
</script>

<template>
	<button :class="['button', size, variant]" :disabled="disabled">
		<slot />
	</button>
</template>

<style lang="scss" scoped>
.button {
	@apply rounded-full uppercase tracking-[1.02px] flex items-center justify-center transition-all outline-none;
}
.sm {
	@apply h-14 px-10;
}
.lg {
	@apply h-16 px-[50px];
}
.accent {
	@apply bg-accent text-white hover:bg-accent-secondary;
}
.white {
	@apply bg-white text-secondary hover:bg-white/90;
}
.outline {
	@apply bg-transparent  border-2 border-accent text-secondary hover:bg-accent hover:border-transparent hover:text-white;
}
</style>
