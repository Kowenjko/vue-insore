import { createScrollRevealDirective } from 'vue-scroll-reveal'

export const useScrollReveal = () => {
	const vScrollReveal = createScrollRevealDirective({
		origin: 'bottom',
		distance: '100px',
		delay: 300,
		interval: 50,
	})

	return { vScrollReveal }
}
