import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import * as React from "react";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
	return (
		<nav className="sticky top-0 z-50 flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-800 shadow-md">
			<Link href="/" className="flex items-center gap-2" prefetch={false}>
				<Image
					src={"/unlevered-logo.png"}
					width={150}
					height={150}
					alt="unlevered-logo"
				/>
			</Link>
			<div className="hidden md:flex gap-4 items-center">
				<ModeToggle />
				<NavItem href="/" label="Home" />
				<NavItem href="/about" label="About" />
				<NavItem href="/services" label="Services" />
				<NavItem href="/portfolio" label="Portfolio" />
				<NavItem href="/contact" label="Contact" />
			</div>
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="outline" size="icon" className="md:hidden">
						<MenuIcon className="h-6 w-6 text-gray-800 dark:text-white" />
						<span className="sr-only">Toggle navigation menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left">
					<div className="grid w-[200px] p-4 space-y-2">
						<NavItem href="/" label="Home" />
						<NavItem href="/about" label="About" />
						<NavItem href="/services" label="Services" />
						<NavItem href="/portfolio" label="Portfolio" />
						<NavItem href="/contact" label="Contact" />
					</div>
				</SheetContent>
			</Sheet>
		</nav>
	);
};

const NavItem = ({ href, label }: { href: string; label: string }) => (
	<Link
		href={href}
		className="text-lg font-medium text-gray-800 dark:text-white hover:underline underline-offset-4"
		prefetch={false}
	>
		{label}
	</Link>
);

const MenuIcon = (props: any) => (
	<svg
		{...props}
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
	>
		<line x1="4" x2="20" y1="12" y2="12" />
		<line x1="4" x2="20" y1="6" y2="6" />
		<line x1="4" x2="20" y1="18" y2="18" />
	</svg>
);

export default Navbar;
