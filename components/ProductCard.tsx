import type { Product } from "@/types";
import React from "react";

interface Props {
	product: Product;
}

const ProductCard = ({ product }: Props) => {
	return <div>{product.title}</div>;
};

export default ProductCard;
