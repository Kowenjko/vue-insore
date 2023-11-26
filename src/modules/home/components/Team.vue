<script setup lang="ts">
import { computed } from 'vue'
import Sliders from '@/components/UI/Sliders.vue'
import Socials from '@/components/UI/Socials.vue'
import { useWindowSize } from '@vueuse/core'
import { useScrollReveal } from '@/composables/useScrollReveal.ts'
const { vScrollReveal } = useScrollReveal()

const { width } = useWindowSize()

const slidesPerView = computed(() => (width.value > 1330 ? 2 : 1))
const positionPagination = computed<string>(() =>
	width.value > 1330 ? 'center' : 'right'
)

const doctors = [
	{
		name: 'Dr. Leslie Taylor',
		skill: 'Padiatrician',
		imgSrc: '/img/team/doctor-1.png',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, optio. Ad optio earum sapiente soluta atque iusto odio.',
	},
	{
		name: 'Dr. Leslie Taylor',
		skill: 'Padiatrician',
		imgSrc: '/img/team/doctor-2.png',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, optio. Ad optio earum sapiente soluta atque iusto odio.',
	},
	{
		name: 'Dr. Leslie Taylor',
		skill: 'Padiatrician',
		imgSrc: '/img/team/doctor-1.png',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, optio. Ad optio earum sapiente soluta atque iusto odio.',
	},
	{
		name: 'Dr. Leslie Taylor',
		skill: 'Padiatrician',
		imgSrc: '/img/team/doctor-2.png',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, optio. Ad optio earum sapiente soluta atque iusto odio.',
	},
]
</script>
<template>
	<section>
		<div class="container mx-auto">
			<h2 class="h2 my-12 text-center xl:text-left" v-scroll-reveal.reset>
				Our Team
			</h2>

			<div class="min-h-[400px]" v-scroll-reveal.reset>
				<Sliders
					:sliders="doctors"
					v-slot="{ slider }"
					:slides-per-view="slidesPerView"
					:positionPagination="positionPagination"
				>
					<div class="flex flex-col xl:flex-row">
						<div class="flex flex-col xl:flex-row items-center gap-8">
							<div class="flex-1">
								<img :src="slider.imgSrc" alt="doctor" />
							</div>
							<div class="flex-1 flex flex-col">
								<h4 class="h4 mb-3">{{ slider.name }}</h4>
								<div
									class="font-medium uppercase tracking-[2.24px] text-[#9ab4b7] mb-5"
								>
									{{ slider.skill }}
								</div>
								<p class="font-light mb-6 max-w-[320px]">
									{{ slider.description }}
								</p>
								<Socials />
							</div>
						</div>
					</div>
				</Sliders>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
