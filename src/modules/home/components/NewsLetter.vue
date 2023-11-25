<script setup lang="ts">
import Button from '@/components/UI/Button.vue'
</script>
<template>
	<section
		class="bg-accent md:h-[444px] py-12 flex items-center relative overflow-hidden"
	>
		<div class="absolute left-0 bottom-0">
			<img src="/public/img/newsletter/pattern.svg" alt="pattern" />
		</div>
		<div class="container mx-auto">
			<div class="flex flex-col lg:flex-row lg:items-center lg:gap-x-14">
				<div class="flex-1 z-10 text-center md:text-left">
					<div
						class="text-base uppercase text-white tracking-[2.24px] font-medium"
					>
						Our newsletter
					</div>
					<h1 class="h1 mb-4 !text-white">Subscribe us to get more updates</h1>
				</div>
				<form class="flex-1" @submit.prevent="">
					<div class="flex flex-col md:flex-row relative gap-y-4">
						<input
							class="rounded-full w-full h-[66px] bg-transparent text-white border-2 border-white placeholder:text-white pl-8 outline-none"
							type="text"
							placeholder="Your email address"
						/>
						<Button class="md:absolute right-0" size="lg" variant="white"
							>Subscribe</Button
						>
					</div>
				</form>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
