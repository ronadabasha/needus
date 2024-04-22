"use client";
import Image from "next/image";
import Button, { ButtonKind } from "./button";
import FavouritesIcon from "./icons/favourites-icon";
import CartIcon from "./icons/cart-icon";
import Price from "./price";

const ProductCard = () => {
  return (
    <div>
      <div className="text-center bg-needus-light-grey p-[22px]">
        <div className="flex justify-between">
          <span>New</span>
          <span className="flex w-[60px] h-[60px] items-center justify-center border border-color-[rgba(215, 215, 215, 1)] rounded-full">
            <FavouritesIcon
              filled={true}
              strokeColor="#E73C17"
              filledColor="#E73C17"
              className="mt-[2px]"
            />
          </span>
        </div>
        <Image
          width="0"
          height="0"
          layout="responsive"
          src="/assets/products/image-1.png"
          alt=""
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
        <p className="h4-inter font-normal mb-3 text-needus-black">
          Sony BRAVIA XR Android Tv
        </p>
        <Price
          price={800.22}
          oldPrice={1000.66}
          currency={"usd"} //todo change
          priceCustomStyle="h4-inter font-semibold"
          oldPriceCustomStyle="ml-3"
        />
      </div>
    </div>
  );
};

export default ProductCard;
