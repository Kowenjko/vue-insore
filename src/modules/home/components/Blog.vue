<script setup lang="ts">
import { createScrollRevealDirective } from 'vue-scroll-reveal'
const vScrollReveal = createScrollRevealDirective({
	origin: 'bottom',
	distance: '100px',
	delay: 300,
	interval: 50,
})
interface PostsI {
	imgSrc: string
	badge: string
	date: string
	title: string
	description: string
}

const posts: PostsI[] = [
	{
		imgSrc: '/img/blog/img-1.png',
		badge: 'Medical',
		date: 'Jan 2, 2023',
		title: '10 foods to avoid for your heart health',
		description:
			'It’s normal to feel anxiety, worry and grief any time you’re diagnosed with a condition that’s certainly true...',
	},
	{
		imgSrc: '/img/blog/img-2.png',
		badge: 'Mental health',
		date: 'Jan 3, 2023',
		title: 'How to be relax & calm in hard situations',
		description:
			'It’s normal to feel anxiety, worry and grief any time you’re diagnosed with a condition that’s certainly true...',
	},
	{
		imgSrc: '/img/blog/img-3.png',
		badge: 'Dental',
		date: 'Jan 4, 2023',
		title: 'Best ways to make your teeth strong',
		description:
			'It’s normal to feel anxiety, worry and grief any time you’re diagnosed with a condition that’s certainly true...',
	},
]
</script>
<template>
	<section>
		<div class="container mx-auto">
			<h2 class="h2 mb-12 text-center xl:text-left" v-scroll-reveal.reset>
				Our Recent Posts
			</h2>
			<ul
				class="flex flex-col xl:flex-row gap-y-6 xl:gap-y-0 items-center xl:justify-between mb-12"
			>
				<li
					class="max-w-[420px] shadow-custom2 rounded-xl overflow-hidden cursor-pointer group"
					v-for="post in posts"
					:key="post.title"
					v-scroll-reveal.reset
				>
					<div class="relative overflow-hidden">
						<img
							class="group-hover:scale-110 transition-all duration-500"
							:src="post.imgSrc"
							alt="blog"
						/>
						<div
							class="bg-accent-tertiary absolute bottom-0 left-0 text-white text-base tracking-[2.24px] font-medium uppercase py-2 px-5"
						>
							{{ post.badge }}
						</div>
					</div>
					<div class="px-5 py-6">
						<div>Jan 2, 2023</div>
						<h4 class="h4 my-3">{{ post.title }}</h4>
						<p class="font-light">
							{{ post.description }}
							<a href="#" class="italic underline text-[#4c5354]">Read more</a>
						</p>
					</div>
				</li>
			</ul>
		</div>
	</section>
</template>

<style scoped></style>
