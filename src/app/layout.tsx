import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Nav } from "@/components/organisms/nav";
import { Footer } from "@/components/organisms/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children, modal }: { children: React.ReactNode, modal: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.className} overscroll-none`}>
				<Nav />
				<div className="flex h-full flex-col items-center justify-between px-24 py-12"> {children}</div>
				<Footer />
				{modal}
			</body>
		</html>
	);
}
