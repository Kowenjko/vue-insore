<script setup lang="ts">
import Accordion from '@/components/UI/Accordion.vue'
interface FaqsI {
	title: string
	description: string
	active: boolean
}

const faqs: FaqsI[] = [
	{
		title: 'Why to believe with Insove medical healthcare ?',
		description:
			'Diam orci gravida convallis at enim risus viverra. Hac mi tristique in aliquet tincidunt nam lectus nec. Placerat interdum auctor facilisi massa laoreet hendrerit posuere a. Tristique ultricies consectetu at.',
		active: false,
	},
	{
		title: 'Will we get healthcare updates after surgery ?',
		description:
			'Diam orci gravida convallis at enim risus viverra. Hac mi tristique in aliquet tincidunt nam lectus nec. Placerat interdum auctor facilisi massa laoreet hendrerit posuere a. Tristique ultricies consectetu at.',
		active: false,
	},
	{
		title: 'What is the cost for just repairing ?',
		description:
			'Diam orci gravida convallis at enim risus viverra. Hac mi tristique in aliquet tincidunt nam lectus nec. Placerat interdum auctor facilisi massa laoreet hendrerit posuere a. Tristique ultricies consectetu at.',
		active: false,
	},
	{
		title: 'What time will it take to finish my roofing ?',
		description:
			'Diam orci gravida convallis at enim risus viverra. Hac mi tristique in aliquet tincidunt nam lectus nec. Placerat interdum auctor facilisi massa laoreet hendrerit posuere a. Tristique ultricies consectetu at.',
		active: false,
	},
]
</script>
<template>
	<section class="mt-10">
		<div class="container mx-auto">
			<h2 class="h2 text-center mb-12">We've got answer</h2>
			<Accordion :accordions="faqs" />
		</div>
	</section>
</template>

<style scoped></style>
