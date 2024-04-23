"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import { Product } from "@/data/products";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Zoom } from "swiper/modules";

type Props = {
  product: Product;
};

const ProductImages = ({ product }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="relative w-full lg:w-auto h-auto flex flex-col items-center xl:flex-row md:border md:border-[needus-light-grey] md:mb-8 lg:mb-0 md:pb-8 lg:pb-0 lg:border-0 xl:bg-needus-light-grey">
      <div className="max-w-[275px] md:max-w-[600px]  lg:max-w-[528px] xl:max-w-[150px] bg-white mt-[25px] xl:-mt-[30px] xl:w-[150px] order-last xl:order-first  pr-3">
        <Swiper
          onSwiper={setThumbsSwiper}
          height={500}
          navigation={{
            enabled: product.images.length > 4 ? true : false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 3,
              direction: "horizontal",
              spaceBetween: 12,
            },
            1280: {
              slidesPerView: 4,
              direction: "vertical",
              spaceBetween: 0,
            },
          }}
        >
          {product.images?.map((item) => (
            <SwiperSlide
              key={`product-thumb-gallery-${item}`}
              className="!flex items-center p-[15px] w-auto mt-[30px] border"
            >
              <img
                src={item}
                alt={``}
                className="w-full h-auto max-w-[120px] mx-auto cursor-pointer"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="max-w-full lg:max-w-[528px] text-center xl:bg-[#F1F1F1] xl:bg-transparent order-first xl:order-last">
        <Swiper
          modules={[Navigation, Zoom, Thumbs]}
          zoom
          thumbs={{
            swiper: thumbsSwiper,
          }}
          effect="flip"
        >
          {product.images?.map((item) => (
            <SwiperSlide
              key={`product-gallery-${item}`}
              className="!flex items-center"
            >
              <Image
                src={item}
                alt={``}
                width={468}
                height={0}
                className="mx-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <span className="w-full text-[15px] leading-[18px] text-needus-grey font-inter font-light block absolute text-center xl:text-left xl:-bottom-[40px]">
          {product?.name}
        </span>
      </div>
    </div>
  );
};

export default ProductImages;
