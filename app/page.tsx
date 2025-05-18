import Image from "next/image";
import Hero from "./components/HeroSection";

export default function Home() {
	return (
		<div>
			<section id="hero">
				<Hero />
			</section>
			<hr />
			<section id="hero">
				<Hero />
			</section>
		</div>
	);
}
