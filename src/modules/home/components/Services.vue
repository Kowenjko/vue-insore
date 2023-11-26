<script setup lang="ts">
import { useScrollReveal } from '@/composables/useScrollReveal.ts'
const { vScrollReveal } = useScrollReveal()

interface ServicesI {
	imgSrc: string
	title: string
	description: string
}

const services: ServicesI[] = [
	{
		imgSrc: '/icons/services/icon-1.svg',
		title: 'General practitioners',
		description:
			'Aliquam etiam lectus adipiscing est auctor mi quisque non viverra.',
	},
	{
		imgSrc: '/icons/services/icon-2.svg',
		title: 'Pregnancy support',
		description:
			'Aliquam etiam lectus adipiscing est auctor mi quisque non viverra.',
	},
	{
		imgSrc: '/icons/services/icon-3.svg',
		title: 'Nutritional support',
		description:
			'Aliquam etiam lectus adipiscing est auctor mi quisque non viverra.',
	},
	{
		imgSrc: '/icons/services/icon-4.svg',
		title: 'Pharmaceutical care',
		description:
			'Aliquam etiam lectus adipiscing est auctor mi quisque non viverra.',
	},
]
</script>
<template>
	<section v-scroll-reveal.reset>
		<div
			class="bg-services bg-cover bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-[20px] xl:pt-16 px-6 xl:px-0 relative h-[368px] flex items-center xl:items-start -z-10"
		>
			<div class="container mx-auto">
				<div class="flex items-center flex-col xl:flex-row xl:mb-[60px]">
					<h2
						class="h2 !text-white flex-1 mb-4 xl:mb-0 text-center xl:text-left"
					>
						Our Best Services For Your Solution
					</h2>
					<p
						class="text-white flex-1 text-center xl:text-left max-w-2xl xl:max-w-none"
					>
						Vitae aliquam vestibulum elit adipiscing massa diam in dignissim.
						Risus tellus libero elementum aliquam etiam. Lectus adipiscing est
						auctor mi quisque nunc non viverra est.
					</p>
				</div>
			</div>
		</div>
		<div class="container mx-auto mt-8 xl:-mt-[144px]">
			<ul class="grid md:grid-cols-2 xl:grid-cols-4 gap-5 px-8 xl:px-0">
				<li
					class="bg-white p-8 rounded-xl shadow-custom2 min-h-[288px] flex flex-col items-center text-center"
					v-for="service in services"
					:key="service.title"
					v-scroll-reveal.reset
				>
					<div class="mb-[15px]">
						<img :src="service.imgSrc" alt="service" />
					</div>
					<h3 class="h3 mb-3">{{ service.title }}</h3>
					<p class="font-light leading-normal max-w-[300px]">
						{{ service.description }}
					</p>
				</li>
			</ul>
		</div>
	</section>
</template>

<style scoped></style>
