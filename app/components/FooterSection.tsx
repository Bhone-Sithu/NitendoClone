import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FooterSection = () => {
	return (
		<footer className="bg-white pt-12">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* About Nintendo Section */}
					<div className="border-l-2 border-gray-200 pl-4 h-fit">
						<h3 className="font-bold mb-4 ">About Nintendo</h3>
						<ul className="space-y-2">
							<li>
								<Link href="/careers" className="text-red-600 hover:underline">
									Careers
								</Link>
							</li>
							<li>
								<Link
									href="/corporate-social-responsibility"
									className="text-red-600 hover:underline"
								>
									Corporate Social Responsibility
								</Link>
							</li>
						</ul>
					</div>

					{/* Shop Section */}
					<div className="border-l-2 border-gray-200 pl-4 h-fit">
						<h3 className="font-bold mb-4">Shop</h3>
						<ul className="space-y-2">
							<li>
								<Link href="/games" className="text-red-600 hover:underline">
									Games
								</Link>
							</li>
							<li>
								<Link href="/hardware" className="text-red-600 hover:underline">
									Hardware
								</Link>
							</li>
							<li>
								<Link href="/merchandise" className="text-red-600 hover:underline">
									Merchandise
								</Link>
							</li>
							<li>
								<Link href="/sales-deals" className="text-red-600 hover:underline">
									Sales & deals
								</Link>
							</li>
							<li>
								<Link href="/exclusives" className="text-red-600 hover:underline">
									Exclusives
								</Link>
							</li>
							<li>
								<Link href="/online-service" className="text-red-600 hover:underline">
									Online service
								</Link>
							</li>
							<li>
								<Link href="/retail-locations" className="text-red-600 hover:underline">
									Nintendo Retail Locations
								</Link>
							</li>
						</ul>
					</div>

					{/* Orders & Support Sections */}

					<div className="border-l-2 border-gray-200 pl-4 h-fit">
						<h3 className="font-bold mb-4">Orders</h3>
						<ul className="space-y-2">
							<li>
								<Link href="/order-details" className="text-red-600 hover:underline">
									Order details
								</Link>
							</li>
							<li>
								<Link href="/shipping-info" className="text-red-600 hover:underline">
									Shipping info
								</Link>
							</li>
							<li>
								<Link href="/refunds-returns" className="text-red-600 hover:underline">
									Refunds and returns
								</Link>
							</li>
							<li>
								<Link href="/faq" className="text-red-600 hover:underline">
									FAQ
								</Link>
							</li>
						</ul>
					</div>
					<div className="border-l-2 border-gray-200 pl-4 h-fit">
						<h3 className="font-bold mb-4">Support</h3>
						<ul className="space-y-2">
							<li>
								<Link href="/nintendo-switch" className="text-red-600 hover:underline">
									Nintendo Switch
								</Link>
							</li>
							<li>
								<Link href="/nintendo-account" className="text-red-600 hover:underline">
									Nintendo Account
								</Link>
							</li>
							<li>
								<Link href="/other-systems" className="text-red-600 hover:underline">
									Other systems
								</Link>
							</li>
							<li>
								<Link href="/repairs" className="text-red-600 hover:underline">
									Repairs
								</Link>
							</li>
							<li>
								<Link href="/product-recycling" className="text-red-600 hover:underline">
									Nintendo product recycling
								</Link>
							</li>
							<li>
								<Link href="/warranty" className="text-red-600 hover:underline">
									Warranty
								</Link>
							</li>
							<li>
								<Link href="/licensed-product" className="text-red-600 hover:underline">
									Licensed product information
								</Link>
							</li>
						</ul>
					</div>
					{/* Parents, Privacy, Community, & Documents Sections */}

					<div className="border-l-2 border-gray-200 pl-4 h-fit">
						<h3 className="font-bold mb-4">Parents</h3>
						<ul className="space-y-2">
							<li>
								<Link href="/info-for-parents" className="text-red-600 hover:underline">
									Info for parents
								</Link>
							</li>
							<li>
								<Link href="/parental-controls" className="text-red-600 hover:underline">
									Parental controls
								</Link>
							</li>
						</ul>
					</div>
					<div className="border-l-2 border-gray-200 pl-4 h-fit">
						<h3 className="font-bold mb-4">Privacy</h3>
						<ul className="space-y-2">
							<li>
								<Link href="/privacy-policy" className="text-red-600 hover:underline">
									Privacy policy
								</Link>
							</li>
							<li>
								<Link href="/cookies" className="text-red-600 hover:underline">
									Cookies and interest-based ads
								</Link>
							</li>
						</ul>
					</div>
					<div className="border-l-2 border-gray-200 pl-4 h-fit">
						<h3 className="font-bold mb-4">Community</h3>
						<ul className="space-y-2">
							<li>
								<Link href="/community-guidelines" className="text-red-600 hover:underline">
									Community guidelines
								</Link>
							</li>
							<li>
								<Link href="/online-safety" className="text-red-600 hover:underline">
									Online safety
								</Link>
							</li>
						</ul>
					</div>
					<div className="border-l-2 border-gray-200 pl-4 h-fit">
						<h3 className="font-bold mb-4">Documents & policies</h3>
						<ul className="space-y-2">
							<li>
								<Link href="/health-safety" className="text-red-600 hover:underline">
									Health & safety precautions
								</Link>
							</li>
							<li>
								<Link href="/wireless-regulatory" className="text-red-600 hover:underline">
									Wireless regulatory info
								</Link>
							</li>
							<li>
								<Link href="/supply-chain" className="text-red-600 hover:underline">
									Supply chain transparency
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Social Media & ESRB Section */}
				<div className="mt-12 flex flex-col md:flex-row justify-between items-center border-t pt-6">
					<div className="flex space-x-6 mb-6 md:mb-0">
						<Link href="https://facebook.com/nintendo" className="hover:opacity-80">
							<Facebook color="grey" size={34} />
						</Link>
						<Link href="https://instagram.com/nintendo" className="hover:opacity-80">
							<Instagram color="grey" size={34} />
						</Link>
						<Link href="https://twitter.com/nintendo" className="hover:opacity-80">
							<Twitter color="grey" size={34} />
						</Link>
						<Link href="https://youtube.com/nintendo" className="hover:opacity-80">
							<Youtube color="grey" size={34} />
						</Link>
					</div>
					<div className="flex items-center space-x-4">
						<Image src="/assets/image-rating.png" alt="ESRB Rating" width={50} height={20} />
					</div>
				</div>
			</div>
			<br />
			<div className="h-[250px] md:h-[80px] bg-secondary w-full text-center flex flex-col md:flex-row justify-center items-center md:justify-between text-white text-xs px-10 ">
				<span className="md:text-start text-center">
					© 2025 Nintendo. Games are property of their respective owners. Nintendo of America Inc.
					Headquarters are in Redmond, Washington, USA
				</span>
				<br />
				<div className="flex flex-col md:flex-row items-center gap-4">
					<span>Contact us</span>
					<span>Website feedback</span>
					<span>Terms of Use</span>
				</div>
				<br />
				<div className="flex items-center gap-2">
					<img src="/assets/logo-usa.svg" alt="USA Flag" className="w-7 h-7 " />
					<span>English (United States)</span>
				</div>
			</div>
		</footer>
	);
};

export default FooterSection;
