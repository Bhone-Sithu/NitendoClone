import Image from "next/image";
import BannerSection from "./components/BannerSection";
import CharacterSection from "./components/CharacterSection";
import DigitalSection from "./components/DigitalSection";
import FeatureSection from "./components/FeatureSection";
import Hero from "./components/HeroSection";
import NewsSection from "./components/NewSection";

export default function Home() {
	return (
		<div>
			<section id="hero">
				<Hero />
			</section>
			<hr />

			<section id="feature">
				<FeatureSection />
			</section>
			<hr />
			<section id="online-store">
				<BannerSection
					title="Online Store"
					imageSrc="/assets/image-store.png"
					text="Shop games, exclusive Nintendo merchandise, and more! Plus, get free shipping on orders $50 and over."
					buttonText="Start shopping"
				/>
			</section>

			<hr />
			<section id="gaming-system">
				<BannerSection
					imageHeight="h-[400px]"
					title="Gaming System"
					imageSrc="/assets/image-gaming-system.avif"
					text="Get to know the Nintendo Switch 2 system"
					buttonText="Learn more"
				/>
			</section>
			<hr />
			<section id="switch-online">
				<BannerSection
					title="Nitendo Switch Online"
					imageSrc="/assets/image-switch-online.jpg"
					text="Join Nintendo Switch Online to access online play in compatible games, 100+ classic games, and more."
					buttonText="Learn more"
				/>
				<p className=" text-gray-500 text-sm mx-5 lg:mx-24">
					Terms apply. https://www.nintendo.com/us/purchase-terms/
				</p>
			</section>
			<hr />

			<section id="news" className="my-8 px-5 xl:px-24">
				<NewsSection />
			</section>
			<hr />
			<section id="characters">
				<CharacterSection />
			</section>

			<hr />
			<section id="digital" className="my-8 px-5 xl:px-24">
				<DigitalSection />
			</section>

			<div className="w-full h-[100px] bg-primary flex items-center justify-center">
				<Image
					src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Nintendo.svg"
					alt="Nintendo Logo"
					className="object-contain"
					width={200}
					height={10}
					priority
				/>
			</div>
		</div>
	);
}
