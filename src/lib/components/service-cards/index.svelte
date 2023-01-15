<script>
	import Card from './Card.svelte';
	import { onMount } from 'svelte';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import 'swiper/css';

	export let data;
	let width;

	const handleResize = () => {
		width = window.innerWidth;
	};
	onMount(() => {
		width = window.innerWidth;
		window.addEventListener('resize', handleResize);
	});
</script>

<div class="flex justify-center pt-10 pb-40 lg:pt-10 lg:pb-20">
	<Swiper
		slidesPerView={1}
		spaceBetween={10}
		setWrapperSize={false}
		loop={false}
		breakpoints={{
			// when window width is >= 320px
			640: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			// when window width is >= 480px
			768: {
				slidesPerView: 3,
				spaceBetween: 30
			},
			// when window width is >= 640px
			1024: {
				slidesPerView: 4,
				spaceBetween: 40
			}
		}}
	>
		{#each data as item, idx}
			<SwiperSlide>
				<Card {...item} {idx} />
			</SwiperSlide>
		{/each}
	</Swiper>
</div>
