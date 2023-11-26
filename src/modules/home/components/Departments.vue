<script setup lang="ts">
import Tabs from '@/components/UI/Tabs.vue'
import TabsItem from '@/components/UI/TabsItem.vue'
import { useScrollReveal } from '@/composables/useScrollReveal.ts'
const { vScrollReveal } = useScrollReveal()

interface TabI {
	title: string
	description: string
	services: string[]
	url: string
}

const departments: TabI[] = [
	{
		title: 'Laboratory Analysis',
		description:
			'Vel non viverra ligula odio ornare turpis mauris. Odio aliquam,	tincidunt ut vitae elit risus. Tempor egestas condimentum et ac	rutrum dui, odio.Vel non viverra ligula odio ornare turpis mauris. Aliquam, tincidunt ut vitae elit risus. Tempor egestas condimentum et ac rutrum dui, odio. Non viverra ligula odio ornare turpis mauris. Dio a Vel non viverra ligula odio ornare turpis mauris.',
		services: ['Neurocritical Care', 'Neuro Oncology', 'Geriatric Neurology'],
		url: '/',
	},
	{
		title: 'Cardiology Clinic',
		description:
			'Vel non viverra ligula odio ornare turpis mauris. Odio aliquam,	tincidunt ut vitae elit risus. Tempor egestas condimentum et ac	rutrum dui, odio.Vel non viverra ligula odio ornare turpis mauris. Aliquam, tincidunt ut vitae elit risus. Tempor egestas condimentum et ac rutrum dui, odio. Non viverra ligula odio ornare turpis mauris. ',
		services: ['Neurocritical Care', 'Neuro Oncology', 'Geriatric Neurology'],
		url: '/',
	},
	{
		title: 'Gynecology Clinic',
		description:
			'Vel non viverra ligula odio ornare turpis mauris. Odio aliquam,	tincidunt ut vitae elit risus. Tempor egestas condimentum et ac	rutrum dui, odio.Vel non viverra ligula odio ornare turpis mauris. Aliquam, tincidunt ut vitae elit risus. Tempor egestas condimentum et ac rutrum dui, odio. ',
		services: ['Neurocritical Care', 'Neuro Oncology', 'Geriatric Neurology'],
		url: '/',
	},
	{
		title: 'Pathology Clinic',
		description:
			'Vel non viverra ligula odio ornare turpis mauris. Odio aliquam,	tincidunt ut vitae elit risus. Tempor egestas condimentum et ac	rutrum dui, odio.Vel non viverra ligula odio ornare turpis mauris. Aliquam, tincidunt ut vitae elit risus. Tempor egestas condimentum et ac rutrum dui, odio. Non viverra ligula odio ornare turpis mauris. Dio a Vel non viverra ligula odio ornare turpis mauris.',
		services: ['Neurocritical Care', 'Neuro Oncology', 'Geriatric Neurology'],
		url: '/',
	},
	{
		title: 'Pediatrics Clinic',
		description:
			'Vel non viverra ligula odio ornare turpis mauris. Odio aliquam,	tincidunt ut vitae elit risus. Tempor egestas condimentum et ac	rutrum dui, odio.Vel non viverra ligula odio ornare turpis mauris. Aliquam, tincidunt ut vitae elit risus. Tempor egestas condimentum et ac rutrum dui, odio. Non viverra ligula odio ornare turpis mauris. Dio a Vel non viverra ligula odio ornare turpis mauris.',
		services: ['Neurocritical Care', 'Neuro Oncology', 'Geriatric Neurology'],
		url: '/',
	},
	{
		title: 'Neurology Clinic',
		description:
			'Vel non viverra ligula odio ornare turpis mauris. Odio aliquam,	tincidunt ut vitae elit risus. Tempor egestas condimentum et ac	rutrum dui, odio.Vel non viverra ligula odio ornare turpis mauris. Aliquam, tincidunt ut vitae elit risus. Tempor egestas condimentum et ac rutrum dui, odio. Non viverra ligula odio ornare turpis mauris. Dio a Vel non viverra ligula odio ornare turpis mauris.',
		services: ['Neurocritical Care', 'Neuro Oncology', 'Geriatric Neurology'],
		url: '/',
	},
]
</script>
<template>
	<section class="my-20 xl:my-40">
		<div
			class="bg-departments bg-cover xl:bg-auto bg-center bg-no-repeat max-w-[1466px] mx-4 xl:mx-auto rounded-3xl px-6 xl:px-2 py-12 xl:pt-[80px] xl:pb-[90px] relative min-h-[588px] flex items-center"
		>
			<div class="container mx-auto">
				<div class="flex flex-col xl:flex-row gap-x-5" v-scroll-reveal.reset>
					<Tabs :tabs="departments" v-slot="{ selectedTab }">
						<TabsItem :tab="selectedTab" v-scroll-reveal.reset />
					</Tabs>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
