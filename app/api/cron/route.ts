import Product from "@/lib/models/product.model";

import { scrapeAmazonProduct } from "@/lib/scraper";
import { connectToDB } from "@/lib/scraper/mongoose";

export async function GET() {
	try {
		connectToDB();

		const products = await Product.find({});

		if (!products) throw new Error("No products found");

		const updatedProducts = await Promise.all(
			products.map(async (currentProduct) => {
				const scrapedProduct = await scrapeAmazonProduct(currentProduct.url);
			})
		);
	} catch (error) {
		throw new Error(`Error in GET: ${error}`);
	}
}
