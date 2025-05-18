import { Gamepad2, Heart } from "lucide-react";
import Image from "next/image";
import React from "react";

export type DigitalItem = {
	id: number;
	image: string;
	title: string;
	releaseDate: string;
	price: string;
	type: string;
};

interface DigitalCardProps {
	item: DigitalItem;
}

export default function DigitalCard({ item }: DigitalCardProps) {
	return (
		<div className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden h-[400px] w-fit flex flex-col group cursor-pointer">
			<div className="relative h-[550px] w-[300px] overflow-hidden">
				<Image
					src={item.image}
					alt={item.title}
					fill
					className="object-cover group-hover:scale-110 transition duration-300 overflow-hidden"
				/>
			</div>
			<div className="p-4 flex flex-col h-full justify-between">
				<div>
					<h3 className="text-secondary font-semibold text-base mb-2 group-hover:text-primary">
						{item.title}
					</h3>
					<p className="text-secondary text-sm">{item.releaseDate}</p>
				</div>
				<div className="flex flex-col justify-between ">
					<div className="flex items-center gap-5">
						<span className="text-lg font-bold">{item.price}</span>
						<span className="text-sm opacity-50 font-bold line-through">
							{item.price + 30}
						</span>
						<span className="text-xs font-bold text-white bg-primary px-2 py-1 rounded-full ">
							-80%
						</span>
					</div>
					<div className="flex justify-between items-center gap-2">
						<div className="flex items-center gap-2">
							<Gamepad2 color="grey" />
							<span className="text-secondary text-sm">{item.type}</span>
						</div>
						<Heart color="red" />
					</div>
				</div>
			</div>
		</div>
	);
}
