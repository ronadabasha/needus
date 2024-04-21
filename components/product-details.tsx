"use client";
import Image from "next/image";
import products from "@/data/products";
import { useState } from "react";
import clsx from "clsx";
import StarIcon from "./icons/star-icon";
import Button, { ButtonKind } from "./button";

const ProductDetails = () => {
  const [selectedImageIndex, setSlectedImageIndex] = useState(0);
  const [measurement, setMeasurement] = useState("");
  const handleImageClick = (index: number): void => {
    setSlectedImageIndex(index);
  };

  const handleMeasurement = (item: string) => {
    setMeasurement(item);
  };

  return (
    <div className="flex items-start max-w-8xl w-full mt-20 mb-[50px] mx-auto pl-20">
      <div className="flex">
        <div>
          {products[0]?.images?.map((image: string, index) => {
            console.log("index", index, selectedImageIndex);
            return (
              <div
                key={image}
                className={clsx(
                  "w-[150px] p-3 mb-[30px] cursor-pointer",
                  index === selectedImageIndex
                    ? "border border-[#E73C17]"
                    : "border border-[#F0F0F0]"
                )}
              >
                <Image
                  src={image}
                  width="0"
                  height="0"
                  layout="responsive"
                  className="w-full h-auto"
                  alt={products[0].name}
                  onClick={() => handleImageClick(index)}
                />
              </div>
            );
          })}
        </div>
        <div className="relative flex flex-col items-center justify-center w-full bg-needus-light-grey min-w-[530px] p-[30px] ml-3  mb-[30px]">
          <Image
            src={products[0]?.images[selectedImageIndex]}
            width="0"
            height="0"
            layout="responsive"
            objectFit="contain"
            className="w-full h-auto"
            alt={products[0].name}
          />
          <span className="w-full text-[15px] leading-[18px] text-needus-grey text-left font-inter font-light block absolute -bottom-[40px]">
            {products[0]?.name}
          </span>
        </div>
      </div>
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
          <div className="mt-11">
            {products[0]?.measurement.map((item) => {
              return (
                <Button
                  key="item"
                  kind={
                    measurement === item
                      ? ButtonKind.primaryOutlined
                      : ButtonKind.secondary
                  }
                  onClick={() => handleMeasurement(item)}
                >
                  {item}
                </Button>
              );
            })}
          </div>
        )}

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
