import axios from "axios";
import * as cheerio from "cheerio";
import { extractPrice } from "../utils";

export async function scrapeAmazonProduct(url: string) {
	if (!url) return;

	//BrightData proxy configuration
	const username = String(process.env.BRIGHT_DATA_USERNAME);
	const password = String(process.env.BRIGHT_DATA_PASSWORD);
	const port = 33335;
	const session_id = (1000000 * Math.random()) | 0;
	const options = {
		auth: {
			username: `${username}-session-${session_id}`,
			password,
		},
		host: "brd.superproxy.io",
		port,
		rejectUnauthorized: false,
	};

	try {
		// Fetch prodcut page
		const response = await axios.get(url, options);
		const $ = cheerio.load(response.data);
		// console.log(response.data);
		const title = $("#productTitle").text().trim();
		const currentPrice = extractPrice(
			// $(".priceToPay span.a-price-whole"),
			// $("a.size.base.a-color-price"),
			// $(".a-button-selected .a-color-base"),
			$("span.a-price-whole")
		);
		const currentPriceCents = extractPrice($("span.a-price-fraction"));
		const originalPrice = extractPrice(
			$("#priceblock_ourprice"),
			$(".a-price.a-text-price span.a-offscreen"),
			$("#listPrice"),
			$("#priceblock_dealprice"),
			$(".a-size0base.a-color-price")
		);
		///
		/// My test function to concat prices fetched
		const decimalTest = currentPrice.indexOf(".");
		console.log(
			$("span.a-price-whole").text().trim().substring(0, decimalTest) +
				"." +
				$("span.a-price-fraction").text().trim().substring(0, 2)
		);
		///
		///
		// console.log("Current : " + currentPrice);
		// console.log("CurrentCents : " + currentPriceCents);
		// console.log("Original : " + originalPrice);
	} catch (error: any) {
		throw new Error(`Failed to scrape product: ${error.message}`);
	}
}
