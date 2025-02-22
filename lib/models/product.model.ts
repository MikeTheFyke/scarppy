import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
	{
		url: { type: String, required: true, unique: true },
		title: { type: String, required: true },
		image: { type: String, required: true },
		currency: { type: String, required: true },
		currentPrice: { type: Number, required: true },
		originalPrice: { type: Number, required: true },
		concatPrice: { type: Number, required: true },
		lowestPrice: { type: Number },
		highestPrice: { type: Number },
		averagePrice: { type: Number },
		priceHistory: [
			{
				prices: { type: Number, required: true },
				date: { type: Date, default: Date.now },
			},
		],
		discountRate: { type: Number },
		category: { type: String },
		description: { type: String },
		reviewsCount: { type: Number },
		stars: { type: Number },
		isOutOfStock: { type: Boolean, required: true },
		users: [{ email: { type: String, required: true } }],
		default: [],
	},
	{ timestamps: true }
);

const Product =
	mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
