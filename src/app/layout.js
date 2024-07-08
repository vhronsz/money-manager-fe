import {Inter} from "next/font/google";
import "./globals.css";
import Notification from "@/app/Component/Notification";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
	title: "Money manager",
	description: "Manage expense and balance",
};

export default function RootLayout({children}) {
	return (
		<html lang="en">
		<body className={inter.className}>
		{children}
		</body>
		</html>
	);
}
