"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type NewsItem = {
	id: string;
	image: string;
	date: string;
	title: string;
	description: string;
	link: string;
};

const allNewsItems: NewsItem[] = [
	// Featured news (will be displayed in the first row with 2 columns)
	{
		id: "1",
		image: "/assets/image-capcom.avif",
		date: "05/16/25",
		title: "Keep rockin' with Capcom Fighting Collection 2!",
		description:
			"Capcom Fighting Collection 2 hits the streets with the return of eight classic fighting games. Whether you're looking to take on old rivals or make new ones...",
		link: "#",
	},
	{
		id: "2",
		image: "/assets/image-nitendo-SF.avif",
		date: "05/15/25",
		title:
			"Nintendo San Francisco opens its doors to bring smiles to guests of all ages, near and far",
		description:
			"Today, Nintendo welcomed its first guests to Nintendo SAN FRANCISCO – its second official store in the United States – with a grand opening ribbon...",
		link: "#",
	},
	// Regular news (will be displayed in the second row with 4 columns)
	{
		id: "3",
		image: "/assets/image-champion.avif",
		date: "05/12/25",
		title:
			"Competition #44 is on now in Nintendo World Championships: NES Edition",
		description: "",
		link: "#",
	},
	{
		id: "4",
		image: "/assets/image-zelda-track.avif",
		date: "05/10/25",
		title:
			"Enjoy an epic playlist featuring tracks from the Legend of Zelda series",
		description: "",
		link: "#",
	},
	{
		id: "5",
		image: "/assets/image-robots.avif",
		date: "05/07/25",
		title: "So... you wanna pilot some giant robots?",
		description: "",
		link: "#",
	},
	{
		id: "6",
		image: "/assets/image-champion.avif",
		date: "05/04/25",
		title:
			"Competition #43 is on now in Nintendo World Championships: NES Edition",
		description: "",
		link: "#",
	},
];

const NewsCard = ({ item }: { item: NewsItem }) => {
	return (
		<div className="flex flex-col group cursor-pointer">
			<div className="relative h-48 w-full overflow-hidden rounded-t-lg">
				<Image
					src={item.image}
					alt={item.title}
					fill
					className="object-cover group-hover:scale-110 transition duration-500"
				/>
			</div>

			<div className="p-4 flex flex-col flex-grow ">
				<div className="flex items-center mb-2">
					<span className="text-primary text-xl font-medium mr-2">♥</span>
					<span className="text-secondary text-sm">{item.date}</span>
				</div>

				<h3 className="font-semibold text-secondary mb-2 group-hover:text-primary transistion duration-500">
					{item.title}
				</h3>

				{item.description && (
					<p className="text-secondary text-sm mb-3">{item.description}</p>
				)}

				<span className="text-primary mt-auto cursor-pointer text-md font-medium underline ">
					Read more
				</span>
			</div>
		</div>
	);
};

export default function NewsSection() {
	const featuredNews = allNewsItems.slice(0, 2);
	const regularNews = allNewsItems.slice(2);

	return (
		<>
			<h2 className="text-3xl text-secondary font-bold mb-6">News</h2>

			{/* Featured news - 2 columns */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-6 gap-x-8">
				{featuredNews.map((item) => (
					<NewsCard key={item.id} item={item} />
				))}
			</div>

			<br />

			{/* Regular news - 4 columns */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{regularNews.map((item) => (
					<NewsCard key={item.id} item={item} />
				))}
			</div>

			<button
				type="button"
				className="bg-[#e60012] w-full md:w-auto  text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-red-700 transition-colors mt-8"
			>
				See All News Articles
			</button>
		</>
	);
}
