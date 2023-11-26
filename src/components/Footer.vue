<script setup lang="ts">
import Logo from '@/components/UI/Logo.vue'
import { RiMapPinFill, RiMailFill, RiPhoneFill } from 'vue-remix-icons'
import Socials from './UI/Socials.vue'
import { useScrollReveal } from '@/composables/useScrollReveal.ts'
const { vScrollReveal } = useScrollReveal()
</script>
<template>
	<footer class="pt-12 xl:pt-[150px]">
		<div class="container mx-auto pb-12 xl:pb-26">
			<div class="flex flex-col xl:flex-row gap-x-5 gap-y-10">
				<div class="flex-1" v-scroll-reveal.reset>
					<Logo />
					<p class="my-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tempora
						quo debitis consequuntur totam omnis unde praesentium voluptas.
					</p>
					<div class="flex flex-col gap-3 mb-10">
						<div class="flex items-center gap-2">
							<RiMapPinFill class="w-5 fill-accent" />
							<div>123 Arling, Miola, NY</div>
						</div>
						<div class="flex items-center gap-2">
							<RiMailFill class="w-5 fill-accent" />
							<div>Info@yourinfo.com</div>
						</div>
						<div class="flex items-center gap-2">
							<RiPhoneFill class="w-5 fill-accent" />
							<div>(+487) 384 9452</div>
						</div>
					</div>
					<Socials />
				</div>
				<div class="flex-1" v-scroll-reveal.reset>
					<h4 class="h4 mb-5 text-center xl:text-left">Quick links</h4>
					<div class="flex gap-5">
						<ul class="flex-1 flex flex-col gap-5">
							<li>
								<a href="#" class="hover:text-accent transition-all">Home</a>
							</li>
							<li>
								<a href="#" class="hover:text-accent transition-all">Doctors</a>
							</li>
							<li>
								<a href="#" class="hover:text-accent transition-all"
									>Department</a
								>
							</li>
							<li>
								<a href="#" class="hover:text-accent transition-all"
									>Services</a
								>
							</li>
							<li>
								<a href="#" class="hover:text-accent transition-all">Blog</a>
							</li>
						</ul>
						<ul class="flex-1 flex flex-col gap-5">
							<li>
								<a href="#" class="hover:text-accent transition-all"
									>Our pricing</a
								>
							</li>
							<li>
								<a href="#" class="hover:text-accent transition-all">Contact</a>
							</li>
							<li>
								<a href="#" class="hover:text-accent transition-all">Careers</a>
							</li>
							<li>
								<a href="#" class="hover:text-accent transition-all">Faqs</a>
							</li>
							<li>
								<a href="#" class="hover:text-accent transition-all"
									>Privacy policy</a
								>
							</li>
						</ul>
					</div>
				</div>
				<div class="flex-1" v-scroll-reveal.reset>
					<h4 class="h4 mb-5 text-center xl:text-left">Opening hours</h4>
					<div class="flex flex-col gap-5">
						<ul class="flex-1 space-y-5">
							<li class="flex justify-between items-center border-b pb-2.5">
								<div class="">Monday - thursday</div>
								<div class="text-accent font-medium">8:00 am - 6:00 pm</div>
							</li>
							<li class="flex justify-between items-center border-b pb-2.5">
								<div class="">Friday - Saturday</div>
								<div class="text-accent font-medium">10:00 am - 4:00 pm</div>
							</li>
							<li class="flex justify-between items-center border-b pb-2.5">
								<div class="">Sunday</div>
								<div class="text-accent font-medium">Emergency only</div>
							</li>
							<li class="flex justify-between items-center border-b pb-2.5">
								<div class="">Personal</div>
								<div class="text-accent font-medium">7:00 pm - 9:00 pm</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="py-8 border-t">
			<div class="container mx-auto text-center">
				<div class="font-light text-base">
					&copy; {{ new Date().getFullYear() }} Insove - All rights reserved
				</div>
			</div>
		</div>
	</footer>
</template>

<style scoped></style>
