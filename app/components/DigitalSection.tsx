"use client";
import React from "react";
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import Link from "next/link";
import DigitalCard, { type DigitalItem } from "./DigitalCard";

const digitalItems: DigitalItem[] = [
	{
		id: 1,
		image: "/assets/digital/image-minecraft.avif",
		title: "Minecraft",
		releaseDate: "3/23/21",
		price: "$29.99",
		type: "Games",
	},
	{
		id: 2,
		image: "/assets/digital/image-hogwart.avif",
		title: "Hogwart Legacy",
		releaseDate: "4/29/22",
		price: "$39.99",
		type: "Games",
	},
	{
		id: 3,
		image: "/assets/digital/image-starwars.avif",
		title: "LEGO® Star Wars™: The Skywalker Saga",
		releaseDate: "6/12/18",
		price: "$15.00",
		type: "Games",
	},
	{
		id: 4,
		image: "/assets/digital/image-reddead.avif",
		title: "Red Dead Redemption 2",
		releaseDate: "10/25/18",
		price: "$29.99",
		type: "Games",
	},
	{
		id: 5,
		image: "/assets/digital/image-minecraft.avif",
		title: "Minecraft",
		releaseDate: "3/23/21",
		price: "$29.99",
		type: "Games",
	},
	{
		id: 6,
		image: "/assets/digital/image-hogwart.avif",
		title: "Hogwart Legacy",
		releaseDate: "4/29/22",
		price: "$39.99",
		type: "Games",
	},
	{
		id: 7,
		image: "/assets/digital/image-starwars.avif",
		title: "LEGO® Star Wars™: The Skywalker Saga",
		releaseDate: "6/12/18",
		price: "$15.00",
		type: "Games",
	},
	{
		id: 8,
		image: "/assets/digital/image-reddead.avif",
		title: "Red Dead Redemption 2",
		releaseDate: "10/25/18",
		price: "$29.99",
		type: "Games",
	},
];

export default function DigitalSection() {
	return (
		<section className="my-5">
			<div className="flex gap-5 items-center mb-10 mx-8">
				<h2 className="text-3xl text-secondary font-bold">
					Digital best sellers
				</h2>
				<span className="border-black-200 text-primary underline cursor-pointer border-l-1  pl-5">
					See full list
				</span>
			</div>
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
						slidesPerView: 3.5,
						slidesPerGroup: 3,
					},
				}}
			>
				{digitalItems.map((item, index) => (
					<SwiperSlide key={`${item.title}-${index}`}>
						<DigitalCard item={item} />
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
          top: 3%;
          width: 80px;
          height: 440px;
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
