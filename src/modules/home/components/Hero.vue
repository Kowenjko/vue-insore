<script setup lang="ts">
import Button from '@/components/UI/Button.vue'
import { RiHeartPulseLine } from 'vue-remix-icons'
</script>
<template>
	<section class="bg-grey overflow-hidden">
		<div class="container mx-auto h-full">
			<div class="flex flex-col xl:flex-row items-center justify-between">
				<div class="xl:w-[48%] text-center xl:text-left mb-6 xl:mb-0">
					<div
						class="flex gap-4 items-center bg-white py-2 px-5 my-10 rounded-full max-w-[220px] mx-auto xl:mx-0 xl:mt-0"
					>
						<RiHeartPulseLine class="fill-accent w-5" />
						<span
							class="uppercase text-base font-medium text-[#9ab4b7] tracking-[2.24px]"
						>
							Live your life
						</span>
					</div>
					<h1 class="h1 mb-6">We care about your health</h1>
					<p class="mb-10 md:max-w-xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
						quos veritatis vitae officiis eos fugit quasi qui nemo. Modi odit
						quasi quae natus amet, fugiat quis molestias veritatis aliquid
						facilis!
					</p>
					<Button size="lg" class="mx-auto xl:mx-0">Contact us</Button>
				</div>
				<div class="hidden xl:flex max-w-[814px] self-end">
					<img src="/public/img/hero/img.png" alt="hero" />
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped></style>
