"use client";
import React from "react";
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import Image from "next/image";

type FeaturedItem = {
	image: string;
	title: string;
	description: string;
	tag: string;
	tagColor: string;
};

const featuredItems: FeaturedItem[] = [
	{
		image: "/assets/image-borderland.avif",
		title: "Check out the Latest Creator's Voice Installment",
		description: "News & Events",
		tag: "Learn more",
		tagColor: "#3b8cff",
	},
	{
		image: "/assets/image-switch2.avif",
		title: "See What's New with the Nitendo Switch 2 system",
		description: "Hardware",
		tag: "Learn more",
		tagColor: "#3b8cff",
	},
	{
		image: "/assets/image-update.avif",
		title: "Free updates for select Nintendo Switch games",
		description: "",
		tag: "Learn more",
		tagColor: "#3b8cff",
	},
	{
		image: "/assets/image-switch-tour.avif",
		title: "Nintendo Switch™ 2 Welcome Tour",
		description: "",
		tag: "Pre-order now",
		tagColor: "#3b8cff",
	},
	{
		image: "/assets/image-lego-mario.avif",
		title: "LEGO Super Mario: Mario Kart - Mario & Standard Kart Set",
		description: "Merchandise",
		tag: "Shop now",
		tagColor: "#ff3b3b",
	},
	{
		image: "/assets/image-hogwart.avif",
		title: "Hogwarts Legacy - Nintendo Switch 2",
		description: "",
		tag: "Pre-order now",
		tagColor: "#3b8cff",
	},
	{
		image: "/assets/image-cyberpunk.avif",
		title: "Cyberpunk 2077: Ultimate Edition - Nintendo Switch 2",
		description: "",
		tag: "Pre-order now",
		tagColor: "#3b8cff",
	},
	{
		image: "/assets/image-borderland.avif",
		title: "Check out the Latest Creator's Voice Installment",
		description: "News & Events",
		tag: "Learn more",
		tagColor: "#3b8cff",
	},
	{
		image: "/assets/image-split-fiction.avif",
		title: "Split Fiction - Nintendo Switch 2",
		description: "",
		tag: "Pre-order now",
		tagColor: "#3b8cff",
	},
	{
		image: "/assets/image-switch2.avif",
		title: "See What's New with the Nitendo Switch 2 system",
		description: "Hardware",
		tag: "Learn more",
		tagColor: "#3b8cff",
	},
	{
		image: "/assets/image-update.avif",
		title: "Free updates for select Nintendo Switch games",
		description: "",
		tag: "Learn more",
		tagColor: "#3b8cff",
	},
	{
		image: "/assets/image-switch-tour.avif",
		title: "Nintendo Switch™ 2 Welcome Tour",
		description: "",
		tag: "Pre-order now",
		tagColor: "#3b8cff",
	},
];

export default function FeatureSection() {
	return (
		<section className="my-5 ">
			<h2 className="text-3xl text-secondary font-bold mb-10 ml-8">Featured</h2>
			<Swiper
				modules={[Navigation, FreeMode]}
				spaceBetween={24}
				speed={500}
				className="py-4"
				navigation={true}
				freeMode={false}
				slidesPerView={1.2}
				slidesPerGroup={1}
				breakpoints={{
					640: {
						slidesPerView: 2.2,
						slidesPerGroup: 2,
						freeMode: true,
						navigation: false,
					},
					768: {
						slidesPerView: 3.2,
						slidesPerGroup: 3,
					},
					1024: {
						slidesPerView: 4.5,
						slidesPerGroup: 4,
					},
				}}
			>
				{featuredItems.map((item, index) => (
					<SwiperSlide key={`${item.title}-${item.image}-${index}`}>
						<div
							className={`bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden h-[330px] w-fit flex flex-col ${index === 0 ? "ml-8" : ""} ${index === featuredItems.length - 1 ? "mr-8" : ""} `}
						>
							<Image
								src={item.image}
								alt={item.title}
								width={300}
								height={100}
							/>
							<div className="p-4 flex flex-col h-full justify-between">
								<div className="text-secondary font-semibold text-base mb-2">
									{item.title}
								</div>
								<div>
									<span
										className="text-white rounded-lg px-4 py-1 text-sm font-medium"
										style={{ backgroundColor: item.tagColor }}
									>
										{item.tag}
									</span>
									<div className="text-gray-500 text-sm  mt-2 border-l-black-300 border-l-2 pl-2">
										{item.description}
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<style jsx global>{`
            @media (max-width: 639px) {
  .swiper-button-next,
  .swiper-button-prev {
    display: none !important;
  }
}

        .swiper-button-next,
        .swiper-button-prev {
          position: absolute;
          top: 0%;
          width: 80px;
          height: 370px;
          border-radius: 16px;
          background: black;
          opacity: 0.3;
          color: #444;
          transition: background 0.2s, color 0.2s;
          border: none;
          cursor: pointer;
          transition: opacity 0.2s ease-in-out;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          opacity: 0.6;
          background: black;
          color: #fff;
          font-weight: bold;
        }
        .swiper-button-next {
          right: 0px;
        }
        .swiper-button-prev {
          left: 0px;
        }
        .swiper-button-disabled {
          opacity: 0 !important;
          pointer-events: none;
        }
        .swiper-wrapper {
          transition-timing-function: ease-in-out !important;
        }
      `}</style>
		</section>
	);
}
