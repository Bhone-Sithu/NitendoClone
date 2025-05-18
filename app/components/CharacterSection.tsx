"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Character = {
	id: string;
	name: string;
	backgroundImage: string;
	characterImage: string;
	link: string;
	backgroundColor?: string;
};

const characters: Character[] = [
	{
		id: "1",
		name: "Super Mario™",
		backgroundImage: "/assets/characters/image-mario-bg.avif",
		characterImage: "/assets/characters/image-mario.avif",
		backgroundColor: "#5bd969",
		link: "#",
	},
	{
		id: "2",
		name: "The Legend of Zelda™",
		backgroundImage: "/assets/characters/image-zelda-bg.avif",
		characterImage: "/assets/characters/image-zelda.avif",
		backgroundColor: "#f8e7b5",
		link: "#",
	},
	{
		id: "3",
		name: "Splatoon™",
		backgroundImage: "/assets/characters/image-animal-bg.avif",
		characterImage: "/assets/characters/image-animal.avif",
		backgroundColor: "#5d3fe8",
		link: "#",
	},
	{
		id: "4",
		name: "Kirby™",
		backgroundImage: "/assets/characters/image-kirby-background.avif",
		characterImage: "/assets/characters/image-kirby.avif",
		backgroundColor: "#ffeb3b",
		link: "#",
	},
	{
		id: "5",
		name: "Pikmin™",
		backgroundImage: "/assets/characters/image-zelda-bg.avif",
		characterImage: "/assets/characters/image-zelda.avif",
		backgroundColor: "#ffffff",
		link: "#",
	},
	{
		id: "6",
		name: "Animal Crossing™",
		backgroundImage: "/assets/characters/image-mario-bg.avif",
		characterImage: "/assets/characters/image-mario.avif",
		backgroundColor: "#a5e8c7",
		link: "#",
	},
	{
		id: "7",
		name: "Metroid™",
		backgroundImage: "/assets/characters/image-kirby-background.avif",
		characterImage: "/assets/characters/image-kirby.avif",
		backgroundColor: "#3d3d3d",
		link: "#",
	},
	{
		id: "8",
		name: "Pokémon™",
		backgroundImage: "/assets/characters/image-animal-bg.avif",
		characterImage: "/assets/characters/image-animal.avif",
		backgroundColor: "#ffd54f",
		link: "#",
	},
];

const CharacterCard = ({ character }: { character: Character }) => {
	return (
		<Link href={character.link}>
			<div className="flex flex-col items-center group cursor-pointer h-full">
				<div
					className="relative h-40 w-40 md:h-56 md:w-64 overflow-hidden rounded-lg mb-3"
					style={{ backgroundColor: character.backgroundColor || "#f5f5f5" }}
				>
					{/* Character Image */}
					<div className="absolute inset-0 z-10">
						<Image
							src={character.characterImage}
							alt={character.name}
							fill
							className="object-contain group-hover:scale-120 transition duration-300"
							priority
						/>
					</div>

					{/* Background Image */}
					<div className="absolute inset-0 z-0">
						<Image
							src={character.backgroundImage}
							alt={`${character.name} Background`}
							fill
							className="object-cover scale-110 group-hover:scale-100 transition duration-300"
							priority
						/>
					</div>
				</div>
				<h3 className="font-semibold text-xl text-center text-secondary group-hover:text-primary transition duration-300">
					{character.name}
				</h3>
			</div>
		</Link>
	);
};

export default function CharacterSection() {
	return (
		<section className="my-8 px-5 xl:px-24">
			<h2 className="text-3xl text-secondary font-bold mb-8">Characters</h2>

			<div className="grid grid-cols-2  md:grid-cols-4 gap-8">
				{characters.map((character) => (
					<CharacterCard key={character.id} character={character} />
				))}
			</div>
		</section>
	);
}
