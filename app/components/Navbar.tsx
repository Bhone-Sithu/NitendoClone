import {
	Compass,
	Heart,
	type LucideIcon,
	Menu,
	Search,
	ShieldQuestion,
	ShoppingBag,
	ShoppingCart,
	UserRound,
} from "lucide-react";
import Image from "next/image";

function MobileNavLink({ icon: Icon }: { icon: LucideIcon }) {
	return (
		<div className="flex flex-col items-center gap-1">
			<Icon size={30} fill="grey" color="grey" />
		</div>
	);
}

function NavLink({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
	return (
		<li className="flex items-center gap-1">
			<Icon size={17} color="red" />
			<p className="nav-link">{label}</p>
		</li>
	);
}

function BorderNavLink({
	icon: Icon,
	label,
	fill,
}: { icon: LucideIcon; label?: string; fill: boolean }) {
	return (
		<div className="hidden lg:flex items-center px-4 py-1 bg-[#F8F8F8] rounded-full gap-2 group cursor-pointer">
			<Icon
				size={18}
				color="grey"
				fill={fill ? "grey" : "none"}
				className="transition-colors duration-250 group-hover:fill-primary "
			/>
			{label && <p className="nav-link">{label}</p>}
		</div>
	);
}

export default function Navbar() {
	return (
		<div className="w-full">
			{/* Desktop Navigation */}
			<nav className="w-full bg-primary lg:bg-white h-14 items-center justify-between border-b border-gray-200  lg:flex">
				<div className="flex items-center gap-8 h-full ">
					<div className="lg:bg-primary h-full pt-1 flex items-center justify-between w-full">
						<Image
							src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Nintendo.svg"
							alt="Nintendo Logo"
							className="object-contain"
							width={140}
							height={10}
							priority
						/>
						<img
							src="/assets/logo-usa.svg"
							alt="USA Flag"
							className="block lg:hidden w-7 h-7 mr-5"
						/>
					</div>
					<ul className="hidden lg:flex items-center gap-6 text-white font-medium">
						<NavLink icon={Compass} label="Explore" />
						<NavLink icon={ShoppingBag} label="Shop" />
						<NavLink icon={ShieldQuestion} label="Support" />
					</ul>
				</div>
				<div className=" items-center gap-4 hidden lg:flex">
					<BorderNavLink icon={Search} label="Search" fill={false} />
					<BorderNavLink icon={Heart} fill={true} />
					<BorderNavLink icon={ShoppingCart} fill={true} />

					<button
						type="button"
						className="hidden gap-2 lg:flex ml-2 px-4 py-1 border border-primary text-primary rounded-full bg-white hover:bg-red-50 font-semibold transition cursor-pointer"
					>
						<UserRound fill="red" />
						<span className="text-primary">Log in / Sign up</span>
					</button>

					<img src="/assets/logo-usa.svg" alt="USA Flag" className="w-7 h-7 mr-5" />
				</div>
			</nav>

			{/* Mobile Bottom Navigation */}
			<div className="lg:hidden fixed bottom-0 left-0 w-full flex justify-center my-10 z-50">
				<nav className="w-[80%] shadow-2xl rounded-full bg-white border-t border-gray-200 px-6 py-3 ">
					<div className="flex justify-between items-center relative">
						<MobileNavLink icon={Menu} />
						<MobileNavLink icon={Heart} />

						<div className="rounded-full bg-primary p-3 absolute -top-6 left-1/2 transform -translate-x-1/2 animate-pulse">
							<Search size={30} color="white" />
						</div>
						{/* biome-ignore lint/style/useSelfClosingElements: Needed for search icon to stay center and float above  */}
						<div></div>

						<MobileNavLink icon={ShoppingCart} />
						<MobileNavLink icon={UserRound} />
					</div>
				</nav>
			</div>
		</div>
	);
}
