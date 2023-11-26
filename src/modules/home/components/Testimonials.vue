<script setup lang="ts">
import Sliders from '@/components/UI/Sliders.vue'
import { useScrollReveal } from '@/composables/useScrollReveal.ts'
const { vScrollReveal } = useScrollReveal()

const testimonials = [
	{
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus non, minus cumque aspernatur quia dolorem iste iure id harum tempore vero incidunt corrupti numquam praesentium explicabo ab! Provident, obcaecati similique.',
		title: 'James Rodrigo',
		user: 'Customer',
	},
	{
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus non, minus cumque aspernatur quia dolorem iste iure id harum tempore vero incidunt corrupti numquam praesentium explicabo ab! Provident, obcaecati similique.',
		title: 'James Rodrigo',
		user: 'Customer',
	},
	{
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus non, minus cumque aspernatur quia dolorem iste iure id harum tempore vero incidunt corrupti numquam praesentium explicabo ab! Provident, obcaecati similique.',
		title: 'James Rodrigo',
		user: 'Customer',
	},
]
</script>
<template>
	<section
		class="bg-testimonials bg-cover bg-right bg-no-repeat py-12 xl:min-h-[595px] xl:py-0"
		v-scroll-reveal.reset
	>
		<div class="container mx-auto">
			<div class="flex flex-col items-center gap-x-14 xl:flex-row">
				<div class="hidden xl:flex">
					<img src="/img/testimonials/img.png" alt="testimonials" />
				</div>
				<div class="max-w-[98%] xl:max-w-[710px]">
					<Sliders :sliders="testimonials" v-slot="{ slider }">
						<div class="h-full flex flex-col justify-center items-start">
							<div class="max-w-[680px] mx-auto text-centers xl:text-left">
								<p
									class="font-light relative text-xl text-[#4c5354] leading-[190%] text-center xl:text-left before:bg-quoteLeft before:bg-contain before:bg-bottom before:inline-block before:top-0 before:w-10 before:h-10 before:bg-no-repeat after:bg-quoteRight after:bg-contain after:bg-bottom after:inline-block after:top-0 after:w-10 after:h-10 after:bg-no-repeat mb-7"
								>
									<span class="mx-2"> {{ slider.description }} </span>
								</p>
								<h3 class="text-2xl text-[#4c5354] font-semibold">
									{{ slider.title }}
								</h3>
								<h4
									class="text-[#9ab4b7] font-medium uppercase tracking-[2.24px]"
								>
									{{ slider.user }}
								</h4>
							</div>
						</div>
					</Sliders>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
.swiper-pagination {
	@apply text-left pl-5 space-x-2.5;
	&-bullet {
		@apply h-2.5 w-2.5;
	}
}
</style>
