"use client";
import products from "@/data/products";
import { useState } from "react";
import StarIcon from "./icons/star-icon";
import Button, { ButtonKind } from "./button";
import Price from "./price";
import MinusIcon from "./icons/minus-icon";
import PlusIcon from "./icons/plus-icon";
import ProductImages from "./product-images";

const ProductDetails = () => {
  const [measurement, setMeasurement] = useState("");
  const [quantity, setQuantity] = useState(0);

  const handleMeasurement = (item: string) => {
    setMeasurement(item);
  };

  return (
    <div className="flex flex-col lg:flex-row items-start max-w-8xl w-full mt-20 mb-[50px] mx-auto px-9 lg:pl-20 lg:pr-0">
      <ProductImages product={products[0]} />
      <div className="pl-[55px]">
        <p className="font-inter font-normal text-needus-black text-[18px] leading-[21px] mb-3">
          Brand <span className="font-light ">{products[0]?.brand}</span>
        </p>
        <p className="font-inter font-normal text-needus-black text-[18px] leading-[21px] mb-3">
          Model <span className="font-light ">{products[0]?.model}</span>
        </p>
        <p className="font-inter font-normal text-needus-black text-[18px] leading-[21px] mb-3">
          Availability{" "}
          <span
            className={
              products[0]?.stock
                ? "text-needus-black font-light"
                : "text-needus-dark-red font-medium"
            }
          >
            {products[0]?.stock
              ? "Only " + products[0]?.stock + " in stock"
              : "Out of stock"}
          </span>
        </p>
        <h2 className="h2-inter mt-2 pr-8">{products[0]?.name}</h2>
        <div className="flex my-5">
          {[...Array(4)]?.map((item, i) => {
            const filledColor = products[0]?.rating > i ? "#E73C17" : "#F4F5F8";
            return (
              <StarIcon
                key={i}
                filled={true}
                filledColor={filledColor}
                className="mr-[10px]"
              />
            );
          })}
        </div>
        {products[0]?.description && (
          <ul className="pl-4 pr-8">
            {products[0]?.description?.map((item) => {
              return (
                <li key={item} className="list-disc h5-inter font-light mb-4">
                  {item}
                </li>
              );
            })}
          </ul>
        )}
        {products[0]?.measurement && (
          <div
            className="mt-11 border-b border-[
            rgba(240, 240, 240, 1)] mb-[30px]"
          >
            {products[0]?.measurement.map((item) => {
              return (
                <Button
                  key={item}
                  kind={
                    measurement === item
                      ? ButtonKind.primaryOutlined
                      : ButtonKind.secondary
                  }
                  customStyle="mb-[10px]"
                  onClick={() => handleMeasurement(item)}
                >
                  {item}
                </Button>
              );
            })}
          </div>
        )}
        <div className="flex justify-between">
          <Price
            price={products[0]?.price}
            oldPrice={products[0]?.oldPrice}
            currency={products[0]?.currency}
            showTaxInfo
            priceCustomStyle="h1-inter-m md:h2-inter-d font-medium md:font-normal"
            oldPriceCustomStyle="h5-inter-d md:h3-inter-d ml-3"
          />
          <div>
            <Button
              kind={ButtonKind.outlineSecondary}
              disabled={quantity === 0}
              customStyle="py-[18px] px-[21px]"
              onClick={() => setQuantity(quantity - 1)}
            >
              <MinusIcon />
            </Button>
            <span className="h2-inter font-normal pb-[10px] pt-[11px] px-[29px] border-t border-b">
              {quantity}
            </span>
            <Button
              kind={ButtonKind.outlineSecondary}
              disabled={quantity === products[0]?.stock}
              customStyle="py-[18px] px-[21px]"
              onClick={() => setQuantity(quantity + 1)}
            >
              <PlusIcon />
            </Button>
          </div>
        </div>

        <div className="flex justify-between pr-[22px] mt-[26px]">
          <Button kind={ButtonKind.primary}>Buy Now</Button>
          <Button kind={ButtonKind.primaryOutlined} customStyle="font-medium">
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
