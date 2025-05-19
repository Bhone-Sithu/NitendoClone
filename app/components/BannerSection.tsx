"use client";
import Image from "next/image";
import React from "react";

type BannerProps = {
	imageSrc: string;
	imageAlt?: string;
	text: string;
	title: string;
	buttonText: string;
	imageHeight?: string;
	onButtonClick?: () => void;
	className?: string;
};

export default function Banner({
	imageSrc,
	imageAlt = "Banner",
	imageHeight = "h-[150px]",
	text,
	buttonText,
	title,
	onButtonClick,
	className = "",
}: BannerProps) {
	return (
		<div className={`my-8 ${className} mx-5 lg:mx-24 flex flex-col gap-10`}>
			<h1 className="text-3xl font-semibold ">{title}</h1>
			<div className="relative rounded-xl overflow-hidden ] ">
				<Image
					src={imageSrc}
					alt={imageAlt}
					width={1920}
					height={1080}
					className="w-full h-[30vh] md:h-auto object-cover"
					priority
				/>
			</div>
			<div className="relative flex flex-col md:flex-row gap-5 w-full">
				<p className="text-xl md:w-9/12  font-semibold text-white mb-4 md:mb-0 drop-shadow">
					{text}
				</p>
				<button
					type="button"
					onClick={onButtonClick}
					className="bg-primary w-full md:w-auto  text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-red-800 transition-colors hover:scale-105  hover:animate-heartbeat cursor-pointer "
				>
					{buttonText}
				</button>
			</div>
		</div>
	);
}
