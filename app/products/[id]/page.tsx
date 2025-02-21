import { getProductById } from "@/lib/actions";
import { redirect } from "next/navigation";
import Image from "next/image";

type Props = {
	params: { id: string };
};

const ProductDetails = async ({ params: { id } }: Props) => {
	const product = await getProductById(id);

	if (!product) redirect("/");

	return (
		<div className="product-container">
			<div className="flex gap-28 xl:flex-row flex-col">
				<div className="product-image">
					<Image
						src={product.image}
						alt={product.title}
						width={580}
						height={480}
						className="mx-auto"
					/>
				</div>
				<div></div>
			</div>
		</div>
	);
};

export default ProductDetails;
