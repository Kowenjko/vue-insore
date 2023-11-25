<script setup lang="ts">
import {
	RiYoutubeFill,
	RiFacebookCircleFill,
	RiInstagramFill,
} from 'vue-remix-icons'

const icons = [RiYoutubeFill, RiFacebookCircleFill, RiInstagramFill]
</script>
<template>
	<ul class="flex items-center gap-x-5">
		<li v-for="(icon, index) in icons" :key="index">
			<a href="#">
				<component
					:is="icon"
					class="w-8 fill-accent-tertiary hover:fill-accent transition-all"
				/>
			</a>
		</li>
	</ul>
</template>
