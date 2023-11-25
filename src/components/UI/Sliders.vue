<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css/bundle'
import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/navigation'

interface Props {
	sliders: any
	slidesPerView?: number
	positionPagination: string
}

withDefaults(defineProps<Props>(), {
	slidesPerView: 1,
	positionPagination: 'left',
})
</script>
<template>
	<swiper
		:modules="[Pagination, Autoplay]"
		:slides-per-view="slidesPerView"
		:space-between="30"
		:pagination="{ clickable: true }"
		:loop="true"
		:autoplay="{
			delay: 2500,
			disableOnInteraction: false,
		}"
		class="min-h-[400px]"
	>
		<swiper-slide
			class="h-full"
			v-for="(slider, index) in sliders"
			:key="index"
		>
			<slot :slider="slider" />
		</swiper-slide>
	</swiper>
</template>

<style lang="scss">
.swiper-pagination {
	@apply pl-5 space-x-2.5;
	text-align: v-bind(positionPagination) !important;
	&-bullet {
		@apply h-2.5 w-2.5;
	}
}
</style>
