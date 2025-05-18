"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import type { Swiper as SwiperInstance } from "swiper"; // TO fix typescript type warning
import "swiper/css/pagination";
import { useRef, useState } from "react";

export default function Hero() {
	const [activeIndex, setActiveIndex] = useState(0);
	const swiperRef = useRef<SwiperInstance | null>(null);

	const slides = [
		{
			img: "/assets/hero-mariokart.jpg",
			title: "Start your engines and race across a sprawling world!",
		},
		{
			img: "/assets/hero-donkeykong.jpg",
			title:
				"The big guy is back—Donkey Kong returns in a ground-breaking new adventure!",
		},
		{
			img: "/assets/hero-zelda.avif",
			title:
				"Explore an even more breathtaking Hyrule on Nintendo Switch™ 2—available June 5",
		},
	];
	const handleSwiper = (swiper: SwiperInstance) => {
		swiperRef.current = swiper;
	};
	return (
		<div className="max-w-screen-xl mx-auto">
			<Swiper
				onSwiper={handleSwiper}
				onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
				slidesPerView={1}
				loop
				className="rounded-lg overflow-hidden"
			>
				{slides.map((slide, idx) => (
					<SwiperSlide key={slide.title}>
						<div className="relative w-full h-[300px] md:h-[400px] flex flex-col justify-end">
							<Image
								src={slide.img}
								alt={slide.title}
								fill
								className="object-contain"
								priority={idx === 0}
							/>
						</div>

						<div className="  w-full p-8 flex justify-between">
							<p className="text-lg md:text-2xl md:w-9/12 font-bold text-white text-center md:text-start">
								{slide.title}
							</p>
							<div className="hidden md:flex items-center gap-2">
								<Image
									src="/assets/image-rating.png"
									alt="Rating"
									width={40}
									height={40}
								/>
								<p className="text-sm">Fantasy Violence</p>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className="flex justify-center gap-4 ">
				{slides.map((slide, idx) => (
					<button
						type="button"
						key={slide.img}
						onClick={() => swiperRef.current?.slideToLoop(idx)}
						className={`border-2 rounded-lg overflow-hidden transition-all ${
							idx === activeIndex
								? "border-red-500 scale-110"
								: "border-transparent opacity-70"
						}`}
						style={{ width: 48, height: 48 }}
						aria-label={`Go to slide ${idx + 1}`}
					>
						<img
							src={slide.img}
							alt={slide.title}
							className="object-cover w-full h-full"
						/>
					</button>
				))}
			</div>
		</div>
	);
}
