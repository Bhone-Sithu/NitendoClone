import {
	Compass,
	Heart,
	type LucideIcon,
	Search,
	ShieldQuestion,
	ShoppingBag,
	ShoppingCart,
	UserRound,
} from "lucide-react";
import Image from "next/image";

// NavLink = icon + label, no border
function NavLink({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
	return (
		<li className="flex items-center gap-1">
			<Icon size={17} color="red" />
			<p className="nav-link">{label}</p>
		</li>
	);
}

// BorderNavLink = icon + label, with border and dirty white background
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
		<nav className="w-full bg-primary lg:bg-white h-14 flex items-center justify-between  border-b border-gray-200">
			<div className="flex items-center gap-8 h-full">
				<div className="lg:bg-primary h-full pt-1">
					<Image
						src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Nintendo.svg"
						alt="Nintendo Logo"
						className="object-contain"
						width={140}
						height={10}
						priority
					/>
				</div>
				<ul className="hidden lg:flex items-center gap-6 text-white font-medium">
					<NavLink icon={Compass} label="Explore" />
					<NavLink icon={ShoppingBag} label="Shop" />
					<NavLink icon={ShieldQuestion} label="Support" />
				</ul>
			</div>
			<div className="flex items-center gap-4">
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

				<img
					src="/assets/logo-usa.svg"
					alt="USA Flag"
					className="w-7 h-7 mr-5"
				/>
			</div>
		</nav>
	);
}
