"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import { Product } from "@/data/products";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

type Props = {
  product: Product;
};

const ProductImages = ({ product }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  return (
    <div className="relative w-full md:w-auto h-auto flex flex-col items-center xl:flex-row xl:bg-needus-light-grey">
      <div className="w-dvw max-w-[275px] bg-white xl:w-[150px] order-last xl:order-first  pr-3">
        <Swiper
          onSwiper={setThumbsSwiper}
          height={500}
          breakpoints={{
            0: {
              slidesPerView: 3,
              direction: "horizontal",
              navigation: true,
            },
            1280: {
              slidesPerView: 4,
              direction: "vertical",
              navigation: false,
            },
          }}
        >
          {product.images?.map((item) => (
            <SwiperSlide
              key={`product-thumb-gallery-${item}`}
              className="flex items-center p-[15px] w-auto mt-[30px] border"
            >
              <Image
                src={item}
                alt={``}
                width={0}
                height={0}
                className="w-full h-auto max-w-[120px] mx-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="max-w-full md:max-w-[528px] text-center order-first xl:order-last">
        <Swiper
          modules={[Navigation, Thumbs]}
          thumbs={{ swiper: thumbsSwiper }}
          effect="flip"
        >
          {product.images?.map((item) => (
            <SwiperSlide key={`product-gallery-${item}`} className="">
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
