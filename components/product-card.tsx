"use client";
import Image from "next/image";
import Button, { ButtonKind } from "./button";
import FavouritesIcon from "./icons/favourites-icon";
import CartIcon from "./icons/cart-icon";
import Price from "./price";
import { Product } from "@/data/products";
import Link from "next/link";
import Label from "./label";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div>
      <div className="text-center bg-needus-light-grey p-[22px]">
        <div className="flex justify-between">
          <ul>
            {product.newProduct && (
              <Label customStyle="bg-[#12A05C]" text="New" />
            )}
            {product.discount && (
              <Label customStyle="bg-[#E73C17]" text={product.discount} />
            )}
            {product.bestSeller && (
              <Label customStyle="bg-[#FF9900]" text="Hot" />
            )}
            {product.warranty && (
              <Label customStyle="bg-[#7F7CF6]" text={product.warranty} />
            )}
          </ul>
          {product.favourite && (
            <span className="flex w-[60px] h-[60px] absolute right-8 top-3 items-center justify-center border border-color-[rgba(215, 215, 215, 1)] rounded-full">
              <FavouritesIcon
                filled={true}
                strokeColor="#E73C17"
                filledColor="#E73C17"
                className="mt-[2px]"
              />
            </span>
          )}
        </div>
        <Image
          width="0"
          height="0"
          layout="responsive"
          src={product.images[0]}
          alt={product.name}
        />
        <Button
          kind={ButtonKind.outlineSecondary}
          onClick={() => {}}
          icon={<CartIcon className="mr-6 w-[18px] h-[18px]" />}
          customStyle="py-[14px] px-[15px] md:px-8 bg-white"
        >
          Add to cart
        </Button>
      </div>
      <div className="py-12 p-4 text-center">
        <Link href="#" className="h4-inter font-normal mb-3 text-needus-black">
          Sony BRAVIA XR Android Tv
        </Link>
        <Price
          price={product.price}
          oldPrice={product.oldPrice}
          currency={product.currency}
          priceCustomStyle="h4-inter font-semibold"
          oldPriceCustomStyle="ml-3"
        />
      </div>
    </div>
  );
};

export default ProductCard;
