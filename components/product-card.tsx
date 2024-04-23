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
      <div className="flex flex-col justify-between items-center text-center bg-needus-light-grey p-[22px] min-h-[185px] md:min-h-[430px]">
        <div className="flex justify-between">
          <ul className="absolute left-[7px] top-[4px] md:top-6 md:left-6">
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
            <span className="flex w-[20px] md:w-[60px] h-[20px] md:h-[60px] absolute right-[9px] md:right-8 top-[7px] md:top-3 items-center justify-center border border-color-[rgba(215, 215, 215, 1)] rounded-full">
              <FavouritesIcon
                filled={true}
                strokeColor="#E73C17"
                filledColor="#E73C17"
                className="mt-[2px] w-[10px] md:w-[30px] h-[10px] md:h-[30px]"
              />
            </span>
          )}
        </div>
        <div className="flex items-center w-full h-[110px] md:h-[250px]">
          <Image
            width="0"
            height="0"
            layout="responsive"
            src={product.images[0]}
            alt={product.name}
          />
        </div>
        <Button
          kind={ButtonKind.outlineSecondary}
          onClick={() => {}}
          icon={
            <CartIcon className="mr-2 md:mr-6 w-[10px] h-[10px] md:w-[18px] md:h-[18px]" />
          }
          customStyle="py-[7px] px-[18px] md:px-8 bg-white max-w-[100px] md:max-w-[205px]"
        >
          Add to cart
        </Button>
      </div>
      <div className="pt-3 md:pt-12 pb-7 md:pb-[53px] p-4 text-center">
        <Link href="#" className="h4-inter font-normal mb-3 text-needus-black">
          {product.name}
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
