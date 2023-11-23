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
			<ul class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
				<li
					class="flex-1 border-r-grey flex flex-col items-center md:odd:border-r lg:even:border-r lg:last:border-none"
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
