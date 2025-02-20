"use server";

import { scrapeAmazonProduct } from "../scraper";
import { connectToDB } from "../scraper/mongoose";

export async function scrapeAndStoreProduct(productURL: string) {
	if (!productURL) return;

	try {
		connectToDB();
		const scrapedProduct = await scrapeAmazonProduct(productURL);

		if (!scrapedProduct) return;

		// const product = {
		//     ...scrapedProduct,
		//     url: productURL
		// }
	} catch (error: any) {
		throw new Error(`Failed to create/update product: ${error.message}`);
	}
}
