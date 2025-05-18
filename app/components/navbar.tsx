export default function Navbar() {
	return (
		<nav className="w-full bg-primary flex justify-between">
			<div className="p-2">hi</div>
			<div>hi</div>
			<div className="bg-primary text-foreground p-4">Test Primary</div>
			<div style={{ backgroundColor: "var(--primary)" }}>Test</div>
		</nav>
	);
}
