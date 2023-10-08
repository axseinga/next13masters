/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import React from "react";
import { useRouter} from "next/navigation";

export const Searchbar = () => {
	const [searchValue, setSearchValue] = React.useState("");
	const inputRef = React.useRef<HTMLInputElement>(null);
	const router = useRouter();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	// @todo fix path, find way to handle backspaces test

	const handleSubmit = (e: React.FormEvent) => {
		if (searchValue === "") return;
		e.preventDefault();
		const path = `/search/?query=${searchValue}` as const;
		// @ts-ignore
		router.push(path);
	};

	React.useEffect(() => {
		const input = inputRef.current;
		if (!input) return;

		let timer: NodeJS.Timeout;

		const handleKeyUp = () => {
			if (timer) clearTimeout(timer);
			timer = setTimeout(() => {
				if (searchValue === "") return;
				const path = `/search/?query=${searchValue}` as const;
				// @ts-ignore
				router.push(path);
			}, 5000);
		};

		const handleKeyPress = () => {
			clearTimeout(timer);
		};

		input.addEventListener("keyup", handleKeyUp);
		input.addEventListener("keypress", handleKeyPress);

		return () => {
			input.removeEventListener("keyup", handleKeyUp);
			input.removeEventListener("keypress", handleKeyPress);
		};
	}, [searchValue, router]);

	return (
		<form className="flex h-full items-center justify-items-center gap-2" onSubmit={handleSubmit}>
			<label
				htmlFor="search"
				className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
			>
				Search
			</label>
			<div>
				<input
					type="search"
					id="search"
					role="searchbox"
					name="search"
					value={searchValue}
					onChange={handleChange}
					placeholder="Search..."
					required
					className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 py-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
					ref={inputRef}
				/>
			</div>
			<button
				type="submit"
				className="rounded-lg bg-gray-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
			>
				Search
			</button>
		</form>
	);
};
