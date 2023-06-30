import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div>
				<h1 className="text-sky-800 text-3xl font-bold">Next.js Template</h1>
				<ul>
					<li>prettier</li>
					<li>eslint</li>
					<li>typescript</li>
					<li>pnpm</li>
				</ul>
			</div>
		</main>
	);
}
