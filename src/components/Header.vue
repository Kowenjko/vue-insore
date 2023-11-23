<script setup lang="ts">
import type { Component } from 'vue'
import Button from '@/components/UI/Button.vue'
import { RiMapPin2Fill, RiPhoneFill } from 'vue-remix-icons'
import MobileNav from './MobileNav.vue'
import DesktopNav from './DesktopNav.vue'
import Logo from './UI/Logo.vue'

interface LocationI {
	title: string
	icon: Component
}

const locations: LocationI[] = [
	{
		title: '123 Arling, Miola, NY',
		icon: RiMapPin2Fill,
	},
	{
		title: '(+487) 384 9452',
		icon: RiPhoneFill,
	},
]
</script>

<template>
	<header>
		<div class="header">
			<div class="header-logo">
				<Logo />
			</div>

			<div class="header-locations">
				<div
					class="header-locations__item"
					v-for="location in locations"
					:key="location.title"
				>
					<component :is="location.icon" class="icon" />
					<span class="text-secondary">{{ location.title }}</span>
				</div>

				<Button class="w-64" variant="outline">Book now</Button>
			</div>
			<MobileNav />
			<DesktopNav />
		</div>
	</header>
</template>

<style lang="scss" scoped>
header {
	@apply py-8 lg:pt-6 lg:pb-14;
	.header {
		@apply container mx-auto lg:relative flex flex-col lg:flex-row lg:justify-between gap-y-4 lg:gap-y-0 bg-white;
		&-logo {
			@apply flex justify-center lg:justify-start;
		}
		&-locations {
			@apply flex flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:gap-y-0 justify-center items-center;
			&__item {
				@apply flex justify-center items-center gap-x-2 lg:justify-between;
			}
		}
	}
}
.icon {
	@apply fill-accent h-6 w-5;
}
</style>
