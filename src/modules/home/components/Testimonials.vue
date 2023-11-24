<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css/bundle'
import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/navigation'

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
	>
		<div class="container mx-auto">
			<div class="flex flex-col items-center gap-x-14 xl:flex-row">
				<div class="hidden xl:flex">
					<img src="/img/testimonials/img.png" alt="testimonials" />
				</div>
				<div class="max-w-[98%] xl:max-w-[710px]">
					<swiper
						:modules="[Pagination, Autoplay]"
						:space-between="30"
						:pagination="{ clickable: true }"
						:loop="true"
						:autoplay="{
							delay: 2500,
							disableOnInteraction: false,
						}"
						class="h-[400px]"
					>
						<swiper-slide
							class="h-full"
							v-for="(testimonial, index) in testimonials"
							:key="index"
						>
							<div class="h-full flex flex-col justify-center items-start">
								<div class="max-w-[680px] mx-auto text-centers xl:text-left">
									<p
										class="font-light relative text-xl text-[#4c5354] leading-[190%] text-center xl:text-left before:bg-quoteLeft before:bg-contain before:bg-bottom before:inline-block before:top-0 before:w-10 before:h-10 before:bg-no-repeat after:bg-quoteRight after:bg-contain after:bg-bottom after:inline-block after:top-0 after:w-10 after:h-10 after:bg-no-repeat mb-7"
									>
										<span class="mx-2"> {{ testimonial.description }} </span>
									</p>
									<h3 class="text-2xl text-[#4c5354] font-semibold">
										{{ testimonial.title }}
									</h3>
									<h4
										class="text-[#9ab4b7] font-medium uppercase tracking-[2.24px]"
									>
										{{ testimonial.user }}
									</h4>
								</div>
							</div>
						</swiper-slide>
					</swiper>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.swiper-pagination {
	@apply text-left;
}
</style>
