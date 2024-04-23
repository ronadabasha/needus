"use client";
import products from "@/data/products";
import { useEffect, useState } from "react";
import StarIcon from "./icons/star-icon";
import Button, { ButtonKind } from "./button";
import Price from "./price";
import MinusIcon from "./icons/minus-icon";
import PlusIcon from "./icons/plus-icon";
import ProductImages from "./product-images";
import clsx from "clsx";

const ProductDetails = () => {
  const [deviceWidth, setDeviceWidth] = useState<number>(window.innerWidth);
  const [fixedPosition, setFixedPosition] = useState(false);
  const [measurement, setMeasurement] = useState("");
  const [quantity, setQuantity] = useState(0);

  const handleMeasurement = (item: string) => {
    setMeasurement(item);
  };

  const handleWindowSize = () => {
    setDeviceWidth(window.innerWidth);
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const isMobile = deviceWidth <= 768;
    scrollTop >= 200 && isMobile
      ? setFixedPosition(true)
      : setFixedPosition(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSize);
    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, [deviceWidth]);

  useEffect(() => {
    console.log("hello");
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [deviceWidth]);

  return (
    <div className="scrollable-element flex flex-col lg:flex-row items-start max-w-8xl w-full mt-20 mb-[50px] mx-auto px-5 xl:pl-20 xl:pr-0">
      <ProductImages product={products[0]} />
      <div className="w-full lg:w-auto pl-0 lg:pl-[55px]">
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
                  customStyle="mb-[10px] md:py-6"
                  onClick={() => handleMeasurement(item)}
                >
                  {item}
                </Button>
              );
            })}
          </div>
        )}

        <div
          className={clsx({
            "fixed left-0 bottom-0 z-10 w-full bg-white px-5 py-[10px] shadow-[0px_0px_20px_5px_rgba(0,0,0,0.2)]":
              fixedPosition,
          })}
        >
          <div className="flex flex-col md:flex-row justify-between">
            <Price
              price={products[0]?.price}
              oldPrice={products[0]?.oldPrice}
              currency={products[0]?.currency}
              showTaxInfo
              priceCustomStyle="h1-inter-m md:h2-inter-d font-medium md:font-normal"
              oldPriceCustomStyle="h5-inter-d md:h3-inter-d ml-3"
            />
            <div className="flex">
              <Button
                kind={ButtonKind.outlineSecondary}
                disabled={quantity === 0}
                customStyle="py-[3px] md:py-[18px]  h-[30px] md:h-[60px] w-[23px] md:w-[66px] px-[3px] md:px-5"
                onClick={() => setQuantity(quantity - 1)}
                icon={<MinusIcon className="w-[16px] md:w-[24px]" />}
              />
              <span className="block text-center font-medium md:font-normal h-[30px] md:h-[60px] w-[23px] md:w-[66px] h3-inter-m md:h2-inter pb-[10px] pt-2 md:pt-[11px] border-t border-b">
                {quantity}
              </span>
              <Button
                kind={ButtonKind.outlineSecondary}
                disabled={quantity === products[0]?.stock}
                customStyle=" py-[3px] md:py-[18px] h-[30px] md:h-[60px] w-[23px] md:w-[66px] px-[3px] md:px-5"
                onClick={() => setQuantity(quantity + 1)}
                icon={<PlusIcon className="w-[16px] md:w-[24px]" />}
              />
            </div>
          </div>
          <div className="flex justify-end md:justify-between -mt-[30px] md:mt-[26px]">
            <Button
              kind={ButtonKind.primary}
              customStyle="mr-[11px] md:mr-0 font-medium h-[30px] md:h-[60px] px-[25px] py-[8px] md:px-[51px] md:py-[18px]"
            >
              Buy Now
            </Button>
            <Button
              kind={ButtonKind.primaryOutlined}
              customStyle="!button-primary-m md:!button-outlined-primary-d font-medium h-[30px] md:h-[60px] px-[25px] py-[8px] md:px-[51px] md:py-[18px]"
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
