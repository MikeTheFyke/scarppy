"use client";

import { scrapeAndStoreProduct } from "@/lib/actions";
import { useState, type FormEvent } from "react";

const isValidAmazonProductURL = (url: string) => {
	try {
		const parseURL = new URL(url);
		const hostname = parseURL.hostname;

		//Check
		if (
			hostname.includes("amazon.com") ||
			hostname.includes("amazon.") ||
			hostname.endsWith("amazon")
		) {
			return true;
		}
	} catch (error) {
		return false;
	}
	return false;
};

const SearchBar = () => {
	const [searchPrompt, setSearchPrompt] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const isValidLink = isValidAmazonProductURL(searchPrompt);

		if (!isValidLink) return alert("Please enter a valid link.");

		try {
			setIsLoading(true);
			// Scrape starts here
			const product = await scrapeAndStoreProduct(searchPrompt);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
			<input
				className="searchbar-input"
				type="text"
				value={searchPrompt}
				onChange={(e) => setSearchPrompt(e.target.value)}
				placeholder="Enter product link"
			/>
			<button
				className="searchbar-btn"
				type="submit"
				disabled={searchPrompt === ""}
			>
				{isLoading ? "Searching ..." : "Search"}
			</button>
		</form>
	);
};

export default SearchBar;
