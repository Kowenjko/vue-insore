<script setup lang="ts">
interface StatsI {
	count: string
	title: string
}

const stats: StatsI[] = [
	{ count: '+5120', title: 'Happy patients' },
	{ count: '+26', title: 'Total branches' },
	{ count: '+53', title: 'Senior doctors' },
	{ count: '+10', title: 'Years experience' },
]
</script>
<template>
	<section class="py-10 xl:py-36">
		<div class="container mx-auto">
			<ul class="flex flex-col md:flex-row gap-6 justify-between">
				<li
					class="flex-1 border-r border-r-grey flex flex-col items-center last:border-none"
					v-for="stat in stats"
					:key="stat.title"
				>
					<div
						class="text-4xl xl:text-[64px] font-semibold text-accent-tertiary xl:mb-2"
					>
						{{ stat.count }}
					</div>
					<div>{{ stat.title }}</div>
				</li>
			</ul>
		</div>
	</section>
</template>

<style scoped></style>
